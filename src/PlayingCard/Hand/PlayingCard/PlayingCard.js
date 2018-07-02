import React, { Component} from 'react';
import './PlayingCard.css';
import PlayingCardsList from './PlayingCardsList';


class PlayingCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      flipped : props.flipped || props.card === 'hide',
      card : props.card,
      height : props.height,
      flippable : props.flippable,
      elevated : props.elevated,
      style : this.props.style
    }

  }
  componentWillReceiveProps(props) {
    this.setState({
        flipped : props.flipped,
        card : props.card,
        height : props.height,
        flippable : props.flippable,
        elevated : props.elevated,
        style : props.style
    })
  }
  elevate(percent){
      console.log(this.state);
    if(this.state.elevated) percent = -percent;
    let style = this.state.style;
    let translateY = style.transform.match(/translateY\((.*?)\)/); //pull out translateY
    if(translateY){
      let newTranslateY = Number(translateY[1].slice(0, -1)) - percent; //add 50%
      style.transform = style.transform.replace(/translateY(.*)/, `translateY(${newTranslateY}%)`)
    }else{
      style.transform += `\ntranslateY(${-percent}%)`
    }
    this.setState({style : style,
                    elevated : !this.state.elevated})
  }
    onClick(){
        this.props.onClick(this.props.card);
    }
  render() {

      return (

        <img
          style={this.state.style}
          height={this.state.height} 
          className='Playing-card' 
          src={this.state.flipped === true ? PlayingCardsList.flipped : PlayingCardsList[this.state.card]} 
          alt={this.state.flipped === true ? 'Hidden Card' : PlayingCardsList[this.state.card]}
          // onClick={this.props.elevateOnClick ? () => this.elevate(this.props.elevateOnClick) : null}
          onClick={this.onClick.bind(this)}
        />
    );
  }
}
/*this.state.flippable ? ()=> {
            this.setState({flipped:this.state.flipped === true ? false : true,
              height: this.state.height,
              card: this.state.card});
          } : null*/

export default PlayingCard;
