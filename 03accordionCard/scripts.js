const questionsItems = document.querySelectorAll(".questions__items li");

questionsItems.forEach(function (question) {
  question.addEventListener("click", () => {
    const questionTitle = question.querySelector(".question");
    const questionText = question.querySelector(".questions__text");
    const questionIcon = question.querySelector("ion-icon");

    questionTitle.classList.toggle("question-open");
    questionText.classList.toggle("open");
    questionIcon.style.transform = "rotate(180deg)";
  });
});
