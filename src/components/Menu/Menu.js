import React from 'react';
import './Menu.css'

const Menu = ({ changeSelectedNews }) => {
  return (
    <section>
      <button name="local" onClick={ e => changeSelectedNews(e) }>Local</button>
      <button name="science" onClick={ e => changeSelectedNews(e) }>Science</button>
      <button name="technology" onClick={ e => changeSelectedNews(e) }>Technology</button>
      <button name="health" onClick={ e => changeSelectedNews(e) }>Health</button>
      <button name="entertainment" onClick={ e => changeSelectedNews(e) }>Entertainment</button>
    </section>
  )
} 


export default Menu;