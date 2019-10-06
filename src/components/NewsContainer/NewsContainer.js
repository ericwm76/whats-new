import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({ current }) => {
  return (
    current.map((article, i) => {
      return (
        <NewsArticle
          headline={article.headline} 
          img={article.img} 
          description={article.description}
          url={article.url}
          id={article.id}
          key={i}
        />
      )
    })
  )
}

export default NewsContainer;