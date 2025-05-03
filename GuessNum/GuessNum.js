/*
console.log("Good Morning");
alert("Invalid Error"); 

name="Priyanshu Raj";
console.log(name);


let gameNum = Math.floor(Math.random() * 10) + 1;
let userNum = prompt("Guess a Number between 0 to 10: ");
while(userNum != gameNum) {
    userNum = prompt("Oops you entered wrong number. Guess Again between 0 to 10");
}
console.log(alert("Congratulation You entered the right number"));
*/
let gameNum = Math.floor(Math.random() * 10) + 1;

function createConfettiPiece() {
    const confettiPiece = document.createElement('div');
    confettiPiece.classList.add('confetti-piece');
    confettiPiece.style.left = `${Math.random() * 100}vw`;
    confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.getElementById('confetti').appendChild(confettiPiece);
}

function showConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.classList.remove('hidden');
    for (let i = 0; i < 100; i++) {
        createConfettiPiece();
    }
    setTimeout(() => confettiContainer.classList.add('hidden'), 3000);
}

function checkGuess() {
    let userNum = document.getElementById('userGuess').value;
    let message = document.getElementById('message');

    if (userNum == gameNum) {
        message.textContent = "Congratulations! You guessed the right number!";
        message.style.color = "green";
        showConfetti();
    } else {
        message.textContent = alert("Oops! Wrong number. Try again!");
        message.style.color = "red";
    }
}
