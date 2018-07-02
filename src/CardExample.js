import React, { Component } from 'react';
//import {createStore } from 'redux';
import PlayingCardsList from "./PlayingCard/Hand/PlayingCard/PlayingCardsList";
import Dropdown from 'react-dropdown'
import PlayingCard from "./PlayingCard/Hand/PlayingCard/PlayingCard";



class CardExample extends Component {
    constructor(){
    super();
this.state = {card: "1h"}

  }

    _onSelect = (option) => {
        console.log('You selected ', option);
        this.setState({card: option.value}, function(){
        });
    };

  render() {


    return (
        <div>
        <div>
          <PlayingCard
              key={ "example" }
              height={ 100 }
              card={ this.state.card }
              flipped={ false }
              elevateOnClick={true}
          /></div>
          Select a Card:
          <Dropdown
              options={Object.keys(PlayingCardsList)}
              onChange={this._onSelect}
              value={this.state.card}
              placeholder="Select an option"
          />
        </div>
    );
  }
}

export default CardExample;
