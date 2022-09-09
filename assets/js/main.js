/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=====APRESENTAÇÃO DO MENU=====*/
function toggle() {
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  /*=====MENU OCULTO=====*/
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
}
toggle();

/*=============== REMOVER MENU PARA CELULAR ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== GSAP ANIMATION ===============*/

TweenMax.from(".home__title", 1, {
  delay: 0.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__description", 1, {
  delay: 0.3,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__button", 1, {
  delay: 0.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__csplash", 1, {
  delay: 0.7,
  opacity: 0,
  y: 200,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__toddynho-animate", 1, {
  delay: 1.2,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__euamo", 1, {
  delay: 1.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__choco2", 1, {
  delay: 1.6,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__emoji:nth-child(1)", 2, {
  delay: 1.3,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__emoji:nth-child(2)", 2, {
  delay: 1.4,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__emoji:nth-child(3)", 2, {
  delay: 1.5,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__emoji:nth-child(4)", 2, {
  delay: 1.6,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__emoji:nth-child(5)", 2, {
  delay: 1.7,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
TweenMax.from(".home__emoji:nth-child(6)", 2, {
  delay: 1.8,
  opacity: 0,
  y: -800,
  ease: Expo.easeInOut,
});
