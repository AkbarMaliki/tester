// Global constants shared by all modules.
export const WORD = 'TESTER';                 // big physics letters near the spawn
export const W = 220, HALF = W / 2;           // terrain square (world units)
export const WATER_Y = -0.35;                 // water surface height
export const MAX_LAMPS = 16;                  // lamp glow slots in the ground shader
export const SPAWN = { x: 0, y: 1.6, z: 6, yaw: -Math.PI / 2 };
export const PLAYER_SPAWN = { x: 1, z: 9.8, yaw: 0.6 };   // the kid starts next to the parked car
export const CAM_OFFSET = [12.5, 17, 16.5];   // isometric-ish follow camera
// Debug tools while the game is in development: the item chest in the Balai gazebo (features/debug). false = gone.
export const DEBUG = true;
// runtime files in public/assets/, resolved from the page URL so it works in dev, in the build and under a sub-path (GitHub Pages)
export const ASSETS = new URL('assets/', document.baseURI).href;

// Cloud saves: Firebase Realtime Database over REST (engine/firebase.js + systems/save.js).
// Values come from .env.local (git-ignored, template in .env.example); without them saves stay on this device.
// Note: Vite inlines VITE_* values into the shipped bundle. The Firebase web config is a project identifier, not a
// password: the data is protected by the database rules (database.rules.json) + Anonymous sign-in.
const env = import.meta.env || {};
export const FIREBASE = {
  apiKey: env.VITE_FIREBASE_API_KEY || '',
  projectId: env.VITE_FIREBASE_PROJECT_ID || '',
  databaseURL: env.VITE_FIREBASE_DATABASE_URL || '',
};
export const SAVE_ROOT = 'tester-saves';      // database node: <SAVE_ROOT>/<player id>/{meta,slots}/<slot>
// Harvest Moon style: the game saves when the kid goes to bed (features/survival), no timed autosave.
// Dev server only (npx vite): it reloads the page whenever a source file is saved. Instead of dropping back to the
// main menu, a tab that was playing continues from a local 'reload' snapshot written on the way out (ui/menu.js).
export const RESUME_AFTER_RELOAD = !!env.DEV;
