attribute vec3 aRoot;
attribute float aTip;
attribute float aRand;
varying float vTip;
varying float vRand;
//#main
float gust = sin(uTime * 1.4 + aRoot.x * .22 + aRoot.z * .15) * .5 + .5;
float flick = sin(uTime * 3.1 + aRand * 20. + aRoot.x) * .15;
vec2 wind = uWindDir * (gust * .45 + flick);

// bend away from the car
vec2 away = aRoot.xz - uCarPos.xz;
float dd = length(away);
float push = (1. - smoothstep(0.7, 2.8, dd)) * step(uCarPos.y, aRoot.y + 3.5);
// ...and away from the player's feet
vec2 awayP = aRoot.xz - uPlayerPos.xz;
float pushP = (1. - smoothstep(0.2, 0.9, length(awayP))) * step(uPlayerPos.y, aRoot.y + 2.);
float bh = position.y - aRoot.y;
transformed.xz += wind * bh + normalize(away + 1e-4) * push * bh * 1.1 + normalize(awayP + 1e-4) * pushP * bh * 0.9;
transformed.y -= (push * .55 + pushP * .45) * bh;

vTip = aTip;
vRand = aRand;
