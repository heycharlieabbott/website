import "./styles/main.scss";
import "./styles/globals/_boilerplate.scss";
import "../src/canvas.js";
import { Howl, Howler } from "howler";
import audio1 from "../src/audio1.mp3";
import WebSynthesizer from "../src/texts/WebSynthesizer.html";
import FogRacer from "../src/texts/FogRacer.html";
import InteractiveArt from "../src/texts/InteractiveArt.html";
import Video from "../src/texts/Video.html";
import Audio from "../src/texts/Audio.html";
import About from "../src/texts/About.html";

let MainContent = document.querySelector(".grid__main");
let Selector = 0;

document.querySelector(".WebSynth").addEventListener("click", (e) => {
  Selector = 1;
  if (Selector === 1) {
    MainContent.innerHTML = WebSynthesizer;
  } else {
    MainContent.innerHTML = "";
  }
});

document.querySelector(".FogRacer").addEventListener("click", (e) => {
  Selector = 2;
  if (Selector === 2) {
    MainContent.innerHTML = FogRacer;
  } else {
    MainContent.innerHTML = "";
  }
});

document.querySelector(".InteractiveArt").addEventListener("click", (e) => {
  Selector = 3;
  if (Selector === 3) {
    MainContent.innerHTML = InteractiveArt;
  } else {
    MainContent.innerHTML = "";
  }
});

document.querySelector(".Video").addEventListener("click", (e) => {
  Selector = 4;
  if (Selector === 4) {
    MainContent.innerHTML = Video;
  } else {
    MainContent.innerHTML = "";
  }
});

document.querySelector(".Audio").addEventListener("click", (e) => {
  Selector = 5;
  if (Selector === 5) {
    MainContent.innerHTML = Audio;
  } else {
    MainContent.innerHTML = "";
  }
});

document.querySelector(".About").addEventListener("click", (e) => {
  Selector = 6;
  if (Selector === 6) {
    MainContent.innerHTML = About;
  } else {
    MainContent.innerHTML = "";
  }
});

document
  .querySelector(".grid__header__content")
  .addEventListener("click", (e) => {
    location.reload();
  });

document
  .querySelector(".grid__header__button")
  .addEventListener("click", (e) => {
    sound.playing()
      ? (document.querySelector(".grid__header__button").innerHTML =
          "<h2>Sound Off</h2>")
      : (document.querySelector(".grid__header__button").innerHTML =
          "<h2>Sound On</h2>");
    sound.playing() ? sound.pause() : sound.play();
  });

const sound = new Howl({
  src: [audio1],
  html5: true,
  loop: true,
});
