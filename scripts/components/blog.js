import React from 'react';
import Paper from 'material-ui/lib/paper';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

export default class Blog extends React.Component{
  render() {
    return (
      <div className="row">
        <Paper zDepth={5} className="col-lg-10 col-lg-offset-1">
           Been quite a while. But I write a lot though. Used to write a lot when I was in college, (PS: which is like a while ago). There were a couple of blogs, one which I used to write music reviews and stuff. And the other is all about my philosophy and frustration

           <List className="col-sm-12 col-lg-5 col-lg-offset-4">
           <a href='http://www.fissionlabs.com' target='_blank'><ListItem primaryText="Inbox" /></a>

            <ListItem primaryText="Starred" />
            <ListItem primaryText="Sent mail"  />
            <ListItem primaryText="Drafts"  />
            <ListItem primaryText="Inbox" />
          </List>
        </ Paper>
      </div>
    )
  }
}
