import React, { Component} from 'react';
import './Hand.css';
import PlayingCard from './PlayingCard/PlayingCard';

class Hand extends Component {
    constructor(props) {
            super(props);
            console.assert(Array.isArray(this.props.cards), 'Hands must have cards, even as an empty array');  
            //setup for fanning
            if(this.props.fan) this.resetFanning();


        }
    resetFanning(){
        this.curl = Math.pow(this.props.cards.length, 1.30) * 10; //curl of cards in hand
        this.deg = this.props.cards.length > 1 ? -this.props.cards.length * 15 : 0;
        this.degs = this.deg / 2;
        this.initialDown = this.props.cards.length * 7;
        this.down = this.initialDown / 2;
        this.initialOver = this.curl;
        this.over = this.initialOver / 2;
    }
    componentWillUpdate(){
        if (this.props.fan) {
          this.resetFanning();
        }
    }

    fanStyle(num) {
        let overHalf = num > (this.props.cards.length - 1) / 2;
        if (process.env.NODE_ENV !== "production") {
            console.log('degs', this.degs);
            console.log('over', this.over);
            console.log('down', (this.overHalf ? -this.down : this.down));
            console.log('num: ', num)
        }
        if (num > 0) {
            this.degs -= this.deg / (this.props.cards.length - 1);
            this.down -= this.initialDown / (this.props.cards.length - 1);
            this.over -= this.initialOver / (this.props.cards.length - 1);
        }
        return { 'transform': `translateY(${(overHalf ? -this.down : this.down)}%) 
            translateX(${(-50 + this.over * -1)}%) 
            rotate(${this.degs}deg)` }
    }
    render() {
        let num = -1;
        return (
        <div className={'Hand'}
          style={{ 'height': this.props.cardSize * 2, 
          'transform':'rotate(' + this.props.rotate + 'deg)'}} > 
          {
              this.props.cards.map((card) => {
                  num++;
                  return (
                      <PlayingCard 
                      key={ card }
                      height={ this.props.cardSize }
                      card={ card }
                      style={ this.fanStyle(num)}
                      flipped={ this.props.hide }
                      />
                  )
              })
          }
          </div>
        )
    }
}
export default Hand;