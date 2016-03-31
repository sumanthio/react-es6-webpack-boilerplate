import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppBar from 'material-ui/lib/app-bar';
import { Router, Link } from 'react-router';
import Me from './me';
import Work from './work';
import Blog from './blog';
import Contact from './contact';


export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  toggleNav(e, selectedIndex, menuItem){
    e.preventDefault();
    this.refs.leftNav.toggle();
  }

  render(){
    return(
      <div>
      <AppBar title="Title" onLeftIconButtonTouchTap={this.toggleNav.bind(this)} />
        <LeftNav ref="leftNav" docked={false} width={260} open={this.state.open} onRequestChange={open => this.setState({open})}>
        <Link to='/me' component={Me}><MenuItem>ME</MenuItem></Link>
        <Link to='/work' component={Work}><MenuItem>WORK</MenuItem></Link>
        <Link to='/blog' component={Blog}><MenuItem>BLOG</MenuItem></Link>
        <Link to='/contact' component={Contact}><MenuItem>CONTACT</MenuItem></Link>
        </LeftNav>
      </div>
    )
  }
}
