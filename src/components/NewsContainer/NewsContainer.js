import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({ current }) => {
  const articles = current.map((article, i) => {
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
  return (
    <div className="main">
      {articles}
    </div>
  )  
}

export default NewsContainer;