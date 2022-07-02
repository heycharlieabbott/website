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

let hovertimeline = gsap.timeline({ defaults: { duration: 0.2 } });

const pageselector = (page, html) => {
  MainContent.innerHTML = html;
  page.style.textDecoration = "underline";

  document.querySelectorAll("a").forEach((val, i) => {
    val.addEventListener("mouseover", (e) => {
      gsap
        .fromTo(
          val,
          { textDecorationColor: "rgb(255, 255, 255, 255)" },
          {
            textDecorationColor: "rgb(255, 255, 255, 0)",
            duration: 1.2,
          }
        )
        .repeat(-1);
      //   .to(val, {
      //     duration: 1,
      //     textDecorationColor: "rgb(255, 255, 255, 255)",
      //   })
      //   .to(val, {
      //     duration: 1,
      //     textDecorationColor: "rgb(255, 255, 255, 0)",
      //   });
      // hovertimeline.repeat(-1);
    });
    val.addEventListener("mouseleave", (e) => {
      hovertimeline.repeat(0);
    });
  });

  pagearray.forEach((val, i) => {
    if (pagearray[i] !== page) {
      pagearray[i].style.textDecoration = "";
    }
  });
};

WebSynthPage.addEventListener("click", (e) => {
  pageselector(WebSynthPage, WebSynthesizer);
});

FogRacerPage.addEventListener("click", (e) => {
  pageselector(FogRacerPage, FogRacer);
});

InteractiveArtPage.addEventListener("click", (e) => {
  pageselector(InteractiveArtPage, InteractiveArt);
});

VideoPage.addEventListener("click", (e) => {
  pageselector(VideoPage, Video);
});

AudioPage.addEventListener("click", (e) => {
  pageselector(AudioPage, Audio);
});

AboutPage.addEventListener("click", (e) => {
  pageselector(AboutPage, About);
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
