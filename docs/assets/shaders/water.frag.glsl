uniform sampler2D uMask;
uniform float uTime, uFoamI;
uniform vec3 uDeep, uShallow, uFoam, uFog, uCam;
uniform vec2 uFogNF;   // scene fog near / far (world/sky.js)
varying vec3 vW;

float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3. - 2. * f);
  return mix(mix(h21(i), h21(i + vec2(1, 0)), u.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), u.x), u.y);
}

void main() {
  float d = texture2D(uMask, (vW.xz + WORLD_HALF) / WORLD_SIZE).r * 20. - 10.;
  float h = d >= 0. ? 0. : -1.2 * smoothstep(0., 5., -d);
  float depth = WATER_Y - h;
  if (depth < -0.01) discard;

  float wd = max(0., -d - 1.75);            // distance from the visible shoreline
  float n = vn(vW.xz * .12 + uTime * .03);
  vec3 col = mix(uShallow, uDeep, smoothstep(0.3, 8., wd + (n - .5) * 2.5));
  col += uFoam * exp(-wd * 0.8) * 0.28 * uFoamI;   // glowing band along the shore

  // short broken foam streaks near the shore
  float stripes = sin(wd * 2.6 - uTime * 1.1 + n * 9. + vn(vW.xz * .09) * 6.);
  float brk = smoothstep(.55, .8, vn(vec2(vW.x * .31 + vW.z * .17, vW.z * .31 - vW.x * .17) + uTime * .05));
  float streak = smoothstep(.9, .99, stripes) * brk * (1. - smoothstep(.4, 4.5, wd));
  streak += (1. - smoothstep(0., .35, wd)) * .8;
  col = mix(col, uFoam * uFoamI, clamp(streak, 0., 1.) * .9);

  col = mix(col, uFog, smoothstep(uFogNF.x, uFogNF.y, distance(uCam, vW)));
  gl_FragColor = vec4(col, smoothstep(0., .08, depth));
}
