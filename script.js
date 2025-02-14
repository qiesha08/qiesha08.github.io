let currentQuestion = 0;
const questions = [
    "Do you love me?",
    "Do you remember the good moments we shared?",
    "Would you like to forgive me?",
    "I’m truly sorry for what happened. Do you forgive me?"
];

const questionText = document.getElementById('question-text');
const nextBtn = document.getElementById('next-btn');

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        questionText.textContent = questions[currentQuestion];
    } else {
        questionText.textContent = "Thank you for your forgiveness. ❤️";
        nextBtn.style.display = "none";
    }
}

nextBtn.addEventListener('click', nextQuestion);
