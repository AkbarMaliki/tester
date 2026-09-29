// Firebase Realtime Database through its REST API (no SDK, no npm package).
// Signs in anonymously when the project has Anonymous auth enabled, so database rules can lock every player to
// their own node (auth.uid). If sign-in is not allowed it falls back to unauthenticated requests with a random
// per-device id, which only works while the rules are open. Every call rejects on failure; callers fall back to local.
const read = (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } };
const TIMEOUT = 8000;

export function createFirebase(cfg) {
  const enabled = !!cfg.databaseURL;
  const authKey = `fb.${cfg.projectId || 'db'}.auth`;
  let auth = read(authKey);      // { uid, idToken, refreshToken, exp }
  let open = !cfg.apiKey;        // true = the project refused anonymous sign-in: use unauthenticated requests
  let deviceId = read('fb.deviceId');
  if (!deviceId) { deviceId = 'dev_' + Math.random().toString(36).slice(2, 12) + Date.now().toString(36); write('fb.deviceId', deviceId); }

  async function post(url, body, form) {
    const r = await fetch(url, {
      method: 'POST', signal: AbortSignal.timeout(TIMEOUT),
      headers: { 'Content-Type': form ? 'application/x-www-form-urlencoded' : 'application/json' },
      body: form ? new URLSearchParams(body) : JSON.stringify(body),
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) { const e = new Error(j.error?.message || `HTTP ${r.status}`); e.status = r.status; throw e; }
    return j;
  }
  // a valid ID token, or null when running unauthenticated
  async function token() {
    if (open) return null;
    if (auth && auth.exp > Date.now() + 60_000) return auth.idToken;
    try {
      if (auth?.refreshToken) {
        const j = await post(`https://securetoken.googleapis.com/v1/token?key=${cfg.apiKey}`, { grant_type: 'refresh_token', refresh_token: auth.refreshToken }, true);
        auth = { uid: j.user_id, idToken: j.id_token, refreshToken: j.refresh_token, exp: Date.now() + j.expires_in * 1000 };
      } else {
        const j = await post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${cfg.apiKey}`, { returnSecureToken: true });
        auth = { uid: j.localId, idToken: j.idToken, refreshToken: j.refreshToken, exp: Date.now() + j.expiresIn * 1000 };
      }
      write(authKey, auth);
      return auth.idToken;
    } catch (e) {
      if (e.status === 400 || e.status === 403) {   // sign-in disabled / bad key: stop trying this session (network errors retry)
        console.warn(`firebase: anonymous sign-in unavailable (${e.message}), using unauthenticated access`);
        open = true;
      }
      throw e;
    }
  }
  async function req(method, path, body, { keepalive = false } = {}) {
    if (!enabled) throw new Error('firebase not configured');
    let t = null;
    try { t = await token(); } catch (e) { if (!open) throw e; }
    const r = await fetch(`${cfg.databaseURL}/${path}.json${t ? `?auth=${t}` : ''}`, {
      method, keepalive, signal: keepalive ? undefined : AbortSignal.timeout(TIMEOUT),
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    if (!r.ok) throw new Error(`firebase ${method} ${path}: HTTP ${r.status} ${(await r.text()).slice(0, 120)}`);
    return r.json();
  }

  return {
    enabled,
    // the node this player owns: the auth uid when signed in, otherwise the device id
    async id() { try { await token(); } catch { /* falls back below */ } return !open && auth ? auth.uid : deviceId; },
    get signedIn() { return !open && !!auth; },
    get: (path) => req('GET', path),
    set: (path, value, o) => req('PUT', path, value, o),
    update: (path, value, o) => req('PATCH', path, value, o),   // multi-path: { 'a/b': 1, 'c': 2 }
    remove: (path) => req('DELETE', path),
  };
}
