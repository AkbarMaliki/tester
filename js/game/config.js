// Global constants shared by all modules.
export const WORD = 'TESTER';                 // big physics letters near the spawn
export const W = 220, HALF = W / 2;           // terrain square (world units)
export const WATER_Y = -0.35;                 // water surface height
export const MAX_LAMPS = 16;                  // lamp glow slots in the ground shader
export const SPAWN = { x: 0, y: 1.6, z: 6, yaw: -Math.PI / 2 };
export const PLAYER_SPAWN = { x: 1, z: 9.8, yaw: 0.6 };   // the kid starts next to the parked car
export const CAM_OFFSET = [12.5, 17, 16.5];   // isometric-ish follow camera
// runtime files in public/assets/, resolved from the page URL so it works in dev, in the build and under a sub-path (GitHub Pages)
export const ASSETS = new URL('assets/', document.baseURI).href;
