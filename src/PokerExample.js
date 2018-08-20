import React, { Component } from 'react';
//import {createStore } from 'redux';

import './SolitaireExample.css';
import GinRummy from "./PlayingCard/GinRummy";
import Board from "./PlayingCard/Board";
import Hand from "./PlayingCard/Hand/Hand";
import Poker from "./PlayingCard/Poker";

/*
This video series is awesome:
https://www.youtube.com/watch?v=nrg7zhgJd4w

make reducers for most actions?
const reducer = function(state, action) {
  return state;
}
const store = createStore(reducer, {
  table: {
    hand1: 

  }
})
make a bunch of reducers.  then use combineReducers. then store.subscribe


don't use state any more with redux
  use redux logger!
  use axios for ajax! no more jquery!
  thunk for single areguments dispatch
  promises:return promises as payload ->does cool things like takes care of err, next, etc


  create one store and export from store.js file
  make big old reducer with lots of switch

  going to wrap the app in <Provider store={store}></
  
  //I think this ^^^ gives access to store to all nested components
  //Also this.props.dispatch(~~imported action goes here ~~)
  do @connect(a,b) wich will wrap your component and take care of props
  @connect((store)=>){
    return {
      user: store.user
      tweets: store.tweets.tweets
    }
  }
  then in compent : this.props.user

*/

/*can use middleware for error handlers:
  const error = (store) => (next) => (action) => {
    try{
      next(action);
    }catch(e){
      console.log(e);
    }
  }


Takeaway:
  store is injected into components from @connect
  actions are called using this.props.dispatch
  this is allowed through <Provider>


  maybe just use @connect on overarching components like hands that are not too deep not too shallow
  pass down actions too to dumb components.

*/



class PokerExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      flipped : 'false'
    }

  }

  render() {


      return (
        <Poker cardSize={Math.min(window.innerHeight / 5.5, window.innerWidth / 5.5, 80)} style={{'height':window.innerHeight+'px'}}/>
      )
  }
}

export default PokerExample;
