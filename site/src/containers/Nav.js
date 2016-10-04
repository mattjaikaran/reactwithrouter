import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  render() {
    return
        <div className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
      </div>
  }
}

module.exports = Nav;
