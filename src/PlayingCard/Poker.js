import React, { Component } from 'react';
import './Table/Table.css';
import Deck from './Deck';
import Hand from "./Hand/Hand";
import Board from "./Board";
import io from 'socket.io-client';
const { Map, List } = require('immutable')


class Poker extends Component {
    constructor(props) {
        super(props);
        this.deck = new Deck();
        this.deck.shuffle();
        this.socket = io(process.env.REACT_APP_SOCKET_SERVER);//openSocket('http://localhost:8000');
        this.cardSize = props.cardSize;
        this.state = {
            handN : this.deck.deal(2), //this.deck.deal(10),
            handNE : this.deck.deal(2),
            handE : this.deck.deal(2),
            handSE : this.deck.deal(2),
            handS : this.deck.deal(2), //this.deck.deal(10),
            handSW : this.deck.deal(2),
            handW : this.deck.deal(2),
            handNW : this.deck.deal(2),
            discard : Map({
                handId : "discard",
                hide : false,
                hand: this.deck.deal(5),//this.deck.deal(1)
                layout : "spread"
            }),
            draw : Map({
                handId : "draw",
                hide : true,
                hand : this.deck.deal(999), //this.deck.deal(999)
                layout : "stack"
            })
        };

        this.socket.on('state', newState => {
            // var discard = {...this.state.discard};
            // var draw = {...this.state.draw};
            // discard.hand = newState.discard;
            // draw.hand = newState.draw;
            // console.log("discard: ", discard.hand);
            // console.log("draw: ", draw.hand);
            // this.state.discard.hand.push(newState.discard[0]); //have to do this stupid stuff, should just use immutable
            // this.state.draw.hand.push(newState.draw[0]);
            // console.log('got players: ', newState.players);
            // console.log('got state: ', newState);

            const newStateFull = {
                handN : newState.players.opponentState0 && newState.players.opponentState0.primaryHand || [], //change this to an array of opponents
                handNW : newState.players.opponentState1 && newState.players.opponentState1.primaryHand || [], //change this to an array of opponents
                handNE : newState.players.opponentState2 && newState.players.opponentState2.primaryHand || [],
                handE : newState.players.opponentState3 && newState.players.opponentState3.primaryHand || [],
                handSE : newState.players.opponentState4 && newState.players.opponentState4.primaryHand || [],
                handSW : newState.players.opponentState5 && newState.players.opponentState5.primaryHand || [],
                handW : newState.players.opponentState6 && newState.players.opponentState6.primaryHand || [],
                handS : newState.players.playerState.primaryHand || [],
                discard : this.state.discard.set("hand", newState.discard),
                draw : this.state.draw.set("hand", newState.draw)
            };
            console.log("newState: ", JSON.stringify(newStateFull));
            this.setState(newStateFull);
        });
        // this.cardSize = props.cardSize
        // this.deck = new Deck();
        // this.deck.shuffle();

        this.styles = {
            eightHand: function () {
                return {
                    handN: {'transform' : 'translateY(-30%) rotate(180deg)', 'right': '50%', 'top': "0", 'position': 'absolute'},
                    handS: {'bottom': '0', 'right': '50%', 'position': 'absolute', 'height' : '30%'},
                    handNE : {'bottom': '0', 'right': '50%', 'position': 'absolute', 'transform': 'rotate(45deg) translate(' + props.cardSize +'px -' + window.innerHeight() + ')', 'transform-origin' : ' 0px -' + window.innerWidth / 2 + 'px'},
                    board: {'left': 'calc(50% - ' + props.cardSize * 1.4 + 'px)', 'top': '35%', 'position': 'absolute', 'width': props.cardSize * 4 + 'px'}
                }
            }
        };

            
    }

    removeOne(hand) {
        
        // this.state[hand].pop()
        // this.setState({[hand] : this.state[hand]});

    }
    cb(err, state) {
        console.log("got a state: ",state);
        // this.setState(state);
    }
    onClick(key) {
        console.log(key);
        if (key.hand === 'handS') {
            console.log("discarding: ", key.card);
             //don't change state
            this.socket.emit('discard', key.card);
        }
        // if (key.hand === 'discard') {
        //     console.log(this.state.discard);
        //     let index = this.state.discard.hand.indexOf(key.card);
        //     this.setState({
        //         handS: this.state.get('handS').push(key.card) && this.state.handS,
        //         discard : {
        //             hand : this.state.discard.hand.splice(index, 1) && this.state.discard.hand,
        //             handId : "discard",
        //             hide : false
        //
        //         }
        //     }, function(){
        //         console.log(this.state.handS);
        //     })
        // }
        if (key.hand === 'draw') {
            console.log("drawing");
            this.socket.emit('draw');
        }

        if (key.hand === 'discard') {
            console.log("drawing from discard");
            this.socket.emit('drawFromDiscard');
        }
        //     }, function(){
        //         console.log(this.state.handS);
        //     })
        // }
    };
    componentDidUpdate(){
    }
    //We need to do move card on click of a card
        //1st raise card 75%

    render() {
        console.log("draw: ", this.state.draw.toJS())
        return (
            <div className='Card-table' style={this.props.style}>
                <div id='top' style={this.styles.eightHand(this.cardSize).handN}>
                    <Hand onClick={this.onClick.bind(this)} handId={'handN'} layout={"fan"} hide={true}
                          cards={this.state.handN} cardSize={this.cardSize}/>
                </div>
                <Board onClick={this.onClick.bind(this)} width={75} cardSize={this.cardSize}
                       style={this.styles.eightHand(this.cardSize).board} hands={[this.state.draw.toJS(), this.state.discard.toJS()]}/>
                <div id='bottom' style={this.styles.eightHand(this.cardSize).handS}>
                    <Hand                           key={ this.id }
                                                    onClick={this.onClick.bind(this)} handId={'handS'} hide={false} layout={"fan"}
                                                    cards={this.state.handS} cardSize={this.cardSize * 1.7}/>

                </div>
                <div id='idk' style={this.styles.eightHand(this.cardSize).handNE}>
                    <Hand                           key={ this.id }
                                                    onClick={this.onClick.bind(this)} handId={'handNE'} hide={false} layout={"fan"}
                                                    cards={this.state.handNE} cardSize={this.cardSize}/>

                </div>
            </div>
        )
    }
}




export default Poker;
