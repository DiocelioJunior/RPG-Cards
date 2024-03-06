var card1 = document.getElementById('card-1');
var card2 = document.getElementById('card-2');
var card3 = document.getElementById('card-3');

var next = document.getElementById('arrow-nxt');
var back = document.getElementById('arrow-bck');

var currentValue = 1;

card1.addEventListener("click", function (event) {
    selectedCard(event, 1);
});
card2.addEventListener("click", function (event) {
    selectedCard(event, 2);
});
card3.addEventListener("click", function (event) {
    selectedCard(event, 3);
});

function selectedCard(event, cardNumber) {
    switch (cardNumber) {
        case 1:
            console.log('A')
            break;
        case 2:
            console.log('B')
            break;
        case 3:
            console.log('C')
            break;
        default:
            break;
    }
}

next.addEventListener("click", nextCard);
back.addEventListener("click", backCard);


next.addEventListener("click", nextCard);
back.addEventListener("click", backCard);




function nextCard() {
    if (currentValue < 3) {
        currentValue = currentValue + 1;
    } else {
        currentValue = 1;
    }
    console.log(currentValue);
    showCurrentCard();
}

function backCard() {
    if (currentValue > 1) {
        currentValue = currentValue - 1;
    } else {
        currentValue = 3;
    }
    console.log(currentValue);
    showCurrentCard();
}

function showCurrentCard() {
    switch (currentValue) {
        case 1:
            card1.style.display = "flex";
            card2.style.display = "none";
            card3.style.display = "none";
            break;
        case 2:
            card1.style.display = "none";
            card2.style.display = "flex";
            card3.style.display = "none";
            break;
        case 3:
            card1.style.display = "none";
            card2.style.display = "none";
            card3.style.display = "flex";
            break;
        default:
            console.log('Invalid card value.');
            break;
    }
}

