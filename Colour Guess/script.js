let correctColor;
const colors = [];

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateColors(num) {
    for (let i = 0; i < num; i++) {
        colors.push(getRandomColor());
    }
}

function resetGame() {
    colors.length = 0;
    generateColors(4);
    correctColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('colorDisplay').style.backgroundColor = correctColor;

    const choices = document.querySelectorAll('.choice');
    choices.forEach((choice, index) => {
        choice.style.backgroundColor = colors[index];
        choice.textContent = colors[index];
    });

    document.getElementById('message').textContent = '';
}

function checkGuess(element) {
    const guessedColor = element.textContent;
    if (guessedColor === correctColor) {
        document.getElementById('message').textContent = 'Correct!';
        document.querySelectorAll('.choice').forEach(choice => {
            choice.style.backgroundColor = correctColor;
            choice.disabled = true;
        });
    } else {
        document.getElementById('message').textContent = 'Try Again!';
        element.style.backgroundColor = '#f4f4f4';
        element.disabled = true;
    }
}

resetGame();
