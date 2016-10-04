import React, { Component } from 'react';
import Header from './containers/Header';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return <MuiThemeProvider>
        <div className="App">
          <Header />
          {this.props.children}
        </div>
      </MuiThemeProvider>
  }
}

module.exports = App;
