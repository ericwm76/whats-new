import React from 'react';
import './Menu.css'

class Menu extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <h2>Local</h2>
        <h2>Entertainment</h2>
        <h2>Health</h2>
        <h2>Science</h2>
        <h2>Technology</h2>
      </section>
    )
  }
}

export default Menu;