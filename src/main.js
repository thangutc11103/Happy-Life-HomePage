document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
    let currentQuestion = 0;
    let totalScore = 0;

    // Function to calculate total score for the current question
    function calculateTotalScore(questionIndex) {
        const answerInputs = document.querySelectorAll('input[name="answer' + (questionIndex + 1) + '"]');
        answerInputs.forEach(function (input) {
            if (input.checked) {
                totalScore += parseInt(input.value);
            }
        });
    }

    // Event listener for the submit button
    document.getElementById('submitBtn').addEventListener('click', function () {
        // Calculate total score for the current question
        calculateTotalScore(currentQuestion);

        // Check if it's the last question
        if (currentQuestion < questions.length - 1) {
            // Hide the current question
            questions[currentQuestion].classList.add('hidden');
            // Move to the next question
            currentQuestion++;
            // Display the next question
            questions[currentQuestion].classList.remove('hidden');
        } else {
            // Handle submission when all questions are answered
            // Hide the last question
            questions[currentQuestion].classList.add('hidden');
            
            document.getElementById('totalScore').classList.remove('hidden');
            document.getElementById('titleTest').classList.add('hidden');
            document.getElementById('submitBtn').classList.add('hidden');
            document.getElementById('scoreValue').textContent = totalScore;
        }
    });
});
