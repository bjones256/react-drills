import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      text:''
    }
  }
  updateText(e){
this.setState({
  text : e
})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        <input value={this.state.text} onChange={(e) => this.updateText(e.target.value)}/>
        </p>
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

export default App;
