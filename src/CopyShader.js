/**
 * Full-screen textured quad shader
 */

const CopyShader = {
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1.0 },
    time: { value: 0.0 },
  },

  vertexShader: /* glsl */ `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

  fragmentShader: /* glsl */ `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		uniform float time;

		varying vec2 vUv;

		void main() {
			vec2 uv = vUv;
			uv -= 0.5;

			vec3 col = vec3(0.);

			col = vec3(1.0-length(uv*10. + sin(time)));

			gl_FragColor.xyz = col;
			gl_FragColor.a *= opacity;


		}`,
};

export { CopyShader };
