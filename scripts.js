const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScoreElement = document.querySelector('#machine-score'); // Corrigido o nome da variável

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Máquina: ' + machine);

    if (human === machine) {
        result.innerHTML = 'Deu empate';
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = 'Você Ganhou!';
    } else {
        machineScoreNumber++;
        machineScoreElement.innerHTML = machineScoreNumber; // Corrigido o nome da variável
        result.innerHTML = 'Você Perdeu para os garantidos';
    }
};

