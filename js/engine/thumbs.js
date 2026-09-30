// Small preview images of 3D objects (inventory icons, shop lists…), rendered once with a throw-away
// renderer so they match the in-game models. Call disposeThumbnails() when done to free the extra GL context.
import * as THREE from 'three';

let r = null, sc, cam;
const box = new THREE.Box3(), sphere = new THREE.Sphere();

// returns a PNG data url of `obj` (which is borrowed and put back where it was)
export function thumbnail(obj, size = 128, { yaw = 0.75, pitch = 0.5, zoom = 1 } = {}) {
  if (!r) {
    r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    r.setClearColor(0x000000, 0); r.toneMapping = THREE.NeutralToneMapping;
    sc = new THREE.Scene();
    sc.add(new THREE.HemisphereLight('#ffffff', '#5a4a7a', 2.2));
    const key = new THREE.DirectionalLight('#fff4e0', 2.6); key.position.set(2, 4, 3); sc.add(key);
    cam = new THREE.PerspectiveCamera(28, 1, 0.01, 100);
    cam.layers.enableAll();   // models may sit on other layers (e.g. core.js DETAIL_LAYER, hidden on the map view)
  }
  r.setSize(size, size, false);
  const parent = obj.parent;
  sc.add(obj); obj.updateMatrixWorld(true);
  box.setFromObject(obj).getBoundingSphere(sphere);
  const dist = sphere.radius / Math.sin(THREE.MathUtils.degToRad(cam.fov / 2)) / zoom;
  cam.position.set(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch)).multiplyScalar(dist).add(sphere.center);
  cam.lookAt(sphere.center); cam.near = dist / 20; cam.far = dist * 4; cam.updateProjectionMatrix();
  r.render(sc, cam);
  const url = r.domElement.toDataURL('image/png');
  sc.remove(obj); if (parent) parent.add(obj);
  return url;
}
// copy of an icon url with ⭐n painted in the bottom-left corner (quality variants); calls done(newUrl) once loaded
export function starred(url, n, done) {
  const img = new Image();
  img.onload = () => {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d'); g.drawImage(img, 0, 0, 128, 128);
    g.font = '800 30px system-ui, sans-serif'; g.textBaseline = 'bottom'; g.lineWidth = 6; g.strokeStyle = '#2a1a10'; g.fillStyle = '#ffd23a';
    const txt = '★'.repeat(n);
    g.strokeText(txt, 4, 126); g.fillText(txt, 4, 126);
    done(c.toDataURL('image/png'));
  };
  img.src = url;
}
export function disposeThumbnails() { if (r) { r.dispose(); r.forceContextLoss(); r = null; } }
