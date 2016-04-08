import React, {Component} from 'react';
import { Router, Link } from 'react-router'
import Header from './components/header';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import theme from './components/theme';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// const muiTheme = getMuiTheme({
//   palette: {
//     primary1Color: grey900,
//   },
// });

export default class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider muiTheme={theme}>
      <Header />
      </ MuiThemeProvider>
       {this.props.children}
      </div>
    );
  }
}
