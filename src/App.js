import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import ItemList from './components/ItemList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />  
        <ItemList />
      </div>
    );
  }
}

export default App;
 