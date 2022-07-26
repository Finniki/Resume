"use strict";

const btnMenu = document.querySelector(".menu");
const btnCloseMenu = document.querySelector(".close");
const navBar = document.querySelector(".nav");
const slides = document.querySelectorAll(".section-slide");
const slider = document.querySelector(".section__works--slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");
const pages = document.querySelectorAll(".page");
const pageLink = document.querySelectorAll("a");

//Slider
const createDots = () => {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class='dot' data-slide='${i}'></button>`
    );
  });
};
createDots();

const activateDot = (slide) => {
  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("dot__active"));

  document
    .querySelector(`.dot[data-slide="${slide}"]`)
    .classList.add("dot__active");
};
activateDot(0);

// pages.forEach((page, i) => (page.style.transform = `translateX(${200 * i}%)`));

let curSlide = 0;
const maxSlide = slides.length - 1;
const goToSlide = (slide) =>
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${103 * (i - slide)}%)`)
  );

goToSlide(0);

const nextSlide = () => {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  e.key === "ArrowLeft" && prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

slider.addEventListener("swipe", function () {
  if (directions.right === true) nextSlide();
  if (directions.left === true) prevSlide();
  activateDot();
});
// btnCloseMenu.style.display = "none";
btnMenu.addEventListener("click", function () {
  btnMenu.style.display === "none"
    ? (btnMenu.style.display = "inline")
    : (btnMenu.style.display = "none");
  btnCloseMenu.style.display === "inline"
    ? (btnCloseMenu.style.display = "none")
    : (btnCloseMenu.style.display = "inline");
  navBar.style.transform = "translateX(0)";
  navBar.style.transition = "transform 0.5s linear";
  // navBar.scrollIntoView({ behavior: "smooth" });
});

btnCloseMenu.addEventListener("click", function () {
  btnMenu.style.display === "none"
    ? (btnMenu.style.display = "inline")
    : (btnMenu.style.display = "none");
  btnCloseMenu.style.display === "inline"
    ? (btnCloseMenu.style.display = "none")
    : (btnCloseMenu.style.display = "inline");
  navBar.style.transform = "translateX(200px)";
  navBar.style.transition = "transform 0.5s linear";
});
const home = document.querySelector("header");
pageLink.forEach(function (page) {
  page.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    console.log(id);
    if (id !== "#home") {
      home.style.opacity = 0;
      pages.forEach((page, i) => {
        i % 2 === 0
          ? (page.style.transform = "translateX(-180%)")
          : (page.style.transform = "translateX(-180%)");
      });
      document.querySelector(id).style.transition = "transform 1s linear";
      document.querySelector(id).style.transform = "translateX(0)";
    }
  });
});
const toggle = document.querySelector(".label");
const body = document.querySelector("#body");
const main = document.querySelector("main");
toggle.addEventListener("click", function () {
  console.log(`clicked`);
  body.classList.toggle("dark_theme");
  main.classList.toggle("dark_theme");
});
