import "./styles/main.scss";
import "./styles/globals/_boilerplate.scss";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import "../src/CopyShader.js";
import { CopyShader } from "../src/CopyShader.js";

let Canvas = document.querySelector("main");
let time = 0;

console.log(Canvas);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  Canvas.clientWidth / Canvas.clientHeight,
  0.1,
  1000
);

window.addEventListener("resize", (e) => {
  Canvas = document.querySelector("main");
  camera.aspect = Canvas.clientWidth / Canvas.clientHeight;
});

const renderer = new THREE.WebGLRenderer();
renderer.setSize(Canvas.clientWidth, Canvas.clientHeight);
document.querySelector(".grid__main__webgl").appendChild(renderer.domElement);

//PLAIN GEOMETRY
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

//EFFECT COMPOSER
const composer = new EffectComposer(renderer);

const pass1 = new ShaderPass(CopyShader);

const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);
composer.addPass(pass1);

function animate() {
  time += 0.1;
  pass1.uniforms.time.value = time;

  requestAnimationFrame(animate);
  composer.render();
}
animate();
