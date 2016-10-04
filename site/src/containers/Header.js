import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return <div className="App-header">
      <h1>Matt Jaikaran</h1>
      <h3>Yup</h3>
        <div className="navBar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
      </div>
  </div>
  }
}

module.exports = Header;
