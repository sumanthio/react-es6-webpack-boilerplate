import React, {Component} from 'react';
import { Router, Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div>
      <h1>Hello, World!</h1>
      //Header component here
      <Link to="me">ME</Link>
      <Link to="work">WORK</Link>
      <Link to="blog">BLOG</Link>
      <Link to="contact">CONTACT</Link>
       {this.props.children}
      </div>
    );
  }
}
