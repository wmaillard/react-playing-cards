import React, { Component } from 'react';
import PlayingCardsList from "./PlayingCard/Hand/PlayingCard/PlayingCardsList";
import Dropdown from 'react-dropdown'
import './TableExample.css';
import Hand from "./PlayingCard/Hand/Hand";



class HandExample extends Component {
    constructor(){
    super();
this.state = {hand: ["1d", "1c", "1s", "1h"],
layout: "stack",
handSize: "4"}

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

  render() {
    const handStyle = {
        margin: "auto",
      width: "10%",
        paddingBottom: "10"
};
    return (
        <div>
        <div style={handStyle}>
            <Hand hide={false} layout={this.state.layout} cards={this.state.hand} cardSize={100}/>
        </div>
          Select a Layout:
          <Dropdown
              options={["fan", "stack", "spread"]}
              onChange={this._onSelectLayout}
              value={this.state.layout}
              placeholder="Select an option"
          />
            Number of Cards:
            <Dropdown
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                onChange={this._onSelectHandSize}
                value={this.state.handSize}
                placeholder="Select an option"
            />
        </div>
    );
  }
}

export default HandExample;
