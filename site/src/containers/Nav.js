import React from 'react';
import { Link } from 'react-router';

const Nav = React.createClass({
  render() {
    return (
        <div className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
      </div>
    );
  }
});

export default Nav;
