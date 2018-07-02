import React, { Component } from 'react';
import './Table/Table.css';
import Deck from './Deck';
import Hand from "./Hand/Hand";
import Board from "./Board";

class GinRummy extends Component {
    constructor(props) {
        super(props);
        this.cardSize = props.cardSize
        this.deck = new Deck();
        this.deck.shuffle();
        this.state = {
            handN : this.deck.deal(10),
            //handE : this.deck.deal(7),
            //handW : this.deck.deal(6),
            handS : this.deck.deal(10),
            discard : {
                handId : "discard",
                hide : false,
                hand: this.deck.deal(1)
            },
            draw : {
                handId : "draw",
                hide : true,
                hand : this.deck.deal(999)
            }


        };
        this.styles = {
            twoHand: function () {
                return {
                    handS: {bottom: '0', 'right': '50%', 'position': 'absolute'},
                    board: {'left': "25%", 'top': '35%', 'position': 'absolute', 'width': '75%'}
                }
            }
        };

            
    }

    removeOne(hand) {
        
        this.state[hand].pop()
        this.setState({[hand] : this.state[hand]});

    }
    onClick(key) {
        console.log(key);
        if (key.hand === 'handS') {
            console.log(this.state.handS);
            let index = this.state.handS.indexOf(key.card);
             //don't change state
            this.setState({
                handS: this.state.handS.splice(index, 1) && this.state.handS,
                discard : {
                   hand : this.state.discard.hand.push(key.card) && this.state.discard.hand,
                    handId : "discard",
                    hide : false

                }
            }, function(){
                console.log(this.state.handS);
            })
        }
        if (key.hand === 'discard') {
            console.log(this.state.discard);
            let index = this.state.discard.hand.indexOf(key.card);
            this.setState({
                handS: this.state.handS.push(key.card) && this.state.handS,
                discard : {
                    hand : this.state.discard.hand.splice(index, 1) && this.state.discard.hand,
                    handId : "discard",
                    hide : false

                }
            }, function(){
                console.log(this.state.handS);
            })
        }
        if (key.hand === 'draw') {
            //only take the top! todo
            console.log(this.state.draw);
            let index = this.state.draw.hand.indexOf(key.card);
            this.setState({
                handS: this.state.handS.push(key.card) && this.state.handS,
                draw : {
                    hand : this.state.draw.hand.splice(index, 1) && this.state.draw.hand,
                    handId : "draw",
                    hide : true

                }
            }, function(){
                console.log(this.state.handS);
            })
        }
    };
    //We need to do move card on click of a card
        //1st raise card 75%

    render() {
        return (
            <div className='Card-table' style={this.props.style}>
                <div id='top' style={{'right': '50%', 'top': "0", 'position': 'absolute'}}>
                    <Hand onClick={this.onClick.bind(this)} handId={'handN'} rotate={180} layout={"fan"} hide={true}
                          cards={this.state.handN} cardSize={this.cardSize}/>
                </div>
                <Board onClick={this.onClick.bind(this)} width={75} cardSize={this.cardSize * 1.7}
                       style={this.styles.twoHand(this.cardSize).board} hands={[this.state.draw, this.state.discard]}/>
                <div id='bottom' style={this.styles.twoHand(this.cardSize).handS}>
                    <Hand                           key={ this.id }
                                                    onClick={this.onClick.bind(this)} handId={'handS'} hide={false} layout={"fan"}
                                                    cards={this.state.handS} cardSize={this.cardSize * 1.7}/>
                </div>
            </div>
        )
    }
}




export default GinRummy;
