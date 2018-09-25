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
            // board : this.deck.solitaire(),
            deck_0 : this.deck.deal(6, true),
            deck_1 : this.deck.deal(5, true),
            deck_2 : this.deck.deal(4, true),
            deck_3 : this.deck.deal(3, true),
            deck_4 : this.deck.deal(2, true),
            deck_5 : this.deck.deal(1, true),
            deck_6 : [],
            discard : this.deck.deal(3)
        }
        this.state.deck_0 = this.state.deck_0.concat(this.deck.deal(1));
        this.state.deck_1 = this.state.deck_1.concat(this.deck.deal(1));
        this.state.deck_2 = this.state.deck_2.concat(this.deck.deal(1));
        this.state.deck_3 = this.state.deck_3.concat(this.deck.deal(1));
        this.state.deck_4 = this.state.deck_4.concat(this.deck.deal(1));
        this.state.deck_5 = this.state.deck_5.concat(this.deck.deal(1));
        this.state.deck_6 = this.state.deck_6.concat(this.deck.deal(1));
        this.state.draw = this.deck.deal(100, true);




    }

    removeOne(hand) {
        
        this.state[hand].pop()
        this.setState({[hand] : this.state[hand]});

    }

    //We need to do move card on click of a card
        //1st raise card 75%

    render() {

        this.props.cardSize ? this.cardSize = this.props.cardSize : this.cardSize = 110;
        return (
        <div className={"grid-container"}>
            <div className={"deck_0"}>
                <Hand hide={false} layout={"stack"} cards={this.state.deck_0} cardSize={this.cardSize}/>
            </div>
            <div className={"deck_1"}>
                <Hand hide={false} layout={"stack"} cards={this.state.deck_1} cardSize={this.cardSize}/>
            </div>
            <div className={"deck_2"}>
                <Hand hide={false} layout={"stack"} cards={this.state.deck_2} cardSize={this.cardSize}/>
            </div>
            <div className={"deck_3"}>
                <Hand hide={false} layout={"stack"} cards={this.state.deck_3} cardSize={this.cardSize}/>
            </div>
            <div className={"deck_4"}>
                <Hand hide={false} layout={"stack"} cards={this.state.deck_4} cardSize={this.cardSize}/>
            </div>
            <div className={"deck_5"}>
                <Hand hide={false} layout={"stack"} cards={this.state.deck_5} cardSize={this.cardSize}/>
            </div>
            <div className={"deck_6"}>
                <Hand hide={false} layout={"stack"} cards={this.state.deck_6} cardSize={this.cardSize}/>
            </div>
            <div className={"hand_draw"}>
                    <Hand hide={false} layout={"stack"} cards={this.state.draw} cardSize={this.cardSize}/>
            </div>
            <div className={"hand_discard"}>
                <Hand hide={false} layout={"stack"} cards={this.state.discard} cardSize={this.cardSize}/>
            </div>
        </div>
        )
    }
}




export default Solitaire;
