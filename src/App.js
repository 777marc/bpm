import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import AddItem from './components/AddItem';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />  
        <AddItem />
      </div>
    );
  }
}

export default App;
 