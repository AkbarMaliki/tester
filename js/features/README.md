# Features

One folder = one gameplay feature. Everything a feature needs lives in its folder (plus an optional `public/assets/data/<feature>.json`), so adding or removing one touches **its folder and one line in `index.js`**.

## Contract

`js/features/<name>/index.js` default-exports:

```js
export default {
  id: '<name>',                 // unique, also the event prefix: '<name>:something'
  build(ctx) {},                // optional, once during loading (before grass is baked). ctx = { player }
  update(dt, ctx) {},           // optional, every frame after physics. ctx = { t, player, active }
};
```
`active` is false while the start screen or a modal is open. Don't react to input then.

## Checklist for a new feature
1. Copy `_template/` to `<name>/` and set `id`.
2. Import it in `index.js` and add it to the array.
3. Build meshes with `mesh()`/`lam()` (engine/core.js). Push `keepOut` for anything on the ground. Add physics with `addStatic`/`addDynamic`.
4. Add interaction with `addZone({ pos, label, action | content })` (systems/interaction.js) and hotkeys with `onKey(code, fn)` (systems/input.js). Open panels with `openModal(html)` (ui/ui.js).
5. Talk to other features only through events: `emit('<name>:<verb>', payload)` / `on(...)`. Add new events to the table in `ARCHITECTURE.md`.
6. Put data (lists of items, fish, crops, prices…) in `public/assets/data/<name>.json` and load it with `await loadAsset('data/<name>.json', 'json')` in `build`.
7. State the player should keep (caught fish, hunger, crops…): `registerSave('<name>', { version: 1, save, load, reset })` from systems/save.js in `build`. `load` can run mid-game (pause menu > Muat Game), so clear the current state first; `reset` = New Game. Example: `features/pickup/index.js` (`saveSlice`).
8. Split the folder into more files when it grows (`model.js`, `logic.js`, `data.js`…). Only `index.js` is imported from outside.
9. Run `node tools/check.cjs`.

## Example: fishing

```
js/features/fishing/
  index.js      build(): rod/bobber meshes, addZone at the dock (world/props.js dock is at the south lake),
                onKey('KeyE') casting; update(): bobber bobbing, bite timer, reel-in minigame
  catch.js      picks a fish by time of day (systems/daynight.js time.hour) and lake
public/assets/data/fishing.json   fish list: name, rarity, hours, size range
```
Emits `fishing:caught` { fish } and calls `addItem('ikan_mas')` from systems/inventory.js (define the fish with `defineItem` first). Fishing never imports other features.

## Existing features
| id | what | events |
|---|---|---|
| `bowling` | lane with 10 physics pins + ball, BOWLING board resets them | listens `bowling:reset` |
| `pickup` | Harvest-Moon-style items (data: `public/assets/data/items.json`): E lift over head, E into the bag, Q put down; wild items regrow | listens `inventory:hold/drop/stash`, `player:mode`, `world:ready` |
