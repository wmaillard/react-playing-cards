import React, { Component} from 'react';
import './Hand.css';
import PlayingCard from './PlayingCard/PlayingCard';
import ReactDOM from 'react-dom';

class Hand extends Component {
    constructor(props) {
            super(props);
            console.assert(Array.isArray(this.props.cards), 'Hands must have cards, even as an empty array');
            this.cardStyles = [];

            this.state = {
              cards : this.props.cards,
              cardSize : this.props.cardSize,
              elevated : this.props.elevated,
              layout: this.props.layout,
            };
            this.deadCards = {};
            this.handLength = this.props.cards.length;
            //setup for fanning

    }
    componentWillReceiveProps(props) {
        console.log('got some props: ', props)

        this.setState({
            cards : props.cards,
            cardSize : props.cardSize,
            elevated : props.elevated,
            layout: props.layout
        })
        this.handLength = props.cards.length;

    }
    elevateOne(card){

    }
    resetStack(){
        this.over = 50;
    }
    resetSpread(){
        this.initialOver = 110 * (this.handLength - 1);
        this.over = this.initialOver / 2;

    }
    resetFanning(){
        this.curl = Math.pow(this.handLength, 1.30) * 10; //curl of cards in hand
        this.deg = this.props.cards.length > 1 ? -this.handLength * 15 : 0;
        this.degs = this.deg / 2;
        this.initialDown = this.handLength * 7;
        this.down = this.initialDown / 2;
        this.initialOver = this.curl;
        this.over = this.initialOver / 2;
    }

    spreadStyle(num){

        if(num > 0){
            this.over -= this.initialOver / (this.handLength - 1);
        }
        return {
            'zIndex' : num,
            'transform' : `translateX(${(-50 + this.over * -1)}%)`
        }
    }
    fanStyle(num) {
        console.log("handlenght", this.handLength);
        console.log("num", num)
        let overHalf = num > (this.handLength - 1) / 2;
        if (false && process.env.NODE_ENV !== "production") {
            console.log('degs', this.degs);
            console.log('over', this.over);
            console.log('down', (this.overHalf ? -this.down : this.down));
            console.log('num: ', num)
        }
        if (num > 0) {
            this.degs -= this.deg / (this.handLength - 1);
            this.down -= this.initialDown / (this.handLength - 1);
            this.over -= this.initialOver / (this.handLength - 1);
        }
        return {
            'zIndex' : num,
            'transform': `translateY(${(overHalf ? -this.down : this.down)}%) 
            translateX(${(-50 + this.over * -1)}%) 
            rotate(${this.degs}deg)` }
    }
    stackStyle(num){
        if(num > 0){
            this.over -= 20 / this.handLength
        }
        return {
            'zIndex' : num,
            'transform' : `translateX(${(this.over * -1)}%)`
        }
    }
    isCardDead(id) {
        console.log('card is dead: ', this.deadCards[id] ? this.deadCards[id].dead : false)
        return this.deadCards[id] ? this.deadCards[id].dead : false;
    }
    removeCard(id, style) {
        if(!this.isCardDead(id)) {
            this.deadCards[id] = {
                dead : true,
                style : style //should it keep track of its own style?
            };
            console.log(this.deadCards);
            if(this.handLength) {
                this.handLength--;
            }
            this.setState(this.state);
            // let cards = this.state.cards;
            // cards.splice(cards.indexOf(id), 1);
            // this.setState({
            //     cards : cards,
            //     cardSize : this.state.cardSize,
            //     elevated : this.state.elevated,
            //     layout: this.state.layout
            // })
        }


    }
    onClick(key) {
        //this.props.onClick({card: key, hand : this.props.handId});
    }
    onDragStop(key) {
        console.log(this);
        // console.log('style: ', )
        console.log('reviving: ', key);

        // this.refs[key].state.draggableDivStyle = {"transitionDuration": "0.25s"}
        let cardToSpliceInto = this.state.cards[this.indexToInsertInto(key) + 1];
        this.refs[key].state.position = {x : this.refs[key].getBindingClientRect().x, y : this.refs[key].getBindingClientRect().y}
        console.log('card to splice into: ', cardToSpliceInto);
        this.state.cards.splice(this.state.cards.indexOf(key), 1);
        this.state.cards.splice(this.indexToInsertInto(key), 0, key);

        if(this.deadCards[key]) {
            this.deadCards[key].dead = false;
            this.handLength++;
            this.setState(this.state);
        }

    }
    onDrag(key) {
        // console.log("draggin: ");
        // // add a dup card into the hand?
        // let newIndexToSpliceInto = this.state.cards[this.indexToInsertInto(key) + 1]
        // if(this.previousIndexToSpliceInto !== newIndexToSpliceInto) {
        //     this.previousIndexToSpliceInto = newIndexToSpliceInto
        //     this.state.cards.splice(this.previousIndexToSpliceInto, 1);
        //     this.state.cards.splice(this.previousIndexToSpliceInto, 0, key);
        //     this.setState(this.state);
        // }


    }
    onDragStart(key) {
        this.removeCard(key, this.refs[key].state.style);
    }
    indexToInsertInto(key) {
        let indexToInsertInto = 0;
        let xPositionOfKey = this.refs[key].getBindingClientRect().x;
        for(let i = 0; i < this.state.cards.length; i++) {
            if(this.state.cards[i] === key) {
                continue;
            }
            console.log('xCard ', this.state.cards[i], ' : ', this.refs[key].getBindingClientRect().x)
            if(xPositionOfKey < this.refs[this.state.cards[i]].getBindingClientRect().x) {
                return indexToInsertInto;
            } else {
                indexToInsertInto++;
            }
        }
        return indexToInsertInto;
    }
    // getXPositionOfRef(ref, displacementX) {
    //     if(!displacementX) {
    //         displacementX = 0;
    //     }
    //     // console.log('ref in question ', ref)
    //     // console.log('refs: ')
    //     // console.log('full position: ', ReactDOM.findDOMNode(this.refs[ref]).getBoundingClientRect());
    //     console.log('style: ',  this.refs[ref].state.style);
    //     // let style = this.refs[ref].state.style;
    //     // let transformString = style.transform;
    //     // let transformXSearchString = 'transformX('
    //     // let transformXIndex = transformString.indexOf(transformXSearchString) + transformXSearchString.length;
    //     // function findEndBracket(start, string) {
    //     //     for(var i = start; i < string.length; i++) {
    //     //        if(string[i] == '%') {
    //     //            return i;
    //     //        }
    //     //     }
    //     // }
    //     // let transformX = transformString.substring(transformXIndex + 1, findEndBracket(transformXIndex, transformString));
    //     // console.log('***** transform: ', transformX);
    //     // console.log('card ', ref, ': transform: ', transformX)
    //     // if(false && transformX !== 'Infinity') {
    //     //     console.log('in here');
    //     //     //add the transform from draggable
    //     //     return ReactDOM.findDOMNode(this.refs[ref]).getBoundingClientRect().x +
    //     //         ReactDOM.findDOMNode(this.refs[ref]).getBoundingClientRect().width * transformX / 100 - displacementX;
    //     // } else {
    //         return ;
    //     // }
    // }
    render() {
        let index = 0;
console.log('state: ', this.state);
        if(this.state.layout === 'fan'){
            console.log('reseting fanning');
            this.resetFanning();
            this.styleType = this.fanStyle;
        }
        else if(this.state.layout === 'spread'){
            this.resetSpread();
            this.styleType = this.spreadStyle;
        }else if(this.state.layout === 'stack'){
            this.resetStack();
            this.styleType = this.stackStyle;
        }

        return (
        <div className={'Hand'}
          style={{ 'height': this.state.layout === 'stack' ? this.state.cardSize : this.state.cardSize * 2}} >
          {
              this.state.cards.map((card) => {
                  console.log('id: ', card);
                  console.log('refs', this.refs);
                  return (
                      <PlayingCard
                          onDragStart={this.onDragStart.bind(this)}
                          onDragStop={this.onDragStop.bind(this)}
                          onDrag={this.onDrag.bind(this)}
                          removeCard={this.removeCard.bind(this)}
                          ref={card}
                          height={ this.state.cardSize }
                          card={ card }
                          style={this.isCardDead(card) ? this.deadCards[card].style : this.styleType(index++)} //just give it the current index, PlayingCard.js will fix that
                          flipped={ this.props.hide }
                          elevateOnClick={50}
                          onClick={this.onClick.bind(this)}
                          zIndex = {index}

                      />
                  )
              })
          }
          </div>
        )
    }
}
export default Hand;