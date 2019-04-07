import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board rows={ 10 } columns={ 10 } />
      </div>
    );
  }
}

export default App;
