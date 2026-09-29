uniform vec3 uLeafTint;
uniform vec3 uLeafMixColor;   // season recolour of every leaf (green summer, orange fall, snow in winter)
uniform float uLeafMix;
//#main
vec3 leafC = mix(diffuseColor.rgb, uLeafMixColor * (0.75 + 0.5 * diffuseColor.g), uLeafMix);
outgoingLight = leafC * uLeafTint * mix(uShadowTint, vec3(1.), getShadowMask());
