document.addEventListener("DOMContentLoaded", () => {
    const quizOptions = document.querySelectorAll(".quiz-option");
    const feedback1 = document.getElementById("quiz-feedback-1");

    quizOptions.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.textContent === "Library") {
                feedback1.textContent = "Correct! A library is where books are kept.";
                feedback1.style.color = "green";
            } else {
                feedback1.textContent = "Incorrect. Try again!";
                feedback1.style.color = "red";
            }
        });
    });
});
