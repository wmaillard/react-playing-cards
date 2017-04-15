import React, { Component } from 'react';
import logo from './logo.svg';
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

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Table/>
      </div>
    );
  }
}

export default App;
