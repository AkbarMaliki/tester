// Shared by every "painted" material (ground, grass, leaves).
// NOTE: never call smoothstep with edge0 >= edge1 or pow() with a negative base:
// on D3D/ANGLE (Intel, etc.) that returns NaN and bloom spreads it over the whole screen.
uniform sampler2D uMask;
uniform float uTime;
uniform vec3 uShadowTint;
uniform vec3 uLamps[MAX_LAMPS];
uniform float uLampI;
uniform vec3 uLampColor;
uniform vec3 uCarPos;
uniform vec3 uPlayerPos;
uniform vec2 uCarDir;
uniform float uHeadI;
uniform vec2 uWindDir;
varying vec3 vW;

float hash12(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

// baked world mask: r = distance to water, g = paved, b = grass, a = asphalt
vec4 maskAt(vec2 p) { return texture2D(uMask, (p + WORLD_HALF) / WORLD_SIZE); }

// warm pools under lamps + headlight cone on the ground
vec3 extraLight(vec3 w) {
  vec3 c = vec3(0.);
  for (int i = 0; i < MAX_LAMPS; i++) {
    vec2 dd = w.xz - uLamps[i].xz;
    c += uLampColor * exp(-dot(dd, dd) * 0.12);
  }
  c *= uLampI * 0.32;
  vec2 to = w.xz - uCarPos.xz;
  float al = dot(to, uCarDir);
  float sd = abs(dot(to, vec2(-uCarDir.y, uCarDir.x)));
  float cone = smoothstep(1.5, 3.5, al) * (1. - smoothstep(6., 17., al)) * (1. - smoothstep(al * .32 + .6, al * .32 + 1.8, sd));
  c += vec3(1., .88, .65) * cone * uHeadI * .3;
  return c;
}
