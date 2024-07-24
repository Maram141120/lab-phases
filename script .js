const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5"],
        answer: "4"
    },
    
];

function loadQuiz() {
    const quizForm = document.getElementById('quiz-form');
    questions.forEach((q, index) => {
        const questionHTML = `
            <div class="question">
                <p>${index + 1}. ${q.question}</p>
                ${q.choices.map((choice, i) => `
                    <input type="radio" name="q${index}" value="${choice}" id="q${index}${i}">
                    <label for="q${index}${i}">${choice}</label><br>
                `).join('')}
            </div>
        `;
        quizForm.innerHTML += questionHTML;
    });
}

document.getElementById('submit-button').addEventListener('click', function() {
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    alert(`You scored ${score} out of ${questions.length}`);
});

window.onload = loadQuiz;

