uniform vec3 uColor;
uniform float uHead;
varying float vS;
void main() {
  float a = smoothstep(uHead - .45, uHead - .12, vS) * (1. - smoothstep(uHead - .05, uHead, vS));
  gl_FragColor = vec4(uColor * a, a);
}
