import "./styles/main.scss";
import "./styles/globals/_boilerplate.scss";
import "../src/canvas.js";
import { Howl } from "howler";
import audio1 from "../src/audio1.mp3";
import WebSynthesizer from "../src/texts/WebSynthesizer.html";
import FogRacer from "../src/texts/FogRacer.html";
import InteractiveArt from "../src/texts/InteractiveArt.html";
import Video from "../src/texts/Video.html";
import Audio from "../src/texts/Audio.html";
import About from "../src/texts/About.html";

let MainContent = document.querySelector(".grid__main");

let WebSynthPage = document.querySelector(".WebSynth");
let FogRacerPage = document.querySelector(".FogRacer");
let InteractiveArtPage = document.querySelector(".InteractiveArt");
let VideoPage = document.querySelector(".Video");
let AudioPage = document.querySelector(".Audio");
let AboutPage = document.querySelector(".About");

let pagearray = [
  WebSynthPage,
  FogRacerPage,
  InteractiveArtPage,
  VideoPage,
  AudioPage,
  AboutPage,
];

const pageselector = (page) => {
  page.style.textDecoration = "underline";
  pagearray.forEach((val, i) => {
    if (pagearray[i] !== page) {
      pagearray[i].style.textDecoration = "";
    }
  });
};

WebSynthPage.addEventListener("click", (e) => {
  MainContent.innerHTML = WebSynthesizer;
  pageselector(WebSynthPage);
});

FogRacerPage.addEventListener("click", (e) => {
  MainContent.innerHTML = FogRacer;
  pageselector(FogRacerPage);
});

InteractiveArtPage.addEventListener("click", (e) => {
  MainContent.innerHTML = InteractiveArt;
  pageselector(InteractiveArtPage);
});

VideoPage.addEventListener("click", (e) => {
  MainContent.innerHTML = Video;
  pageselector(VideoPage);
});

AudioPage.addEventListener("click", (e) => {
  MainContent.innerHTML = Audio;
  pageselector(AudioPage);
});

AboutPage.addEventListener("click", (e) => {
  MainContent.innerHTML = About;
  pageselector(AboutPage);
});

document
  .querySelector(".grid__header__content")
  .addEventListener("click", (e) => {
    location.reload();
  });

document
  .querySelector(".grid__header__button")
  .addEventListener("click", (e) => {
    if (sound.playing()) {
      document.querySelector(".grid__header__button").innerHTML =
        "<h2>Sound Off</h2>";
      document.querySelector(".grid__header__button").style.borderColor =
        "rgb(228, 106, 106)";
    } else {
      document.querySelector(".grid__header__button").innerHTML =
        "<h2>Sound On</h2>";
      document.querySelector(".grid__header__button").style.borderColor =
        "rgb(106, 175, 228)";
    }

    sound.playing() ? sound.pause() : sound.play();
  });

const sound = new Howl({
  src: [audio1],
  html5: true,
  loop: true,
});
