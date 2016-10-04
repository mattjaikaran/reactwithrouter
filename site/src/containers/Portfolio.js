import React from 'react';

class Portfolio extends React.Component {
  render() {
    return <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolioWeb">
        <h3>Web:</h3>
        <p><a href='http://mattjaikaran.com'>mattjaikaran.com</a></p>
        <p>Thing 1</p>
        <p>Thing 2</p>
        <p>Thing 3</p>

      </div>
    </div>
  }
}

module.exports = Portfolio;
