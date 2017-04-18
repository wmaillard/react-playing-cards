import React, { Component } from 'react';
import './Table/Table.css';
import Hand from './Hand/Hand'
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: ['kd': 'kd', 'qs': 'qs', '3h': '3h', '7d': '7d', '3c': '3c', 'qd': 'qd', '1h': '1h', '8d': '8d', '3s': '3s', '2h': '2h'],
        }
            
    }
    componentDidMount(){
        setInterval(()=>this.removeOne(), 4000)
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
            <div style={{'bottom': this.cardSize * 1.5 + 'px', 'right':'50%', 'position':'absolute'}}>
                <Hand hide={false} fan={true} cards={this.state.cards} cardSize={this.cardSize} />
            </div>
            <div style={{'top': 'calc(50% - ' + this.cardSize + 'px)', 'left':this.cardSize * .5, 'position':'absolute'}}>
                <Hand rotate={90} fan={true} hide={false} cards={this.state.cards} cardSize={this.cardSize}/>
            </div>
            <div style={{'right':'50%', 'top': -this.cardSize * .5, 'position':'absolute'}}>
                <Hand rotate={180} fan={true} hide={false} cards={this.state.cards} cardSize={this.cardSize}/>
            </div>
            <div style={{'right':this.cardSize * .5 + 'px', 'top':'calc(50% - ' + this.cardSize + 'px)', 'position':'absolute'}}>
                <Hand rotate={270} hide={false} fan={true} cards={this.state.cards} cardSize={this.cardSize}/>
            </div>
          </div>
        );
    }
}
export default Table;
