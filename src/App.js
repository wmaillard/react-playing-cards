import React, { Component } from 'react';

import './App.css';
import Table from './PlayingCard/Table'
//look at this for animating cards: https://facebook.github.io/react/docs/animation.html
class App extends Component {
  constructor(){
    super();
    this.state = {
      flipped : 'false'
    }

  }

  render() {


    return (


        <Table cardSize={window.innerHeight / 6} style={{'height':window.innerHeight+'px'}}/>

    );
  }
}

export default App;
