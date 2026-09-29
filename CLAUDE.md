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
| change how the kid **moves/animates**, enters the car | `js/entities/player/controller.js` |
| car handling, model, lights, exhaust | `js/entities/car/car.js` |
| move/add park furniture, change build order / loading texts | `js/world/layout.js` (placement) + `js/world/props.js` (prop builders) |
| lakes, roads, plazas, where grass may grow | `js/world/worldmap.js` |
| ground / water mesh | `js/world/terrain.js` (+ `public/assets/shaders/ground|water.*.glsl`) |
| grass, trees, rocks, leaves | `js/world/vegetation.js` (+ `public/assets/shaders/grass|leaves.*.glsl`) |
| day/night colours | `public/assets/data/palettes.json` (data), `js/systems/daynight.js` (clock), `js/world/sky.js` (applies it) |
| notice board texts / positions | `public/assets/data/zones.json` |
| pickable items (list, model, where they spawn), holding over the head | `public/assets/data/items.json` + `js/features/pickup/` (models in `models.js`) |
| bag / inventory data (slots, stacks, add/remove items) · bag panel & button | `js/systems/inventory.js` · `js/ui/inventory.js` |
| save / load, slots, autosave, Firebase cloud · main menu & pause menu | `js/systems/save.js` (+ `js/engine/firebase.js`, config in `.env.local`) · `js/ui/menu.js` |
| "press E here" spots | `js/systems/interaction.js` → `addZone()` |
| keys / controls | `js/systems/input.js` (`keys`, `onKey()`), DOM listeners + HUD in `js/ui/ui.js`, markup in `index.html`, style in `css/style.css` |
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
