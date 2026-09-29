// Bowling lane: 10 physics pins + ball, and a notice board whose E action resets them.
// Reference feature: everything bowling-related lives in this folder.
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { scene, lam, glowMat, mesh, addDynamic, resetDynamic } from '../../engine/core.js';
import { on } from '../../engine/events.js';
import { board } from '../../world/props.js';

const LANE = { x: -27, z: 28, len: 20 };
const BOARD = { x: -17, z: 36, rot: 0.62, title: 'BOWLING', label: 'Reset pin bowling', action: 'bowling:reset' };
const pins = [];   // pins + ball (dynamics)

function buildLane({ x: cx, z: cz, len }) {
  mesh(new THREE.BoxGeometry(len, 0.04, 4.6), lam('#6f5ed0'), scene, cx, 0.03, cz, false);
  for (const s of [-2.4, 2.4]) mesh(new THREE.BoxGeometry(len, 0.05, 0.14), glowMat('#ff4fb8', 1.4, 3.5), scene, cx, 0.05, cz + s, false);
  const pts = [[0, 0], [0.26, 0], [0.34, 0.35], [0.22, 0.85], [0.16, 1.05], [0.22, 1.28], [0.14, 1.48], [0, 1.55]].map(([a, b]) => new THREE.Vector2(a, b));
  const pinGeo = new THREE.LatheGeometry(pts, 10).translate(0, -0.77, 0);
  const pinM = lam('#f2eeff', { flatShading: false }), stripe = glowMat('#ff2f6a', 1, 2);
  for (let row = 0; row < 4; row++) for (let i = 0; i <= row; i++) {
    const g = new THREE.Group(); scene.add(g);
    mesh(pinGeo, pinM, g); mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.08, 10), stripe, g, 0, 0.35, 0, false);
    pins.push(addDynamic(g, new CANNON.Body({ mass: 1.2, shape: new CANNON.Cylinder(0.26, 0.26, 1.55, 8), position: new CANNON.Vec3(cx - len / 2 + 2 - row * 0.8, 0.8, cz + (i - row / 2) * 0.9) })));
  }
  const bm = mesh(new THREE.SphereGeometry(0.75, 20, 14), new THREE.MeshStandardMaterial({ color: '#2a1f66', roughness: 0.25, metalness: 0.3 }));
  pins.push(addDynamic(bm, new CANNON.Body({ mass: 25, shape: new CANNON.Sphere(0.75), position: new CANNON.Vec3(cx + len / 2 - 2, 0.8, cz), linearDamping: 0.1, angularDamping: 0.2 })));
}

export default {
  id: 'bowling',
  build() {
    buildLane(LANE);
    board(BOARD);
    on('bowling:reset', () => resetDynamic(pins));
  },
};
