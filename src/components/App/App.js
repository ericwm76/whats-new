import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local, entertainment, health, science, technology
    }
  }

  render () {
    return (
      <div className="app">
        <header>
          <h1>What's New?</h1>
        </header>
        <Menu />
        <NewsContainer 
          local={this.state.local} 
          entertainment={this.state.entertainment} 
          health={this.state.health} 
          science={this.state.science} 
          technology={this.state.technology}
        />
      </div>
    );
  }
}

export default App;