import React from 'react';
import './Menu.css'

const Menu = ({ changeSelectedNews }) => {
  return (
    <section className="menu">
      <button className="menu-btn" name="local" onClick={ e => changeSelectedNews(e) }>Local</button>
      <button className="menu-btn" name="science" onClick={ e => changeSelectedNews(e) }>Science</button>
      <button className="menu-btn" name="technology" onClick={ e => changeSelectedNews(e) }>Technology</button>
      <button className="menu-btn" name="health" onClick={ e => changeSelectedNews(e) }>Health</button>
      <button className="menu-btn" name="entertainment" onClick={ e => changeSelectedNews(e) }>Entertainment</button>
    </section>
  )
} 


export default Menu;