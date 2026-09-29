// Map markers: places worth showing on the map view (ui/map.js). Anything can add one; the map projects them.
//   addMapMarker({ x, z, icon, label, kind? })   kind: 'place' (default) | 'board' | 'water' (styling only)
export const mapMarkers = [];
export function addMapMarker(m) { mapMarkers.push({ kind: 'place', ...m }); return m; }
