const form = document.querySelector(".hero--form");
const input = document.querySelector(".form-input");
const heroBtn = document.querySelector(".submit-bnt");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const errorMessage = document.querySelector(".errorMessage");
  const errorIcon = document.querySelector("img[alt='errorIcon']");
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
  errorIcon.style.display = "none";
  input.style.border = "1px solid hsla(0, 36%, 70%, 0.5)";

  if (!input.value) {
    errorMessage.textContent = "Please provide a valid email";
    errorMessage.style.display = "block";
    errorIcon.style.display = "block";
    input.style.border = "1px solid red";
  }
});
