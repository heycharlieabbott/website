import "./styles/main.scss";
import "./styles/globals/_boilerplate.scss";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import "../src/CopyShader.js";
import { CopyShader } from "../src/CopyShader.js";
import { AfterimageShader } from "../src/AfterimageShader.js";
import { AfterimagePass } from "../src/AfterimagePass";

let Canvas = document.querySelector("main");
let time = 0;
let mousex = 0;
let mousey = 0;

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
  renderer.setSize(Canvas.clientWidth, Canvas.clientHeight);
});

const renderer = new THREE.WebGLRenderer();
renderer.setSize(Canvas.clientWidth, Canvas.clientHeight);
document.querySelector(".grid__main__webgl").appendChild(renderer.domElement);

//PLAIN GEOMETRY
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

//EFFECT COMPOSER
const composer = new EffectComposer(renderer);

const pass1 = new ShaderPass(CopyShader);
const pass2 = new AfterimagePass(AfterimageShader);
const renderPass = new RenderPass(scene, camera);

composer.addPass(renderPass);
composer.addPass(pass1);
composer.addPass(pass2);

window.addEventListener("mousemove", (e) => {
  mousex = e.clientX;
  mousey = e.clientY;

  pass1.uniforms.mousex.value = mousex / Canvas.clientWidth;
  pass1.uniforms.mousey.value = mousey / Canvas.clientHeight;

  pass2.uniforms.mousex.value = mousex / Canvas.clientWidth;
  pass2.uniforms.mousey.value = mousey / Canvas.clientHeight;
});

window.addEventListener("touchmove", (e) => {
  mousex = e.touches[0].clientX;
  mousey = e.touches[0].clientY;

  pass1.uniforms.mousex.value = mousex / Canvas.clientWidth;
  pass1.uniforms.mousey.value = mousey / Canvas.clientHeight;

  pass2.uniforms.mousex.value = mousex / Canvas.clientWidth;
  pass2.uniforms.mousey.value = mousey / Canvas.clientHeight;
});

function animate() {
  time += 0.1;
  pass1.uniforms.time.value = time;
  pass2.uniforms.time.value = time;

  requestAnimationFrame(animate);
  composer.render();
}
animate();
