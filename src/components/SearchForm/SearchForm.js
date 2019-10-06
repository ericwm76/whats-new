import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  }

  handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    const searchTerm = this.state.searchInput.toLocaleLowerCase();
    this.props.searchNews(searchTerm);
    this.setState({ searchInput: ''});
  }

  render() {
    return (
      <header>
        <input 
          type="text" 
          name="search" 
          value={this.state.searchInput} 
          placeholder="Search by title or description" 
          onChange={this.handleChange}
          onKeyDown={this.handleEnterKey} 
        />
        <button 
          type="button"
          onClick={this.handleSubmit}
          >
          Search
        </button>
      </header>
    )
  }
}

export default SearchForm;