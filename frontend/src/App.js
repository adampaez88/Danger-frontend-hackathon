import './App.css';
import React, {Component} from 'react';
import Container from "./components/Container";

class App extends Component{

  state ={
    animals: [
      {name: "Snake", description: "Sssssnake", picture: 'snake.jpg'},
      {name: "Turtle", description: "Ttttttturtle", picture: 'pic'}
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
