import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      array:[ 'Lorem',
      'ipsum',
      'dolor',
      'amet',
      'put',
      'a',
      'bird',
      'on',
      'it',
      'post-ironic',
      'lumbersexual',
      'cardigan,',
      'celiac',
      'vaporware',
      'try-hard',
      'kitsch.',
      'Echo',
      'park',
      'etsy',
      'pour-over',
      'vape.',
      'Taxidermy',
      'street',
      'art',
      'small',
      'batch,',
      'DIY',
      'letterpress',
      'franzen',
      'marfa',
      'disrupt',
      'wayfarers',
      'flannel',
      'try-hard.',
      'Quinoa',
      'mixtape',
      'disrupt',
      'keffiyeh',
      'poke',
      'gentrify',
      'plaid',
      'heirloom',
      'XOXO',
      'skateboard',
      'tote',
      'bag',
      'raclette',
      'next',
      'level.',
      'Locavore',
      'coloring',
      'book',
      'beard',
      'man',
      'braid,',
      'church-key',
      'lo-fi',
      'snackwave',
      'kickstarter.',
      'Helvetica',
      'shaman',
      'brunch',
      'mustache',
      'wolf',
      'fixie.' ],
      userInput:'',

    }
  }
  updateUserInput(val){
    this.setState({
      userInput: val
    })
  }

  render() {
let array = this.state.array.filter(elem => {
return elem.startsWith(this.state.userInput)}).map((elem,i) => {
  return <h2 key={i}>{elem}</h2>
})

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      <input onChange={(e) => this.updateUserInput(e.target.value)}/>
        {array}
      </div>
    );
  }
}

export default App;