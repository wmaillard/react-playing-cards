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
            hand1 : this.deck.deal(5),
            hand2 : this.deck.deal(3),
            hand3 : this.deck.deal(7),
            hand4 : this.deck.deal(6)
        }
            
    }
    componentDidMount(){
       //setInterval(()=>this.removeOne(), 4000)
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    removeOne() {
        this.state.cards.pop()
        this.setState({cards : this.state.cards, fan:false});

    }
    render() {

        this.props.cardSize ? this.cardSize = this.props.cardSize : this.cardSize = 110;
        return (
          <div className='Card-table' style={this.props.style}>
            <div id='bottom'style={{'bottom': this.cardSize * 1.5 + 'px', 'right':'50%', 'position':'absolute'}}>
                <Hand hide={false} fan={true} cards={this.state.hand1} cardSize={this.cardSize} />
            </div>
            <div id='left' style={{'top': 'calc(50% - ' + this.cardSize + 'px)', 'left':this.cardSize * .5, 'position':'absolute'}}>
                <Hand rotate={90} fan={true} hide={false} cards={this.state.hand2} cardSize={this.cardSize}/>
            </div>
            <div id='top' style={{'right':'50%', 'top': -this.cardSize * .5, 'position':'absolute'}}>
                <Hand rotate={180} fan={true} hide={false} cards={this.state.hand3} cardSize={this.cardSize}/>
            </div>
            <div id='right' style={{'right':this.cardSize * .5 + 'px', 'top':'calc(50% - ' + this.cardSize + 'px)', 'position':'absolute'}}>
                <Hand rotate={270} hide={false} fan={true} cards={this.state.hand4} cardSize={this.cardSize}/>
            </div>
          </div>
        );
    }
}
export default Table;
