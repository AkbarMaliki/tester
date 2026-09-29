// Terrain mesh + physics heightfield + water surface.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { W, HALF, WATER_Y } from '../game/config.js';
import { scene, camera, world, U, paint, shaderMat, addStatic } from '../engine/core.js';
import { RES, maskData, groundY } from './worldmap.js';

export function buildTerrain() {
  const maskTex = new THREE.DataTexture(maskData, RES, RES, THREE.RGBAFormat);
  maskTex.magFilter = maskTex.minFilter = THREE.LinearFilter; maskTex.needsUpdate = true;
  U.uMask.value = maskTex;

  const geo = new THREE.PlaneGeometry(W, W, W, W).rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) pos.setY(i, groundY(pos.getX(i), pos.getZ(i)));
  geo.computeVertexNormals();
  const t = new THREE.Mesh(geo, paint(new THREE.MeshLambertMaterial(), 'ground'));
  t.receiveShadow = true; scene.add(t);

  // physics heightfield (a rotated CANNON.Plane breaks the vehicle raycasts)
  const N = W + 1, data = [];
  for (let i = 0; i < N; i++) { const row = []; for (let j = 0; j < N; j++) row.push(groundY(i - HALF, HALF - j)); data.push(row); }
  const hf = new CANNON.Body({ mass: 0, shape: new CANNON.Heightfield(data, { elementSize: 1 }) });
  hf.quaternion.setFromEuler(-Math.PI / 2, 0, 0); hf.position.set(-HALF, 0, HALF);
  world.addBody(hf);
  for (const [x, z, sx, sz] of [[100, 0, 1, 100], [-100, 0, 1, 100], [0, 100, 100, 1], [0, -100, 100, 1]])
    addStatic(new CANNON.Box(new CANNON.Vec3(sx, 5, sz)), x, 2, z);
}

export const WU = {
  uTime: U.uTime, uMask: U.uMask, uDeep: { value: new THREE.Color() }, uShallow: { value: new THREE.Color() },
  uFoam: { value: new THREE.Color() }, uFoamI: { value: 1 }, uFog: { value: new THREE.Color() }, uCam: { value: camera.position },
};
export function buildWater() {
  const m = shaderMat('water.vert', 'water.frag', { uniforms: WU, transparent: true });
  const w = new THREE.Mesh(new THREE.PlaneGeometry(1200, 1200).rotateX(-Math.PI / 2), m);
  w.position.y = WATER_Y; w.renderOrder = 1; scene.add(w);
}
