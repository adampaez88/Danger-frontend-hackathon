import './App.css';
import React, {Component} from 'react';
import Container from "./components/Container";

class App extends Component{

  state ={
    animals: []
  }

  componentDidMount(){
    fetch("http://[::1]:3000/animals")
      .then(response => response.json())
      .then(animals => this.setState({
          animals: animals
    }))
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
