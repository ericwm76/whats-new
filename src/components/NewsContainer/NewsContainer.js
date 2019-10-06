import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({ current }) => {
  return (
    current.map(article => {
      return (
        <NewsArticle
          headline={article.headline} 
          img={article.img} 
          description={article.description}
          url={article.url}
          id={article.id}
          key={article.id}
        />
      )
    })
  )
}

export default NewsContainer;