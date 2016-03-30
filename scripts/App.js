import React, {Component} from 'react';
import { Router, Link } from 'react-router'
import Header from './components/header';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
      <div>
      <Header />

       {this.props.children}
      </div>
    );
  }
}
