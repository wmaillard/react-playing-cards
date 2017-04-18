let PlayingCardsList = {};
let suits = ['c', 'd', 'h', 's'];
let faces = ['j', 'q', 'k'];

let addSuits = (i, PlayingCardsList) => {
	for(let suit of suits){
		PlayingCardsList[i + suit] = require('./CardImages/' + i + suit + '.svg');
	}
}

for(let i = 1; i < 10; i++){
	addSuits(i, PlayingCardsList);
}

for(let i of faces){
	addSuits(i, PlayingCardsList);
}
PlayingCardsList.flipped = require('./CardImages/b.svg');


export default PlayingCardsList;