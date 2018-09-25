export default class Deck {
    constructor(){
        this.cards = this.initDeck();
    }
    initDeck(){
        let deck = [];
        let suits = ['c', 'd', 'h', 's'];
        let faces = ['j', 'q', 'k'];
        
        let addSuits = (i, deck) => {
        	for(let suit of suits){
        		deck.push(i + suit);
        	}
        	return deck;
        }
        
        for(let i = 1; i < 10; i++){
        	deck = addSuits(i, deck);
        }
        
        for(let i of faces){
        	deck = addSuits(i, deck);
        }
        return deck;
    }
    deal(n, hidden, notHidden){
        let dist = [];
        if(n > this.cards.length){
            console.log('not enough cards, dealing max');
            n = this.cards.length;
        }
        console.log('n:', n)
        while(n){
            if(hidden){
                dist.push("hide");
                this.cards.pop()
                // hidden[n] ? dist.push('hide') : dist.push(this.cards.pop());
            }else if(notHidden){
                notHidden[n] ? dist.push(this.cards.pop()) : dist.push('hide');
            }
            else dist.push(this.cards.pop())

            n--;
        }
        return dist;
    }
    solitaire(){
        var decks = [];
        for(var i = 8; i > 0; i--){
            decks.push(this.deal(i, false, {1 : true}));
        }
        return decks;
    }
    shuffle(){
        /**
         * Shuffles array in place. ES6 version
         * @param {Array} a items The array containing the items.
         */
        function shuffle(a) {
            for (let i = a.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
            }
            return a;
        }
        this.cards = shuffle(this.cards);
    }
}