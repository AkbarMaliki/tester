# Architecture

Quick map for humans and AI. `CLAUDE.md` has the "which file do I edit" table. This file has the details: modules, boot order, frame loop, events, and how the project grows into other genres.

## Folders

```
index.html            markup only (HUD, panels, loader); Vite entry (loads js/main.js)
vite.config.js        build config (relative base for GitHub Pages, es2022 for top-level await)
package.json          three, cannon-es (pinned) + vite; scripts dev/build/preview/check
css/style.css         all styles
public/               copied as-is into dist/ (.nojekyll + assets/)
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
.github/workflows/    deploy.yml: build + publish dist/ to GitHub Pages on push to main
docs/                 this file
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
| `engine/audio.js` | `sfx` (`init engine hit horn step jump door pop toggle`) |
| `game/config.js` | `WORD W HALF WATER_Y MAX_LAMPS SPAWN PLAYER_SPAWN CAM_OFFSET ASSETS` |
| `systems/input.js` | `keys` (held movement state), `KEYMAP`, `clearKeys`, `onKey(code, fn) → unbind`, `dispatchKey` |
| `systems/interaction.js` | `zones addZone removeZone updateZones` |
| `systems/camera.js` | `camTarget updateCamera snapCamera orbitOffset resetView setActorScale updateOrbit` |
| `systems/daynight.js` | `time` (`hour real speed`), `advanceTime paletteAt dayLabel nowHour` |
| `world/worldmap.js` | `LAKES PLAZAS ROADS LOT keepOut landDist groundY heightFromDist bakeMask maskAt` |
| `world/layout.js` | `buildWorld(progress, placeFeatures)`: all prop placement + build order |
| `world/props.js` | prop builders `board bench lampPost groundLantern crate barrel booth arcade ramp parking dock buildLetters`, `lampLights lampPositions` |
| `world/terrain.js` | `buildTerrain buildWater WU` |
| `world/vegetation.js` | `buildGrass plantTrees scatterRocks scatterGroundLeaves grassMeshes` |
| `world/effects.js` | `Puffs smoke flames updateWind WINDU flies` |
| `world/sky.js` | `updateSky(hour, palette, focus) updateAmbient(t)` |
| `entities/player/model.js` | `avatar J` (rig joints) `squash HIP_Y` |
| `entities/player/controller.js` | `player` (`mode: foot/toCar/enter/car/exit`), `body updatePlayer syncPlayer placePlayer respawnPlayer toggleCar camActor zoneOrigin carPrompt carKeys cheer initPlayerPhysics isDriving` |
| `entities/car/car.js` | `car chassisBody vehicle drive updateDriving syncCar updateCarEffects placeCar respawn unflip isUpsideDown setDoor` |
| `ui/ui.js` | `ui` (`started activeZone`), `openModal modalOpen setPrompt showHint setProgress updateClockUI countFrame setQuality restoreQuality setManualHour windEnabled` |

## Boot order (main.js → build)
1. `registerFeatures(features/index.js)`
2. `buildWorld()` in world/layout.js: notice boards, props, **`buildFeatures()`** (features place their stuff here), `bakeMask` (grass mask from `keepOut`), terrain + water, grass, trees, crates, letters
3. `initPlayerPhysics()`, then static batching (everything not dynamic/player/car/zone marker is merged)
4. quality restore, URL params, `emit('world:ready')`, first `tick()`

## Frame loop (main.js → tick)
1. clock + `advanceTime` → palette
2. `updatePlayer` / `updateDriving` (input → forces)
3. `world.step` (physics 120 Hz, interpolated)
4. `syncCar` / `syncPlayer` / dynamics sync
5. **`updateFeatures(dt, { t, player, active })`**
6. `updateCamera(camActor())`, `updateSky`, car effects, wind, ambient
7. `updateZones` → `setPrompt`
8. `composer.render()`

## Events

Names are `area:verb`. Add every new event to this table.

| Event | Payload | Emitted by | Used by |
|---|---|---|---|
| `world:ready` | none | main.js after build | anything that needs the finished world |
| `game:start` | none | main.js when MULAI is pressed | features that start timers/music |
| `player:mode` | `'car' \| 'foot'` | main.js when entering or leaving the car | none yet |
| `bowling:reset` | none | BOWLING board (E) | features/bowling |
| *(board action)* | none | any `public/assets/data/zones.json` board with `"action": "<event>"` | whoever listens (a warning is logged if nobody does) |

## Growing into other genres

Reuse `engine/`, `systems/`, `tools/` and the feature pattern. Replace `world/`, `entities/`, `game/config.js` and the features. Generic services to add to `systems/` once the first feature needs them:

| Service | Typical users |
|---|---|
| `systems/inventory.js` (items, stacks, events `inventory:changed`) | farming, fishing, cooking, RPG loot |
| `systems/save.js` (localStorage snapshot of registered state) | every genre |
| `systems/calendar.js` (days/seasons on top of daynight) | farming sim |
| `systems/dialogue.js`, `systems/quests.js` | RPG, farming NPCs |
| `systems/selection.js` + `systems/pathfinding.js` | RTS, cooking-game helpers |
| `systems/stats.js` (hp, stamina, xp) | RPG, farming energy |

Keep each service data-driven (JSON in `public/assets/data/`) and event-based, so features stay independent.
