uniform float uLeafScale;   // season: thinner crowns in winter
//#main
transformed *= uLeafScale;
vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
float sw = sin(uTime * 2.2 + ip.x * .5 + ip.y * .8 + ip.z * .3);
transformed += vec3(sw * .06, sw * .03, cos(uTime * 1.7 + ip.z) * .05);
