import React, { Component} from 'react';
import './PlayingCard.css';
import PlayingCardsList from './PlayingCardsList';


class PlayingCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      flipped : props.flipped,
      card : props.card,
      height : props.height
    }

  }
  render() {
    return (

        <img
          style={this.props.style}
          height={this.state.height} 
          className='Playing-card' 
          src={this.state.flipped === true ? PlayingCardsList.flipped : PlayingCardsList[this.state.card]} 
          alt={this.state.flipped === true ? 'Hidden Card' : PlayingCardsList[this.state.card]}
          onClick={()=> {
            this.setState({flipped:this.state.flipped === true ? false : true,
              height: this.state.height,
              card: this.state.card});
          }}
        />
    );
  }
}

export default PlayingCard;
