import React, { Component } from 'react';
import PlayingCard from './PlayingCard';
import './Table/Table.css';
import './Hand/Hand.css'

class Hand extends Component {
  //Add prop for fan
  //add prop for overlap
  render() {
  	const curl = Math.pow(this.props.cards.length, 1.53) * 20; //curl of cards in hand
    let num = 0;
    let deg = this.props.cards.length > 1 ? -this.props.cards.length * 15 : 0;
    let degs = deg / 2;
    let initialDown = this.props.cards.length * 10;
    let down = initialDown / 2;
    let initialOver = curl;
    let over = initialOver / 2;
    return(
      <div className='Hand' >
      {
          //0 to be -1, length to be 1 
          this.props.cards.map((card)=>{
            let overHalf = num > (this.props.cards.length - 1) / 2;
            if(num > 0){
              degs -= deg / (this.props.cards.length - 1);
              down -= initialDown / (this.props.cards.length - 1);
              over -= initialOver / (this.props.cards.length - 1);
            } 
            num++;
            let actualDown = overHalf ? -down : down;
            console.log('degs',degs);
            console.log('over', over);
            console.log('down', actualDown)
            return (
            <div style={{'transform': 'translateY(' + actualDown + '%) translateX(' + over + '%) rotate(' + degs + 'deg)' +
            ''}}>
              <PlayingCard className='Player-card' height={this.props.cardSize} card={card} />
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
      cards1 : ['7d': '7d', '3s': '3s', '2h':'2h'],
      cards2 : ['kd': 'kd', 'qs': 'qs', '1h':'1h', '7d': '7d', '3s': '3s', 'kd': 'kd', 'qs': 'qs', '1h':'1h', '7d': '7d', '3s': '3s', '2h':'2h'],
      cards3 : ['kd': 'kd', 'qs': 'qs', '1h':'1h', '7d': '7d'],
      cards4 : ['kd': 'kd'],
      cards5 : ['kd' : 'kd', 'kd' : 'kd']

    
    }
    //const inlineStyle = 
    return (
      <div>
      <Hand cards={this.state.cards1} cardSize={50}/>
      <Hand cards={this.state.cards2} cardSize={100}/>
      <Hand cards={this.state.cards3} cardSize={110}/>
      <Hand cards={this.state.cards4} cardSize={250}/>
      <Hand cards={this.state.cards5} cardSize={500}/>

      </div>
      
    );
  }
}

export default Table;
