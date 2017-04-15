let PlayingCards = {};
let suits = ['c', 'd', 'h', 's'];
let faces = ['j', 'q', 'k'];

let addSuits = (i, PlayingCards) => {
	for(let suit of suits){
		PlayingCards[i + suit] = require('./CardImages/' + i + suit + '.svg');
	}
}

for(let i = 1; i < 10; i++){
	addSuits(i, PlayingCards);
}

for(let i of faces){
	addSuits(i, PlayingCards);
}
PlayingCards.flipped = require('./CardImages/b.svg');


export default PlayingCards;