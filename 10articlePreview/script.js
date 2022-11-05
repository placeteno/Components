const shareIcon = document.querySelector(".share-icon");

shareIcon.addEventListener("click", () => {
  document.querySelector(".component--socials").classList.toggle("opacity");
  document.querySelector(".share-icon>svg>path").classList.toggle("fill");
  shareIcon.classList.toggle("share-icon-active");
});
