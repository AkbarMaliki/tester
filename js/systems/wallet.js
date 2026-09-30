// Wallet: the player's money (G). Pure data + events, no DOM: shops, shipping bins, quests… call addGold / spendGold,
// the HUD (ui/inventory.js) listens to wallet:changed.
import { emit } from '../engine/events.js';
import { START_GOLD } from '../game/config.js';
import { registerSave } from './save.js';

export const wallet = { gold: START_GOLD, incoming: {} };   // incoming: money on its way, per source (e.g. the shipping bin)

const changed = (delta) => emit('wallet:changed', { gold: wallet.gold, delta });
export const canAfford = (n) => wallet.gold >= n;
export function addGold(n) {
  n = Math.round(n);
  if (!n) return;
  wallet.gold = Math.max(0, wallet.gold + n);
  changed(n);
}
// pays n if there's enough; returns false and changes nothing otherwise
export function spendGold(n) {
  n = Math.round(n);
  if (wallet.gold < n) return false;
  wallet.gold -= n;
  changed(-n);
  return true;
}
// money that will arrive later (shown next to the gold, e.g. "+1.340 besok"); the source pays it with addGold itself
export function setIncoming(source, n) {
  const v = Math.max(0, Math.round(n));
  if ((wallet.incoming[source] || 0) === v) return;
  if (v) wallet.incoming[source] = v; else delete wallet.incoming[source];
  changed(0);
}
export const incomingTotal = () => Object.values(wallet.incoming).reduce((a, b) => a + b, 0);
export const fmtGold = (n) => `${Math.round(n).toLocaleString('id-ID')} G`;

registerSave('wallet', {
  save: () => wallet.gold,
  load(d) { wallet.gold = Math.max(0, Math.round(+d || 0)); changed(0); },
  reset() { wallet.gold = START_GOLD; changed(0); },
  summary: (d) => fmtGold(d),
});
