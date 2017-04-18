import React, { Component } from 'react';
import './Table/Table.css';
import Hand from './Hand/Hand'
import Deck from './Deck';
class Table extends Component {
    constructor(props) {
        super(props);
        this.deck = new Deck();
        this.deck.shuffle();
        this.state = {
            handN : this.deck.deal(5),
            handS : this.deck.deal(3),
            handE : this.deck.deal(7),
            handW : this.deck.deal(4),
            board : []
        }
            
    }

    removeOne(hand) {
        this.state.board.push(this.state[hand].pop())
        this.setState({[hand] : this.state[hand], 
            board : this.state.board});

    }
    render() {

        this.props.cardSize ? this.cardSize = this.props.cardSize : this.cardSize = 110;
        return (
          <div className='Card-table' style={this.props.style}>
            <div onClick={()=>this.removeOne('handS')} id='bottom'style={{'bottom': this.cardSize * 1.5 + 'px', 'right':'50%', 'position':'absolute'}}>
                <Hand hide={false} fan={true} cards={this.state.handS} cardSize={this.cardSize} />
            </div>
            <div onClick={()=>this.removeOne('handW')} id='left' style={{'top': 'calc(50% - ' + this.cardSize + 'px)', 'left':this.cardSize * .3 + 'px', 'position':'absolute'}}>
                <Hand rotate={90} fan={true} hide={false} cards={this.state.handW} cardSize={this.cardSize}/>
            </div>
            <div onClick={()=>this.removeOne('handN')} id='top' style={{'right':'50%', 'top': -this.cardSize * .5, 'position':'absolute'}}>
                <Hand rotate={180} fan={true} hide={false} cards={this.state.handN} cardSize={this.cardSize}/>
            </div>
            <div onClick={()=>this.removeOne('handE')} id='right' style={{'right':this.cardSize * .1 + 'px', 'top':'calc(50% - ' + this.cardSize + 'px)', 'position':'absolute'}}>
                <Hand rotate={270} hide={true} fan={false} spread={true} cards={this.state.handE} cardSize={this.cardSize}/>
            </div>
            <div id='board' style={{'right':'50%', 'top':'calc(50% - ' + (this.cardSize / 2) + 'px)', 'position':'absolute'}}>
                <Hand hide={false} fan={false} spread={true} cards={this.state.board} cardSize={this.cardSize}/>
            </div>
          </div>
        );
    }
}
export default Table;
