console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = [0];

cardsInPlay.push(cardOne);

console.log("User flipped" + " " + cardOne);

var cardTwo = [2];

cardsInPlay.push(cardTwo);

console.log("User flipped" + " " + cardTwo);


if (cardsInPlay.length === 2){
if (cardsInPlay[0] === cardsInPlay[2]){
	alert("You found a match!");
} else {
	alert("Sorry, try again.")
	}
}
