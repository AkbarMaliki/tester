uniform vec3 uGrassA, uGrassB;
varying float vTip;
varying float vRand;
//#main
float tip = clamp(vTip, 0., 1.);   // interpolation can dip below 0 -> pow() NaN on D3D
vec3 gc = mix(uGrassA * .75, uGrassB, pow(tip, 1.5)) * (0.85 + 0.3 * vRand);
gc *= mix(uShadowTint, vec3(1.), getShadowMask());
gc += extraLight(vW) * .35 * tip;
outgoingLight = gc;
