import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  
  return (
    <article>
      <h3>{props.headline}</h3>
      <img src={props.img} alt=""/>
      <p>{props.description}</p>
      <a href={props.url} target="_blank" rel="noopener noreferrer">Link to Article</a>
      <button onClick="">X</button>
    </article>
  )
}

export default NewsArticle;