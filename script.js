document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const answers = {
        q1: 'C',
        q2: 'D',
        q3: 'B',
        q4: 'C',
        q5: 'A',
        q6: 'D',
        q7: 'A',
        q8: 'A',
        q9: 'B',
        q10: 'B'
    };

    let score = 0;
    const formData = new FormData(this);

    for (const [question, answer] of formData.entries()) {
        if (answers[question] === answer) {
            score++;
        }
    }

    document.getElementById('result').textContent = `Your score: ${score} out of ${Object.keys(answers).length}`;
});
