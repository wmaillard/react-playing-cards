import React, { Component} from 'react';
import './PlayingCard.css';
import PlayingCards from './PlayingCards';


class PlayingCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      flipped : props.flipped,
      card : props.card,
      height : props.height
    }
    console.log(props.onClick)
  }
  render() {
    return (
      <div>
        <img 
          height={this.state.height} 
          className='Playing-card' 
          src={this.state.flipped === 'true' ? PlayingCards.flipped : PlayingCards[this.state.card]} 
          alt={this.state.flipped === 'true' ? 'Hidden Card' : PlayingCards[this.state.card]}
          onClick={()=> {
            this.setState({flipped:this.state.flipped === 'true' ? 'false' : 'true',
              height: this.state.height,
              card: this.state.card});
          }}
        />
      </div>

      
    );
  }
}

export default PlayingCard;
