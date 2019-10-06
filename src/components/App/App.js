import React, { Component } from 'react';
import './App.css';
import local from '../../data/local';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
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

  searchNews = (term) => {
    const articles = [...local, ...science, ...technology, ...health, ...entertainment];
    this.setState({ current: (articles.filter(article => article.headline.toLocaleLowerCase().includes(term) || article.description.toLocaleLowerCase().includes(term)))})
  }

  render () {
    return (
      <div className="app">
        <h1 className="page-title">What's New?</h1>
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