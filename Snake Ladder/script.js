let currentPlayer = 1;
let positions = [0, 0]; // Player positions
const ladders = {2: 38, 7: 14, 8: 31, 15: 26, 28: 84, 21: 42, 36: 44, 51: 67, 78: 98, 87: 94};
const snakes = {16: 6, 46: 25, 49: 11, 62: 19, 64: 60, 74: 53, 89: 68, 92: 88, 95: 75, 99: 80};

function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById('diceResult').textContent = `Player ${currentPlayer} rolled a ${dice}`;
    movePlayer(dice);
}

function movePlayer(dice) {
    let newPosition = positions[currentPlayer - 1] + dice;

    if (newPosition > 100) {
        newPosition = 100 - (newPosition - 100);
    }

    if (ladders[newPosition]) {
        newPosition = ladders[newPosition];
    } else if (snakes[newPosition]) {
        newPosition = snakes[newPosition];
    }

    positions[currentPlayer - 1] = newPosition;
    updateBoard();

    if (newPosition === 100) {
        document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
        document.querySelector('button').disabled = true;
    } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
    }
}

function updateBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('player1', 'player2'));

    if (positions[0] > 0) {
        document.getElementById(`cell-${positions[0]}`).classList.add('player1');
    }
    if (positions[1] > 0) {
        document.getElementById(`cell-${positions[1]}`).classList.add('player2');
    }
}

function createBoard() {
    const board = document.querySelector('.board');
    for (let i = 99; i >= 0; i--) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${i + 1}`;
        cell.textContent = i + 1;
        board.appendChild(cell);
    }
}

createBoard();
