const button = document.getElementById('roll-button');
const diceElement = document.getElementById('dice');
const historyElement = document.getElementById('roll-history');
let history = historyElement.innerHTML;
button.addEventListener('click', playGame);

let historyList = [];
let number; 

function rollDice() {
    number = Math.floor(Math.random()*6) + 1;
    // console.log(number);
    const diceFace = getDiceFace(number);
    // console.log(diceFace);
    diceElement.innerHTML = diceFace;
    historyList.push(number);
    updateRollHistory();
    
}

function updateRollHistory() {
    historyElement.innerHTML = '';

    // for (let index = historyList.length -1; index >= 0; index--) {
    //     let historyUpdated = `
    //         <li>Roll ${index + 1}: <span>${getDiceFace(historyList[index])}</span></li>

    //     `
    //     historyElement.innerHTML += historyUpdated;
    // }

    historyList.reverse().forEach((history,index) => {
        let historyUpdated = `
                    <li>Roll ${historyList.length -index}: <span>${getDiceFace(history)}</span></li>

        `
        historyElement.innerHTML += historyUpdated;
    });



    
}

function getDiceFace(number) {
    switch (number) {
        case 1:
            return '&#9856;';
        case 2:
            return '&#9857;';
        case 3:
            return '&#9858;';
        case 4:
            return '&#9859;';
        case 5:
            return '&#9860;';
        case 6:
            return '&#9861;';
        default:
            return 'play the game ,good player';
            
    }
}

function playGame(){
    diceElement.classList.add('roll-animation');
    setTimeout(() => {
        diceElement.classList.remove('roll-animation');
    },1000);
    rollDice();
    
}
