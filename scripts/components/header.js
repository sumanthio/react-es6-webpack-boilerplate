import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppBar from 'material-ui/lib/app-bar';
import { Router, Link , browserHistory} from 'react-router';
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
    console.log('yo');
    this.setState({open: !this.state.open});
  }

  handleLeftNav(route){
    browserHistory.push(route);
    this.setState({
      open: false
    });
  }
  render(){
    return(
      <div>
      <AppBar title="SUM4NTH" onLeftIconButtonTouchTap={this.toggleNav.bind(this)} />
        <LeftNav docked={false} width={300} open={this.state.open} onRequestChange={open => this.setState({open})}>
          <MenuItem onTouchTap={() => { return this.handleLeftNav('/me/');}}>ME</MenuItem>
          <MenuItem onTouchTap={() => { return this.handleLeftNav('/work/');}}>WORK</MenuItem>
          <MenuItem onTouchTap={() => { return this.handleLeftNav('/blog/');}}>BLOG</MenuItem>
          <MenuItem onTouchTap={() => { return this.handleLeftNav('/contact/');}}>CONTACT</MenuItem>
        </LeftNav>
      </div>
    )
  }
}
