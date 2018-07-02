import React, { Component } from 'react';
import './Table/Table.css';
import Hand from './Hand/Hand'
import Deck from './Deck';
import Boards from './Boards';

class Solitaire extends Component {
    constructor(props) {
        super(props);
        this.deck = new Deck();
        this.deck.shuffle();
        this.state = {
            //handN : this.deck.deal(8),
            //handE : this.deck.deal(7),
            //handW : this.deck.deal(6),
            board : this.deck.solitaire(),
            handS : this.deck.deal(999)// Deal the rest
        }

            
    }

    removeOne(hand) {
        
        this.state[hand].pop()
        this.setState({[hand] : this.state[hand]});

    }

    //We need to do move card on click of a card
        //1st raise card 75%

    render() {

        this.props.cardSize ? this.cardSize = this.props.cardSize : this.cardSize = 110;
        console.log('width:', this.cardWidth)
        return Boards.solitaire(this.state, this.props, this.cardSize, 200);
    }
}




export default Solitaire;
