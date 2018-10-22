import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            userName : '',
            passWord: '',
        }
    }
    updateUser(val){
        this.setState({
            userName:val
        })
    }
    updatePW(val){
        this.setState({
            passWord:val
        })
    }
    handleClick(){
        alert(`Username: ${this.state.userName} Password: ${this.state.passWord}`)
    }
   
    render() {
      return (
        <div>
        <input onChange={(e) => this.updateUser(e.target.value)}/>
        <input onChange={(e) => this.updatePW(e.target.value)}/>
        <button onClick={()=>this.handleClick()}>Click me</button>
        </div>
      );
    }
  }


export default Login