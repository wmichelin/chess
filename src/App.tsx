import React, { Component } from 'react';
import { CHESS_TYPE } from "./models/Game";
import './App.css';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-spacer flex-spacer--start" />
        <div className="board-container">
          <Board gameType={ CHESS_TYPE }/>
        </div>
        <div className="flex-spacer flex-spacer--end" />
      </div>
    );
  }
}

export default App;
