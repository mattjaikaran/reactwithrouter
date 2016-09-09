import React, { Component } from 'react';
import Header from './containers/Header';
import Nav from './containers/Nav';
import Footer from './containers/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
