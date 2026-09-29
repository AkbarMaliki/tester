uniform vec3 uLeafTint;
//#main
outgoingLight = diffuseColor.rgb * uLeafTint * mix(uShadowTint, vec3(1.), getShadowMask());
