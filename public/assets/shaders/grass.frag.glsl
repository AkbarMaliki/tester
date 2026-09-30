uniform vec3 uGrassA, uGrassB;
uniform float uDead;       // season: share of the grass that is dead / brown (patches)
uniform vec3 uDeadColor;
varying float vTip;
varying float vRand;
//#main
float tip = clamp(vTip, 0., 1.);   // interpolation can dip below 0 -> pow() NaN on D3D
vec3 gc = mix(uGrassA * .75, uGrassB, pow(tip, 1.5)) * (0.85 + 0.3 * vRand);
// dead patches: large soft blobs where the grass is brown (pokes through the snow in winter)
float pn = sin(vW.x * .13 + sin(vW.z * .09) * 2.) * sin(vW.z * .11 + sin(vW.x * .07) * 2.) * .5 + .5;
float dead = uDead > 0.001 ? smoothstep(1. - uDead, 1.05 - uDead * .7, pn + vRand * .15) : 0.;
gc = mix(gc, uDeadColor * mix(.7, 1.15, tip) * (0.85 + 0.3 * vRand), dead);
gc *= mix(uShadowTint, vec3(1.), getShadowMask());
gc += extraLight(vW) * .35 * tip;
outgoingLight = gc;
