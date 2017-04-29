import React, { Component} from 'react';
import './Board.css';
import Hand from './Hand/Hand';



class Board extends Component {
  constructor(props){
    super(props);

    this.state = {
        hands : props.hands,
        cardSize : props.cardSize,
        cardWidth:  225 / 314 * props.cardSize,
        width: this.props.width ? this.props.width : 100,

    }
    


  }


  render() {
    return (
      <div className="Board" style={{'width': this.state.width + '%'}}>
      {
        this.state.hands.map((hand) => {
          return (
            <div className="BoardHandWrapper">
                <Hand hide={false} stack={true} cards={hand} cardSize={this.state.cardSize}/>
            </div>
          )
      })
    }
      </div>
    );
  }
}


export default Board;
