import React, { Component } from 'react';
import PlayingCard from './PlayingCard';
import './Table/Table.css';
import './Hand/Hand.css'

class Hand extends Component {
  //Add prop for fan
  //add prop for overlap
  render() {
    let num = 0;
    let deg = -this.props.cards.length * 15;
    let degs = deg / 2;
    let initialDown = this.props.cards.length * 10;
    let down = initialDown / 2;
    let initialOver = this.props.cards.length * 50;
    let over = initialOver / 2;
    return(
      <div className='Hand' >
      {
          //0 to be -1, length to be 1 
          this.props.cards.map((card)=>{
            let overHalf = num >= (this.props.cards.length - 1) / 2;
            if(num > 0){
              degs -= deg / (this.props.cards.length - 1);
              down -= initialDown / (this.props.cards.length - 1);
              over -= initialOver / (this.props.cards.length - 1);
            } 
            num++;
            let actualDown = overHalf ? -down : down;
            return (
            <div style={{'transform': 'translateY(' + actualDown + '%) translateX(' + over + '%) rotate(' + degs + 'deg) '
                          }}>
              <PlayingCard className='Player-card' height={200} card={card} />
              </div>
            )
            
          })
      }
      </div>
      )
  }
}



class Table extends Component {
  render() {
    this.state = {
      cards1 : ['kd': 'kd', 'qs': 'qs', '1h':'1h', '7d': '7d', '3s': '3s', '2h':'2h'],
      cards2 : ['7d': '7d', '3s': '3s', '2h':'2h']
    }
    //const inlineStyle = 
    return (
      <div>
      <Hand cards={this.state.cards1}/>
      <Hand cards={this.state.cards2}/>
      </div>
      
    );
  }
}

export default Table;
