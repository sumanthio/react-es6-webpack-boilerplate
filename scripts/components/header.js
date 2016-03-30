import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppBar from 'material-ui/lib/app-bar';
import { Router, Link } from 'react-router';


export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  toggleNav(e){
    e.preventDefault();
    console.log('yo');
    this.refs.leftNav.toggle();
  }


  render(){
    return(
      <div>
      <AppBar title="Title" onLeftIconButtonTouchTap={this.toggleNav.bind(this)} />
        <LeftNav ref="leftNav" docked={false} width={260} open={this.state.open} onRequestChange={open => this.setState({open})} children={[{route: '/profile/bio', text: 'bio'},{route: '/profile/photos', text: 'photos'}]}>
        <Link to="me">ME</Link>
        <Link to="work">WORK</Link>
        <Link to="blog">BLOG</Link>
        <Link to="contact">CONTACT</Link>
          </LeftNav>
      </div>
    )
  }
}
