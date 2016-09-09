import React from 'react';

const Contact = React.createClass({
  render() {
    return (
      <div className="contactMe">
        <h2>Contact</h2>
          <div className="socialIcons">
            <a href="http://github.com/mattjaikaran"><img src={require('../pics/github.png')} /></a>
            <a href="http://instagram.com/mattjaikaran"><img src={require('../pics/instagram.png')} /></a>
          </div>
        <div className="portfolioContent">
          <div className="nameEmail">
            Name: <br />
            <input
            type="text" placeholder="Name" /><br />
            Email: <br />
            <input
              type="text" placeholder="Email" /><br />
          </div>
        <div className="messageDetails">
          Message: <br />
        <div className="message">
            <input
              type="text" placeholder="Message" /><br />
          </div>
          <button>Send Message</button>
        </div>
        </div>
      </div>
    );
  }
});

export default Contact;
