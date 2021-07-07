function rpsGame(yourChoice) {
    console.log('My Choice:', yourChoice.id);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('computer Choice:', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);

}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number]
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDataBase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissor': 0, 'rock': 1, 'paper': 0.5 },
        'scissor': { 'scissor': 0.5, 'rock': 0, 'paper': 1 }
    }
    let yourScore = rpsDataBase[yourChoice][computerChoice];
    let computerScore = rpsDataBase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost!', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'message': 'You Tied!', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You Won!', 'color': 'greeen' };
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById("rock").src,
        'paper': document.getElementById("paper").src,
        'scissor': document.getElementById("scissor").src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src = '" + imagesDatabase[humanImageChoice] + "' height = 150 width = 150 style = 'box-shadow: 2px 7px 28px -1px rgba(51,240,89,1);'>"
    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 30px; padding: 15px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src = '" + imagesDatabase[botImageChoice] + "' height = 150 width = 150 style = 'box-shadow: 2px 7px 28px -1px rgba(240,59,53,1);'>"
    document.getElementById('rps-images').appendChild(humanDiv);
    document.getElementById('rps-images').appendChild(messageDiv);
    document.getElementById('rps-images').appendChild(botDiv);
}

// Function to reload the page

function reload() {
    location.reload();

}
