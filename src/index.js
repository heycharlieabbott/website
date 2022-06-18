import "./styles/main.scss";
import "./styles/globals/_boilerplate.scss";
import "../src/canvas.js";
import * as THREE from "three";

let WebSynthPage = false;
let FogRacerPage = false;
let InteractiveArtPage = false;
let VideoPage = false;
let AudioPage = false;
let AboutPage = false;

let MainContent = document.querySelector(".grid__main");
let Selector = 0;

document.querySelector(".WebSynth").addEventListener("click", (e) => {
  Selector = 1;
  if (Selector === 1) {
    MainContent.innerHTML = "Web Synthesizer";
  } else {
    MainContent.innerHTML = "";
  }
});

document.querySelector(".FogRacer").addEventListener("click", (e) => {
  Selector = 2;
  if (Selector === 2) {
    MainContent.innerHTML = "Fog Racer";
  } else {
    MainContent.innerHTML = "";
  }
});

document.querySelector(".InteractiveArt").addEventListener("click", (e) => {
  Selector = 3;
  if (Selector === 3) {
    MainContent.innerHTML = "Interactive Art";
  } else {
    MainContent.innerHTML = "";
  }
});

document.querySelector(".Video").addEventListener("click", (e) => {
  Selector = 4;
  if (Selector === 4) {
    MainContent.innerHTML = "Video";
  } else {
    MainContent.innerHTML = "";
  }
});

document.querySelector(".Audio").addEventListener("click", (e) => {
  Selector = 5;
  if (Selector === 5) {
    MainContent.innerHTML = "Audio";
  } else {
    MainContent.innerHTML = "";
  }
});

document.querySelector(".About").addEventListener("click", (e) => {
  Selector = 6;
  if (Selector === 6) {
    MainContent.innerHTML = "About";
  } else {
    MainContent.innerHTML = "";
  }
});
