import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  return (
    <form>
      <input type="text" placeholder="Search"/>
      <button type="button">Search</button>
    </form>
  )
} 

export default SearchForm;