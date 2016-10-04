import React from 'react';
import AppBar from 'material-ui/AppBar';
import {blueGrey500} from 'material-ui/styles/colors';

const styles = {
  AppBar: {
    blueGrey500
  }
};

const AppBarExampleIcon = () => (
  <AppBar
    title="Nav"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default AppBarExampleIcon;
