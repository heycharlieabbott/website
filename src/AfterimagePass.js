/**
This shader and shaderpass were extended from the three.js AfterimageShader.js and AfterimagePass.js files:
https://github.com/mrdoob/three.js/blob/dev/examples/jsm/shaders/AfterimageShader.js
https://github.com/mrdoob/three.js/blob/dev/examples/jsm/postprocessing/AfterimagePass.js
 */

import {
  MeshBasicMaterial,
  NearestFilter,
  ShaderMaterial,
  UniformsUtils,
  WebGLRenderTarget,
} from "three";
import { Pass, FullScreenQuad } from "./Pass.js";
import { AfterimageShader } from "./AfterimageShader";

class AfterimagePass extends Pass {
  constructor(damp = 0.96) {
    super();

    if (AfterimageShader === undefined)
      console.error("THREE.AfterimagePass relies on AfterimageShader");

    this.shader = AfterimageShader;

    this.uniforms = UniformsUtils.clone(this.shader.uniforms);

    this.uniforms["damp"].value = damp;

    this.textureComp = new WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight,
      {
        magFilter: NearestFilter,
      }
    );

    this.textureOld = new WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight,
      {
        magFilter: NearestFilter,
      }
    );

    this.shaderMaterial = new ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.shader.vertexShader,
      fragmentShader: this.shader.fragmentShader,
    });

    this.compFsQuad = new FullScreenQuad(this.shaderMaterial);

    const material = new MeshBasicMaterial();
    this.copyFsQuad = new FullScreenQuad(material);
  }

  render(renderer, writeBuffer, readBuffer /*, deltaTime, maskActive*/) {
    this.uniforms["tOld"].value = this.textureOld.texture;
    this.uniforms["tNew"].value = readBuffer.texture;

    renderer.setRenderTarget(this.textureComp);
    this.compFsQuad.render(renderer);

    this.copyFsQuad.material.map = this.textureComp.texture;

    if (this.renderToScreen) {
      renderer.setRenderTarget(null);
      this.copyFsQuad.render(renderer);
    } else {
      renderer.setRenderTarget(writeBuffer);

      if (this.clear) renderer.clear();

      this.copyFsQuad.render(renderer);
    }

    // Swap buffers.
    const temp = this.textureOld;
    this.textureOld = this.textureComp;
    this.textureComp = temp;
    // Now textureOld contains the latest image, ready for the next frame.
  }

  setSize(width, height) {
    this.textureComp.setSize(width, height);
    this.textureOld.setSize(width, height);
  }
}

export { AfterimagePass };
