let PlayingCardsList = {};
let suits = ['c', 'd', 'h', 's'];
let faces = ['j', 'q', 'k'];

let addSuits = (i, PlayingCardsList) => {
	for(let suit of suits){
		PlayingCardsList[i + suit] = './CardImages/png/' + i + suit + '.png';
	}
}

for(let i = 1; i < 10; i++){
	addSuits(i, PlayingCardsList);
}

for(let i of faces){
	addSuits(i, PlayingCardsList);
}
PlayingCardsList.flipped = './CardImages/png/b.png';


export default PlayingCardsList;