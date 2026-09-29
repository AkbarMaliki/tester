# Architecture

Quick map for humans and AI. `CLAUDE.md` has the "which file do I edit" table. This file has the details: modules, boot order, frame loop, events, and how the project grows into other genres.

## Folders

```
index.html            markup only (HUD, panels, loader); Vite entry (loads js/main.js)
vite.config.js        build config (relative base for GitHub Pages, es2022 for top-level await)
package.json          three, cannon-es (pinned) + vite; scripts dev/build/preview/check
css/style.css         all styles
public/               copied as-is into the build (.nojekyll + assets/)
public/assets/
  data/*.json         tunable data (palettes, notice boards, future feature data)
  shaders/*.glsl      all GLSL, loaded by engine/shaders.js
  fonts/              3D letter font
js/
  main.js             boot + frame loop (order only)
  game/config.js      per-game constants (world size, spawns, camera offset, asset root)
  engine/             generic tech, reusable in any game
  systems/            generic gameplay services, reusable in any game
  world/              this game's map and environment
  entities/           player + car
  ui/                 DOM HUD
  features/           self-contained gameplay features (README.md inside)
tools/check.cjs       import/export + layer checker (npm run check; also runs before every build)
docs/                 GENERATED build output (npm run build), committed and served by GitHub Pages
build.bat / start.bat deploy (build + commit + push) / local dev server
ARCHITECTURE.md       this file
```

## Modules and their public API

| Module | Exports (what others use) |
|---|---|
| `engine/core.js` | `renderer scene camera composer bloom sun hemi U` (shared shader uniforms), `world` (cannon), `addStatic addDynamic resetDynamic dynamics`, `lam glowMat glowMats mesh group paint shaderMat`, `QUALITY applyQuality setTiltShift adaptResolution getPixelRatio` |
| `engine/util.js` | `clamp lerp smooth rnd rand frand pick vnoise fbm sdSeg sdBox canvasTex loadAsset nextFrame $` |
| `engine/events.js` | `on(name, fn) → off`, `once`, `emit(name, payload) → listenerCount` |
| `engine/features.js` | `registerFeatures buildFeatures updateFeatures featureIds` |
| `engine/batch.js` | `batchStatic mergeByMaterial meshChildren bakeRig` (draw-call merging) |
| `engine/shaders.js` | `SH full sections DEFINES` |
| `engine/audio.js` | `sfx` (`init engine hit horn step jump door pop pick stash drop toggle`) |
| `engine/firebase.js` | `createFirebase(cfg) → { enabled, id(), signedIn, get set update remove }` (Realtime Database over REST, anonymous sign-in when allowed) |
| `engine/thumbs.js` | `thumbnail(obj, size) → png data url`, `disposeThumbnails` (inventory/shop icons from real models) |
| `game/config.js` | `WORD W HALF WATER_Y MAX_LAMPS SPAWN PLAYER_SPAWN CAM_OFFSET ASSETS FIREBASE SAVE_ROOT AUTOSAVE_EVERY` |
| `systems/save.js` | `registerSave(key, { version, save, load, reset, migrate?, summary? })`, `saveGame loadGame newGame listSaves latestSave deleteSave updateSave`, `SAVE_SLOTS slotName session cloud` |
| `systems/input.js` | `keys` (held movement state), `KEYMAP`, `clearKeys`, `onKey(code, fn) → unbind`, `dispatchKey` |
| `systems/interaction.js` | `zones addZone removeZone updateZones` (zone `range` optional, default 3.2) |
| `systems/inventory.js` | `inventory` (`slots held`), `SLOTS defineItem itemDef addItem takeFrom removeItem countOf roomFor moveSlot setHeld` |
| `systems/camera.js` | `camTarget updateCamera snapCamera orbitOffset resetView setActorScale updateOrbit` |
| `systems/daynight.js` | `time` (`hour real speed`), `advanceTime paletteAt dayLabel nowHour` |
| `world/worldmap.js` | `LAKES PLAZAS ROADS LOT keepOut landDist groundY heightFromDist bakeMask maskAt` |
| `world/layout.js` | `buildWorld(progress, placeFeatures)`: all prop placement + build order |
| `world/props.js` | prop builders `board bench lampPost groundLantern crate barrel booth arcade ramp parking dock buildLetters`, `lampLights lampPositions` |
| `world/terrain.js` | `buildTerrain buildWater WU` |
| `world/vegetation.js` | `buildGrass plantTrees scatterRocks scatterGroundLeaves grassMeshes canopies` |
| `world/effects.js` | `Puffs smoke flames updateWind WINDU flies` |
| `world/sky.js` | `updateSky(hour, palette, focus) updateAmbient(t)` |
| `entities/player/model.js` | `avatar J` (rig joints) `squash HIP_Y` |
| `entities/player/controller.js` | `player` (`mode: foot/toCar/enter/car/exit`), `body updatePlayer syncPlayer placePlayer respawnPlayer toggleCar camActor zoneOrigin carPrompt carKeys cheer initPlayerPhysics isDriving`, `carry` (hold point over the head) `setCarrying isCarrying` |
| `entities/car/car.js` | `car chassisBody vehicle drive updateDriving syncCar updateCarEffects placeCar respawn unflip isUpsideDown setDoor` |
| `ui/ui.js` | `ui` (`started activeZone`), `openModal modalOpen setPrompt showHint toast setProgress updateClockUI countFrame setQuality restoreQuality setManualHour windEnabled` |
| `ui/inventory.js` | `initInventoryUI toggleInventory`: bag button + panel (I / Tab), drag & drop, toasts on `inventory:added` |
| `ui/menu.js` | `initMenu(startGame) showMainMenu togglePause autoStart`: main menu (Main Baru / Lanjutkan / Muat Game / Keluar) + pause menu (Esc / ☰) |

## Save games (systems/save.js)

A save = every registered *slice* together. Each module owns and registers its own:

| Slice | Registered in | Holds |
|---|---|---|
| `time` | systems/daynight.js | hour, real-time flag, speed |
| `inventory` | systems/inventory.js | bag slots |
| `car` | entities/car/car.js | position + rotation |
| `player` | entities/player/controller.js | position, facing, on foot / in the car |
| `props` | world/layout.js | every pushable prop (letters, crates, pins) |
| `pickup` | features/pickup | items lying around, regrow timers, item in the hands |

Adding game state (fishing, hunger/thirst/stamina…): call `registerSave('<name>', { version: 1, save, load, reset, summary })` in the module that owns it. `load` may run mid-game, so it must clean up the current state first. A save without that slice (made before the feature existed) gets `reset()`. When the data shape changes, bump `version` and add `migrate(data, fromVersion)`.

Slots: `auto` (every `AUTOSAVE_EVERY` s of play, on "Menu Utama" and when the tab is hidden) + `slot1..3` (pause menu). Every save is written to localStorage and, when `.env.local` has the Firebase values, to `<SAVE_ROOT>/<uid>/meta/<slot>` + `/slots/<slot>` (data as a JSON string). Loading takes the newer copy. Database rules: `database.rules.json` (merge it into the project's rules; needs Anonymous sign-in enabled).

## Boot order (main.js → build)
1. `registerFeatures(features/index.js)`
2. `buildWorld()` in world/layout.js: notice boards, props, **`buildFeatures()`** (features place their stuff here), `bakeMask` (grass mask from `keepOut`), terrain + water, grass, trees, crates, letters
3. `initPlayerPhysics()`, then static batching (everything not dynamic/player/car/zone marker is merged)
4. quality restore, URL params, `emit('world:ready')`, `initMenu()` (main menu; the game starts from there), first `tick()`

## Frame loop (main.js → tick)
1. clock + `advanceTime` → palette
2. `updatePlayer` / `updateDriving` (input → forces)
3. `world.step` (physics 120 Hz, interpolated)
4. `syncCar` / `syncPlayer` / dynamics sync
5. **`updateFeatures(dt, { t, player, active })`**
6. `updateCamera(camActor())`, `updateSky`, car effects, wind, ambient
7. `updateZones` → `setPrompt`
8. `composer.render()`, `updateSave` (play clock + autosave)

## Events

Names are `area:verb`. Add every new event to this table.

| Event | Payload | Emitted by | Used by |
|---|---|---|---|
| `world:ready` | none | main.js after build | anything that needs the finished world |
| `game:start` | none | main.js when a game starts from the main menu (new / continue / load) | features that start timers/music |
| `save:applied` | `{ slot, meta }` (slot null = new game) | systems/save.js after a load / new game | ui/ui.js (time panel) |
| `save:saved` | `{ slot, where: 'cloud' \| 'local', meta }` | systems/save.js | none yet |
| `player:mode` | `'car' \| 'foot'` | main.js when entering or leaving the car | none yet |
| `bowling:reset` | none | BOWLING board (E) | features/bowling |
| `inventory:changed` | `inventory` | systems/inventory.js on any change | ui/inventory.js |
| `inventory:added` | `{ id, n }` | systems/inventory.js `addItem` | ui/inventory.js (toast, bag bump) |
| `inventory:full` | `{ id, n }` (what didn't fit) | systems/inventory.js `addItem` | ui/inventory.js (toast) |
| `inventory:hold` | `{ slot }` | inventory panel "Pegang" | features/pickup |
| `inventory:drop` | `{ slot }` (-1 = the held item) | inventory panel "Buang" / "Taruh" | features/pickup |
| `inventory:stash` | none | inventory panel "Simpan ke tas" | features/pickup |
| *(board action)* | none | any `public/assets/data/zones.json` board with `"action": "<event>"` | whoever listens (a warning is logged if nobody does) |

## Growing into other genres

Reuse `engine/`, `systems/`, `tools/` and the feature pattern. Replace `world/`, `entities/`, `game/config.js` and the features. Generic services to add to `systems/` once the first feature needs them:

| Service | Typical users |
|---|---|
| `systems/calendar.js` (days/seasons on top of daynight) | farming sim |
| `systems/dialogue.js`, `systems/quests.js` | RPG, farming NPCs |
| `systems/selection.js` + `systems/pathfinding.js` | RTS, cooking-game helpers |
| `systems/stats.js` (hp, stamina, xp) | RPG, farming energy |

Keep each service data-driven (JSON in `public/assets/data/`) and event-based, so features stay independent.
