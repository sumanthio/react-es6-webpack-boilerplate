import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import Paper from 'material-ui/lib/paper';
import Firebase from 'firebase';

export default class Contact extends React.Component{
  constructor(){
    super();
  }

   handleSubmit(e){
    e.preventDefault();
    var name = this.refs.username.value.trim();
    var email = this.refs.email.value.trim();
    var message = this.refs.message.value.trim();
    var firebaseRef = new Firebase('https://sumanth.firebaseio.com/messages/');
    firebaseRef.push({
        name : name,
        email : email,
        message : message
      });

  }
  render() {
    return (
      <div className="row col-sm-12 center-xs center-lg">
        <Card>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <TextField
                  hintText="Password Field"
                  floatingLabelText="Password"
                  type="password"
                /><br/>
                <TextField
                  hintText="MultiLine with rows: 2 and rowsMax: 4"
                  multiLine={true}
                  rows={2}
                  rowsMax={4}
                /><br/>
            </form>
          </Card>
      </div>
    )
  }
}
