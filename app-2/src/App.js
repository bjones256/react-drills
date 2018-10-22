import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      array : [
        "Brian",
        "Douglas",
        "Jones"
      ]
    }
  }
  
  render() {
    let array = this.state.array
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        <ul>
          {array.map(array => <h2>{array}</h2>)}
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
