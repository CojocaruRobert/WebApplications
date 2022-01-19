let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")

let player = {
     name : "Robert",
     chips : 100,
     bet : 20
}

let betEl = document.getElementById("bet-el")
betEl.textContent ="Bet: $" + player.bet


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber > 10)
        return 10
    else if (randomNumber == 10)
        return 11
    else
        return randomNumber
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0;i < cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
    message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "Blackjack!"
        player.chips += player.bet
        hasBlackJack = true
        playerEl.textContent = player.name + ": $" + player.chips
    } else{
        message = "You lose!"
        player.chips -= player.bet
        playerEl.textContent = player.name + ": $" + player.chips
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function startGame(){
    if(player.chips != 0){
        isAlive = true
        hasBlackJack = false
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard,secondCard]
        cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
        sum = cards[0] + cards[1]
        sumEl.textContent = "Sum: " + sum
        renderGame()
    }else
        playerEl.textContent = "You lost all your money, please refesh the page!"
}



