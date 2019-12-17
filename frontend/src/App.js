import './App.css';
import React, {Component} from 'react';
import Container from "./components/Container";

class App extends Component{

  state ={
    animals: [
      {name: "Snake", description: "Sssssnake"},
      {name: "Turtle", description: "Ttttttturtle"}
    ]
  }

  componentDidMount(){

  }

  render(){
    return (
      <div className="App">
        <Container animals={this.state.animals}/>
      </div>
    );
  }
}

export default App;
