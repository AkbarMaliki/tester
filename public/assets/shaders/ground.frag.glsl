uniform vec3 uGround, uPaved, uAsphalt, uGrassA;
//#main
vec4 mk = maskAt(vW.xz);
float dd = mk.r * 20. - 10.;
vec3 col = uGround * (0.96 + 0.08 * hash12(floor(vW.xz * 0.5)));

// paving tiles
vec2 tp = vW.xz / 1.7;
vec2 ti = floor(tp);
vec2 tf = fract(tp);
float seam = step(0.05, tf.x) * step(0.05, tf.y);
vec3 pav = uPaved * (0.93 + 0.1 * hash12(ti)) * mix(0.84, 1., seam);
col = mix(col, pav, mk.g);
col = mix(col, uAsphalt * (0.95 + 0.1 * hash12(floor(vW.xz * 2.))), mk.a);

// darker soil under grass, wet band near water
col = mix(col, uGrassA * 1.15, smoothstep(0.15, 0.7, mk.b) * 0.85);
col *= mix(0.62, 1., smoothstep(-2.2, 1.8, dd));

col *= mix(uShadowTint, vec3(1.), getShadowMask());
col += extraLight(vW) * (1. - mk.b * .4);
outgoingLight = col;
