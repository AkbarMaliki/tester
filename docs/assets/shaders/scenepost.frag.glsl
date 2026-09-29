// One pass right after the scene render:
//  1. NaN/Inf guard (a single bad pixel would be smeared over the screen by bloom -> black screen;
//     isnan() is optimised away by the D3D compiler, so check the float bits instead)
//  2. tilt-shift: 2D spiral blur whose radius grows towards the top/bottom of the screen
uniform sampler2D tDiffuse;
uniform vec2 uRes;
uniform float uAmount;   // max blur radius in pixels (0 = off)
varying vec2 vUv;

bool bad(float x) { return (floatBitsToUint(x) & 0x7fffffffu) >= 0x7f800000u; }
vec3 fetch(vec2 uv) {
  vec4 c = texture2D(tDiffuse, uv);
  return (bad(c.r) || bad(c.g) || bad(c.b)) ? vec3(0.) : min(c.rgb, vec3(1000.));
}

void main() {
  float r = smoothstep(0.16, 0.5, abs(vUv.y - 0.55)) * uAmount;
  vec3 c = fetch(vUv);
  if (r > 0.5) {
    float ws = 1.;
    for (int i = 0; i < 12; i++) {
      float fi = float(i) + 0.5;
      float a = fi * 2.39996;                       // golden angle
      vec2 o = vec2(cos(a), sin(a)) * sqrt(fi / 12.) * r / uRes;
      float w = 1. - fi / 13.;
      c += fetch(vUv + o) * w;
      ws += w;
    }
    c /= ws;
  }
  gl_FragColor = vec4(c, 1.);
}
