import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.local = local;
    this.science = science;
    this.technology = technology;
    this.health = health;
    this.entertainment = entertainment;
    this.state = {
      current: local
    }
  }

  changeSelectedNews = (e) => {
    this.setState({ current: this[e.target.name]})
  }

  searchNews = () => {

  }

  render () {
    return (
      <div className="app">
        <header>
          <h1>What's New?</h1>
        </header>
        <SearchForm searchNews={this.searchNews}/>
        <Menu changeSelectedNews={this.changeSelectedNews}/>
        <NewsContainer 
          current={this.state.current}
        />
      </div>
    );
  }
}

export default App;