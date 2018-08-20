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
        style: this.props.style ? this.props.style : {'width': this.state.width + '%'}

    }
  }
    onClick(key){
        this.props.onClick(key);
    }
    componentWillReceiveProps(props) {
        console.log('got board some props: ', props)

        this.setState({
            hands : props.hands,
            cardSize : props.cardSize,
            cardWidth:  225 / 314 * props.cardSize,
            width: props.width ? props.width : 100,
            style: props.style ? props.style : {'width': this.state.width + '%'}
        })

    }


  render() {
      console.log("hands: ", this.props.hands)

      return (
      <div className="Board" style={this.state.style}>
      {
        this.state.hands.map((hand) => {
          return (
            <div className="BoardHandWrapper">
                <Hand handId={hand.handId} onClick={this.onClick.bind(this)} hide={hand.hide} layout={hand.layout} cards={hand.hand} cardSize={this.state.cardSize}/>
            </div>
          )
      })
    }
      </div>
    );
  }
}


export default Board;
