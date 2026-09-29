attribute float aS;
varying float vS;
void main() {
  vS = aS;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}
