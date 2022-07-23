const mainNav = document.querySelector(".header-nav");
const buttonMobileNav = document.querySelector(".btn-nav");
const buttonIconOpen = document.querySelector(
  ".btn-nav-icon[name=hamburger-icon]"
);
const buttonIconClose = document.querySelector(
  ".btn-nav-icon[name=close-icon]"
);

buttonMobileNav.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  buttonIconClose.classList.toggle("displayBlock");
  buttonIconOpen.classList.toggle("displayNone");
});
