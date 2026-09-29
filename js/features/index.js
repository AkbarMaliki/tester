// Enabled features, in build/update order. Add a feature = import its folder + list it here.
// Remove a feature = delete its line (and folder); nothing else should reference it.
import bowling from './bowling/index.js';
import pickup from './pickup/index.js';

export default [
  bowling,
  pickup,
];
