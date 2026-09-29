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
SURVIVAL.md           survival design: needs, vitals, effects, profile, Balai Warga (systems/stats.js + features/survival)
```

## Modules and their public API

| Module | Exports (what others use) |
|---|---|
| `engine/core.js` | `renderer scene camera DETAIL_LAYER composer bloom sun hemi U` (shared shader uniforms), `world` (cannon), `addStatic addDynamic resetDynamic dynamics`, `lam glowMat glowMats mesh group paint shaderMat`, `QUALITY applyQuality setTiltShift adaptResolution getPixelRatio` |
| `engine/util.js` | `clamp lerp smooth rnd rand frand pick vnoise fbm sdSeg sdBox canvasTex loadAsset nextFrame $` |
| `engine/events.js` | `on(name, fn) → off`, `once`, `emit(name, payload) → listenerCount` |
| `engine/features.js` | `registerFeatures buildFeatures updateFeatures featureIds` |
| `engine/batch.js` | `batchStatic mergeByMaterial meshChildren bakeRig` (draw-call merging) |
| `engine/shaders.js` | `SH full sections DEFINES` |
| `engine/audio.js` | `sfx` (`init engine hit horn step jump door pop pick stash drop eat drink flush toggle`) |
| `engine/firebase.js` | `createFirebase(cfg) → { enabled, id(), signedIn, get set update remove }` (Realtime Database over REST, anonymous sign-in when allowed) |
| `engine/thumbs.js` | `thumbnail(obj, size) → png data url`, `disposeThumbnails` (inventory/shop icons from real models) |
| `game/config.js` | `WORD W HALF WATER_Y MAX_LAMPS SPAWN PLAYER_SPAWN CAM_OFFSET DEBUG ASSETS FIREBASE SAVE_ROOT RESUME_AFTER_RELOAD` |
| `systems/save.js` | `registerSave(key, { version, save, load, reset, migrate?, summary? })`, `saveGame loadGame newGame listSaves latestSave deleteSave updateSave`, `SAVE_SLOTS slotName session cloud` |
| `systems/input.js` | `keys` (held movement state), `KEYMAP`, `clearKeys`, `onKey(code, fn) → unbind`, `dispatchKey` |
| `systems/mapmarkers.js` | `mapMarkers addMapMarker({ x, z, icon, label, kind })`: places shown on the map view (world/layout, props boards, features add theirs) |
| `systems/interaction.js` | `zones addZone removeZone updateZones` (zone `range` optional, default 3.2) |
| `systems/inventory.js` | `inventory` (`slots held`), `SLOTS defineItem itemDef allItems addItem takeFrom removeItem countOf roomFor moveSlot setHeld` |
| `systems/camera.js` | `camTarget updateCamera snapCamera orbitOffset resetView setActorScale updateOrbit` |
| `systems/daynight.js` | `time` (`hour real speed day`), `advanceTime paletteAt dayLabel nowHour skipTime` (day counter: only running past midnight adds a day) |
| `systems/calendar.js` | `CAL today dateOf weatherOn eventsOn fmtDate setDay forceWeather updateCalendar`: seasons, dates, festivals, weather per day (data: `public/assets/data/calendar.json`) |
| `systems/stats.js` | survival stats (rules: `public/assets/data/survival.json`, design: `SURVIVAL.md`): `stats derived shown profile RULES NEEDS METERS`, `updateStats`, movement `canRun speedMul spendStamina runStamina tryJump`, effects `addEffect removeEffect hasEffect cure`, actions `consume setMeter sleep revive` |
| `world/worldmap.js` | `BALAI LAKES PLAZAS ROADS LOT keepOut landDist groundY heightFromDist bakeMask maskAt` |
| `world/layout.js` | `buildWorld(progress, placeFeatures)`: all prop placement + build order |
| `world/props.js` | prop builders `board bench lampPost groundLantern crate barrel booth arcade ramp parking dock buildLetters`, `lampLights lampPositions` |
| `world/terrain.js` | `buildTerrain buildWater WU` |
| `world/vegetation.js` | `buildGrass plantTrees scatterRocks scatterGroundLeaves grassMeshes canopies groundLeaves` |
| `world/effects.js` | `Puffs smoke flames updateWind WINDU flies` |
| `world/seasons.js` | `applySeason(pal, dt)` (season/weather colours on the palette), `updateSeasonFx(dt, hour, focus)` (grass height, leaves, petals/leaves/rain/snow particles, rain sound, stats env flags) |
| `world/footprints.js` | `stampFootprint(x, y, z, yaw, side) updateFootprints(dt)`: fixed pool of 80 fading prints, one draw call |
| `world/sky.js` | `updateSky(hour, palette, focus) updateAmbient(t)` |
| `entities/player/model.js` | `avatar J` (rig joints, incl. face parts) `squash HIP_Y FACE_PARTS rigOf(root)` (joints of a clone) |
| `entities/player/face.js` | `EXPRESSIONS moodNow faceState updateFace(rig, state, dt, t, mood?)`: facial expressions from the survival state |
| `entities/player/controller.js` | `player` (`mode: foot/toCar/enter/car/exit`), `body updatePlayer syncPlayer placePlayer respawnPlayer toggleCar camActor zoneOrigin carPrompt carKeys cheer initPlayerPhysics isDriving`, `carry` (hold point over the head) `setCarrying isCarrying` |
| `entities/car/car.js` | `car chassisBody vehicle drive updateDriving syncCar updateCarEffects placeCar respawn unflip isUpsideDown setDoor` |
| `ui/ui.js` | `ui` (`started activeZone`), `openModal(html, onClick?) closeModal fadeThrough(text, mid, hold) modalOpen setPrompt showHint toast setProgress updateClockUI countFrame setQuality restoreQuality setManualHour windEnabled` |
| `ui/inventory.js` | `initInventoryUI toggleInventory`: bag button + panel (I / Tab), drag & drop, toasts on `inventory:added` |
| `ui/map.js` | `initMapUI toggleMap updateMap mapFrozen mapAfterRender`: map view (M). Camera flies to a bird's-eye view; DETAIL_LAYER (grass, particles, footprints, wild items), shadows, bloom and tilt-shift are off; the kid/car/places are DOM icons; once arrived the frame is copied to a 2D canvas and 3D rendering stops (0 draw calls) |
| `ui/calendar.js` | `initCalendarUI openCalendar updateDateUI`: calendar panel (K), date under the clock, new day / season toasts |
| `ui/preview.js` | `mountPreview(el)`: live character preview in menu panels (looks at the cursor, current expression, wheel = zoom to the face, click = wave) |
| `ui/survival.js` | `initSurvivalUI updateSurvivalUI toggleProfile`: need rings + health/stamina bars + effect chips (bottom-left), profile panel (P) |
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
| `stats` | systems/stats.js | needs, health, stamina, timed effects, profile attributes |

Adding game state (fishing, hunger/thirst/stamina…): call `registerSave('<name>', { version: 1, save, load, reset, summary })` in the module that owns it. `load` may run mid-game, so it must clean up the current state first. A save without that slice (made before the feature existed) gets `reset()`. When the data shape changes, bump `version` and add `migrate(data, fromVersion)`.

Slots: `auto` = "Simpanan tidur", written when the kid wakes up after sleeping in the gazebo bed (Harvest Moon style: there is no timed autosave and nothing is saved on "Menu Utama" or when the tab closes) + `slot1..3` (pause menu > Simpan Game). Every save is written to localStorage and, when `.env.local` has the Firebase values, to `<SAVE_ROOT>/<uid>/meta/<slot>` + `/slots/<slot>` (data as a JSON string). Loading takes the newer copy. Database rules: `database.rules.json` (merge it into the project's rules; needs Anonymous sign-in enabled).

Dev server reloads: Vite reloads the page whenever a source file is saved. A tab that was in a game (sessionStorage flag, cleared by "Menu Utama") continues from a local-only `reload` snapshot written on unload (not listed as a save slot) instead of showing the main menu (`RESUME_AFTER_RELOAD` in game/config.js, on only under `npx vite`).

## Boot order (main.js → build)
1. `registerFeatures(features/index.js)`
2. `buildWorld()` in world/layout.js: notice boards, props, **`buildFeatures()`** (features place their stuff here), `bakeMask` (grass mask from `keepOut`), terrain + water, grass, trees, crates, letters
3. `initPlayerPhysics()`, then static batching (everything not dynamic/player/car/zone marker is merged)
4. quality restore, URL params, `emit('world:ready')`, `initMenu()` (main menu; the game starts from there), first `tick()`

## Frame loop (main.js → tick)
1. clock + `advanceTime` → `updateCalendar` → palette + `applySeason`
2. `updatePlayer` / `updateDriving` (input → forces)
3. `world.step` (physics 120 Hz, interpolated)
4. `syncCar` / `syncPlayer` / dynamics sync
5. `updateStats(dt, active)` (needs drain, regen, effects), **`updateFeatures(dt, { t, player, active })`**
6. `updateMap()` or else `updateCamera(camActor())`, `updateSky`, car effects, wind, `updateSeasonFx` (particles, env flags), `updateFootprints`, ambient
7. `updateZones` → `setPrompt`, `updateSurvivalUI`
8. `composer.render()` + `mapAfterRender()` (skipped while the map is frozen), `updateSave` (play clock + autosave)

## Events

Names are `area:verb`. Add every new event to this table.

| Event | Payload | Emitted by | Used by |
|---|---|---|---|
| `world:ready` | none | main.js after build | anything that needs the finished world |
| `game:start` | none | main.js when a game starts from the main menu (new / continue / load) | features that start timers/music |
| `save:applied` | `{ slot, meta }` (slot null = new game) | systems/save.js after a load / new game | ui/ui.js (time panel) |
| `save:saved` | `{ slot, where: 'cloud' \| 'local', meta }` | systems/save.js | ui/menu.js ("Game tersimpan (tidur)" toast) |
| `player:mode` | `'car' \| 'foot'` | main.js when entering or leaving the car | none yet |
| `bowling:reset` | none | BOWLING board (E) | features/bowling |
| `inventory:changed` | `inventory` | systems/inventory.js on any change | ui/inventory.js |
| `inventory:added` | `{ id, n }` | systems/inventory.js `addItem` | ui/inventory.js (toast, bag bump) |
| `inventory:full` | `{ id, n }` (what didn't fit) | systems/inventory.js `addItem` | ui/inventory.js (toast) |
| `inventory:hold` | `{ slot }` | inventory panel "Pegang" | features/pickup |
| `inventory:drop` | `{ slot }` (-1 = the held item) | inventory panel "Buang" / "Taruh" | features/pickup |
| `inventory:stash` | none | inventory panel "Simpan ke tas" | features/pickup |
| `inventory:use` | `{ slot }` (-1 = the held item) | inventory panel "Makan" / "Minum" (items with `use`) | features/survival |
| `inventory:discardHeld` | none | features/survival (the held item was eaten) | features/pickup |
| `stats:effect` | `{ id, on, def }` | systems/stats.js when an effect or condition starts / ends | ui/survival.js (toast) |
| `stats:depleted` | `{ meter: 'health' }` | systems/stats.js when health hits 0 | features/survival (faint) |
| `calendar:day` | `today()` date | systems/calendar.js when a new day starts while playing | ui/calendar.js (toast), features/survival (calendar page) |
| `calendar:season` | `today()` date | systems/calendar.js, with calendar:day, when the season changed | ui/calendar.js (toast), features/pickup (seasonal wild items) |
| `time:skipped` | `{ hours }` | systems/daynight.js `skipTime` (sleep, toilet, fainting) | ui/ui.js (time panel) |
| `survival:consumed` | `{ id, delta, cured }` | features/survival after eating / drinking | none yet |
| `debug:chest` | none | the debug chest in the Balai gazebo (features/survival, only when `DEBUG`) | features/debug |
| `survival:slept` | `{ hours }` | features/survival after sleeping | none yet |
| *(board action)* | none | any `public/assets/data/zones.json` board with `"action": "<event>"` | whoever listens (a warning is logged if nobody does) |

## Growing into other genres

Reuse `engine/`, `systems/`, `tools/` and the feature pattern. Replace `world/`, `entities/`, `game/config.js` and the features. Generic services to add to `systems/` once the first feature needs them:

| Service | Typical users |
|---|---|
| `systems/calendar.js` ✓ (days/seasons/weather on top of daynight) | farming sim |
| `systems/dialogue.js`, `systems/quests.js` | RPG, farming NPCs |
| `systems/selection.js` + `systems/pathfinding.js` | RTS, cooking-game helpers |
| `systems/stats.js` ✓ (needs, hp, stamina, effects, attributes; data-driven) | RPG, farming energy |

Keep each service data-driven (JSON in `public/assets/data/`) and event-based, so features stay independent.
