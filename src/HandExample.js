import React, { Component } from 'react';
import PlayingCardsList from "./PlayingCard/Hand/PlayingCard/PlayingCardsList";
import Dropdown from 'react-dropdown'
import Hand from "./PlayingCard/Hand/Hand";



class HandExample extends Component {
    constructor(){
    super();
this.state = {hand: ["1d", "1c", "1s", "1h"],
layout: "stack",
handSize: "4" }

  }
    randomHand = (size) => {
        console.log('size: ', size)
        var cardList = Object.keys(PlayingCardsList);
        var hand = [];
        var used = {};
        for(var i = 0; i < size; i++) {
            var card = Math.floor(Math.random()*Object.keys(PlayingCardsList).length);
            console.log("card: ", card);
            while(used[card]) {
                card = Math.floor(Math.random()*Object.keys(PlayingCardsList).length);
            }
            used[card] =  true;
            hand.push(cardList[card]);
        }
        console.log("hand: ", hand)
        return hand;
    };
    _onSelectLayout = (option) => {
        console.log('You selected ', option);
        this.setState({layout: option.value}, function(){

        });
    };
    _onSelectHandSize = (option) => {
        console.log('You selected ', option);
        var hand = this.randomHand(option.value);

        this.setState({hand : hand, handSize : option}, function(){

        });
    };
    _getCardSize() {
        console.log("window: ", window.innerWidth);
        console.log('handsize', this.state.hand.length)
        console.log("size: ", window.innerWidth / this.state.hand.length)
        let cardSize = window.innerWidth / this.state.hand.length;
        return this.state.layout !== "spread" || cardSize > 100 ? 100 : cardSize;
    }

  render() {
    const handStyle = {
        margin: "auto",
        width: "10%",
        paddingBottom: "5%",
        paddingTop: "5%",
        left: "45%",
        top: "50%"
    };
      return (
          <div>
              <div style={{"width": "30%", "paddingLeft":"32%"}}>
                  Select a Layout:
                  <Dropdown
                      options={["fan", "stack", "spread"]}
                      onChange={this._onSelectLayout}
                      value={this.state.layout}
                      placeholder="Select an option"
                  />
              </div>
              <div style={{"width": "30%", "paddingLeft":"32%", "paddingTop":"2%"}}>
                  Number of Cards:
                  <Dropdown
                      style={{"left": "45%"}}
                      options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                      onChange={this._onSelectHandSize}
                      value={this.state.handSize}
                      placeholder="Select an option"
                  />
              </div>
              <div style={handStyle}>
                  <Hand hide={false} layout={this.state.layout} cards={this.state.hand} cardSize={this._getCardSize()}/>
              </div>
          </div>
      );
  }
}

export default HandExample;
