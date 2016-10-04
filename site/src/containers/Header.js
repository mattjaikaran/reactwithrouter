import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  render() {
    return (
      <div className="header">
        <div className="App-header">
          <h1>Matt Jaikaran</h1>
          <h3>Yup</h3>
        </div>
        <div className="navBar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    );
  }
});

export default Header;
