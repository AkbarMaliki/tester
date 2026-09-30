# Tester Drive World — AI guide

Browser 3D game: three.js 0.169 + cannon-es 0.20 (npm, pinned), plain ES modules bundled by **Vite** (`vite.config.js`). No framework: the game renders to a canvas and the HUD is plain DOM in `index.html`. This repo is also the **base template** for future games (farming sim, RPG, co-op cooking, RTS…), so keep `engine/` and `systems/` game-agnostic.

- Run: `start.bat` (= `npx vite`, auto-reload) → http://localhost:8765. `start.bat build` = production build + preview. URL flags: `?jam=17.5` fixes the hour, `?kualitas=low|mid|high|auto`, `#auto` skips the start button.
- Build: `npm run build` → `docs/` (runs the checker first). `docs/` is **generated and committed**: GitHub Pages serves `main` `/docs`. Never hand-edit it or put docs there. Deploy: `build.bat [commit message]` = build, `git add -A`, commit, push `main`. Don't run build.bat yourself unless asked (it pushes).
- Runtime files (JSON, GLSL, fonts) live in `public/assets/` and are fetched with `loadAsset('data/x.json')` (path relative to `public/assets/`). Don't `import` them.
- **After every change run `node tools/check.cjs`**: it verifies imports/exports and the layer rules below.
- UI text is Indonesian; code comments are English.

## Don't read everything: find the file here first

| I want to… | Edit |
|---|---|
| add a gameplay feature (fishing, farming, shop, quest, minigame…) | new folder `js/features/<name>/` + one line in `js/features/index.js` (checklist: `js/features/README.md`) |
| change how the kid **looks** (clothes, hair, face, colours) | `js/entities/player/model.js` |
| change how the kid **moves/animates**, enters the car | `js/entities/player/controller.js` (arm/leg IK helpers: `ik.js`) |
| how the kid holds / swings farming tools, pulls weeds, sows, waters | `js/features/farming/anim.js` (keyframes in avatar space + IK) |
| facial expressions (sick, hungry, sleepy…) · character preview in the bag/profile panels | `js/entities/player/face.js` (+ face parts in `model.js`) · `js/ui/preview.js` |
| car handling, model, lights, exhaust | `js/entities/car/car.js` |
| move/add park furniture, change build order / loading texts | `js/world/layout.js` (placement) + `js/world/props.js` (prop builders) |
| lakes, roads, plazas, where grass may grow | `js/world/worldmap.js` |
| ground / water mesh | `js/world/terrain.js` (+ `public/assets/shaders/ground|water.*.glsl`) |
| grass, trees, rocks, leaves | `js/world/vegetation.js` (+ `public/assets/shaders/grass|leaves.*.glsl`) |
| felling wild trees with the golden axe (hits, fall animation, stump, regrow, wood) | `js/features/farming/woodcut.js` + `wildTrees` in `public/assets/data/farming.json` |
| day/night colours | `public/assets/data/palettes.json` (data), `js/systems/daynight.js` (clock), `js/world/sky.js` (applies it) |
| seasons, calendar, festivals, weather (rain/snow), how each season looks (dead grass, snow on roofs, snow mounds: `look.deadGrass` / `look.snow`) | `public/assets/data/calendar.json` (data) · `js/systems/calendar.js` (dates) · `js/world/seasons.js` (look, particles, env flags) · `js/ui/calendar.js` (panel K + date top-left) |
| footprints | `js/world/footprints.js` (darkness/lifetime per season in calendar.json) |
| map view (M), map icons · hide something on the map | `js/ui/map.js` · `addMapMarker()` from `js/systems/mapmarkers.js` · `obj.layers.set(DETAIL_LAYER)` (engine/core.js) |
| notice board texts / positions | `public/assets/data/zones.json` |
| pickable items (list, model, where they spawn), holding over the head | `public/assets/data/items.json` + `js/features/pickup/` (models in `models.js`) |
| bag / inventory data (slots, stacks, add/remove items) · bag panel & button | `js/systems/inventory.js` · `js/ui/inventory.js` |
| survival: hunger/thirst/energy/bladder, health & stamina, buffs/debuffs, character profile (design: `SURVIVAL.md`) | numbers: `public/assets/data/survival.json` · rules: `js/systems/stats.js` · HUD + profile panel (P): `js/ui/survival.js` |
| what food does (eat/drink values, poison chance) | `public/assets/data/items.json` → `"use"` |
| Balai Warga (fountain, toilet, gazebo bed), eating, sleeping, fainting | `js/features/survival/` (models in `models.js`) |
| farming: crops, growth stages, tools, quality ⭐, giant/rare/mutation, greenhouse, sprinklers, shop & shipping bin | numbers + crop list: `public/assets/data/farming.json` · rules/overnight: `js/features/farming/field.js` · 3D models of every growth stage: `models.js` · items: `items.js` · Toko Tani / Kotak Kirim: `shop.js` · tool bar, cursor, swing: `index.js` |
| shortcut bar (hotbar 1-9, G use) · put items on it | data: `js/systems/hotbar.js` · bar: `js/ui/hotbar.js` · shortcut row in the bag: `js/ui/inventory.js` |
| animal farming: animals (models, behaviour, animation), barn / coop / silo, feeding, affection, products, breeding, horse riding, pets | `public/assets/data/ranch.json` (species, prices, levels, rules) · `js/features/ranch/` (`models.js` rigs + buildings, `animals.js` behaviour + animation, `anim.js` the kid's poses, `shop.js` Toko Ternak + Buku Ternak, `index.js` daily cycle + interactions + riding) |
| money (gold) | `js/systems/wallet.js` (`addGold`, `spendGold`), shown under the date (top-left, `#clockGold`) by `js/ui/inventory.js` + in the profile panel (`js/ui/survival.js`) |
| debug chest (all items + test buttons) · switch debug tools off | `js/features/debug/` · `DEBUG` in `js/game/config.js` |
| save / load, slots, autosave, Firebase cloud · main menu & pause menu | `js/systems/save.js` (+ `js/engine/firebase.js`, config in `.env.local`) · `js/ui/menu.js` |
| "press E here" spots | `js/systems/interaction.js` → `addZone()` |
| keys / controls (rebindable actions) | `js/systems/input.js` (`ACTIONS`, `is()`, `onAction()`, `keyOf()` for hints), DOM listeners + HUD in `js/ui/ui.js`, markup in `index.html`, style in `css/style.css` |
| settings menu (graphics, audio, HUD, camera, key mapping, demo tools) | `js/ui/settings.js` |
| camera follow / orbit / zoom | `js/systems/camera.js` |
| particles, wind lines, fireflies | `js/world/effects.js` |
| sounds | `js/engine/audio.js` (`sfx.*`, synthesised with WebAudio) |
| renderer, post-processing, quality presets, lights, physics world, material/mesh helpers | `js/engine/core.js` |
| world size, spawn points, camera offset | `js/game/config.js` |
| frame loop order / boot order | `js/main.js` (keep it thin: it only orders calls) |

Module list with every export, the frame loop, and the event list: `ARCHITECTURE.md`.

## Layers (enforced by tools/check.cjs)

```
engine/ + game/config.js  (0)  generic tech: rendering, physics, events, feature registry, audio, utils
systems/                  (1)  generic gameplay services: input, interaction, camera, day/night
world/                    (2)  this game's map & environment
entities/                 (3)  player, car (things with state that the player controls)
ui/                       (4)  DOM HUD, settings, modal
features/                 (5)  self-contained gameplay features, one folder each
main.js                   (6)  boot + frame loop
```
- A module imports only from its own layer or lower ones.
- A feature never imports another feature. They talk through `engine/events.js` (`on`/`emit`).
- New generic services (inventory, save/load, quests, dialogue, crafting, unit AI…) go in `systems/` when two or more features or games could use them. Otherwise they stay inside the feature.

## Conventions
- Models are built from primitives with `mesh(geo, lam('#hex'), parent, x, y, z)` (flat-shaded low-poly). Tiny details skip shadows (`cast = false`). Static props get batched automatically.
- Physics: `addStatic(shape, …)` for scenery, `addDynamic(mesh, body)` for pushable things (synced and respawned by main.js).
- Anything placed on the ground pushes `{x, z, r}` into `keepOut` (world/worldmap.js) during the build phase so grass and trees avoid it.
- **Any state the player would expect to keep** (new feature data, stats, world changes) gets a save slice: `registerSave('<name>', { version, save, load, reset, summary? })` in the module that owns it (`ARCHITECTURE.md` > Save games). Change the data shape = bump `version` + add `migrate()`.
- Tunables sit at the top of a file as constants, or in `public/assets/data/*.json` loaded with `loadAsset()`.
- Don't add npm packages or frameworks without asking.
- Never put secrets (API keys, tokens) in client code: everything in `js/` and `public/` ships to the browser. Anything that must not be faked (scores, purchases, multiplayer results) needs a server.
