// Draw-call batching. Every prop is built from many small primitives; on integrated GPUs each mesh
// (and again each shadow caster) costs a draw call, so meshes sharing a material are merged into one geometry.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { lam } from './core.js';

const toSpace = new THREE.Matrix4(), mtx = new THREE.Matrix4(), v = new THREE.Vector3();

// geometry of `m` in the local space of `root`, reduced to position/normal(/uv)(/color)
function baked(m, root, keepUv, color) {
  const g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
  g.applyMatrix4(mtx.multiplyMatrices(toSpace.copy(root.matrixWorld).invert(), m.matrixWorld));
  for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && !(keepUv && k === 'uv')) g.deleteAttribute(k);
  g.morphAttributes = {}; g.clearGroups();
  if (color) {
    const n = g.attributes.position.count, a = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) color.toArray(a, i * 3);
    g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  }
  return g;
}
function emit(root, geos, material, list) {
  const me = new THREE.Mesh(mergeGeometries(geos), material);
  me.castShadow = list.some(m => m.castShadow); me.receiveShadow = list.some(m => m.receiveShadow);
  root.add(me);
  for (const m of list) m.removeFromParent();
  return me;
}

// Merge `meshes` into children of `root`, one per material (and per `cellOf(mesh)` key when given).
export function mergeByMaterial(root, meshes, cellOf) {
  root.updateMatrixWorld(true);
  const buckets = new Map();
  for (const m of meshes) {
    const key = m.material.uuid + (cellOf ? '|' + cellOf(m) : '');
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(m);
  }
  let saved = 0;
  for (const list of buckets.values()) {
    if (list.length < 2) continue;
    const mat = list[0].material;
    emit(root, list.map(m => baked(m, root, !!mat.map)), mat, list);
    saved += list.length - 1;
  }
  return saved;
}
export const meshChildren = (o) => o.children.filter(c => c.isMesh && !c.isInstancedMesh);

// Rigged model: every mesh is folded into its nearest animated ancestor as one vertex-coloured mesh,
// so a whole character costs one draw call per joint. Static sub-groups are flattened away.
export function bakeRig(root, joints) {
  const set = new Set(joints), material = lam('#ffffff', { vertexColors: true });
  root.updateMatrixWorld(true);
  const work = [];
  for (const node of joints) {
    const list = [];
    const collect = (o) => { for (const c of o.children) { if (set.has(c)) continue; if (c.isMesh) list.push(c); collect(c); } };
    collect(node);
    const geos = list.map(m => baked(m, node, false, m.material.map ? new THREE.Color('#f29a86') : m.material.color));
    work.push({ node, list, geos });
  }
  for (const { node, list, geos } of work) {
    for (const c of [...node.children]) if (!set.has(c)) c.removeFromParent();
    if (geos.length) emit(node, geos, material, list);
  }
}

// Static world props: merge per material inside 30 m cells so frustum culling still works.
export function batchStatic(scene, excludeRoots) {
  const skip = new Set();
  for (const r of excludeRoots) r.traverse(o => skip.add(o));
  const list = [];
  scene.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || skip.has(o)) return;
    const m = o.material;
    if (Array.isArray(m) || m.userData.painted || !(m.isMeshLambertMaterial || m.isMeshBasicMaterial || m.isMeshStandardMaterial)) return;
    if (Object.keys(o.geometry.attributes).some(k => k !== 'position' && k !== 'normal' && k !== 'uv')) return;
    list.push(o);
  });
  scene.updateMatrixWorld(true);
  return mergeByMaterial(scene, list, (m) => { m.getWorldPosition(v); return Math.floor(v.x / 30) + ',' + Math.floor(v.z / 30); });
}
