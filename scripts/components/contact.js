import React from 'react';
import TextField from 'material-ui/lib/text-field';
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
      <div>
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

        Name<input type="text" ref="username"/>
        Email<input type="email" ref="email"/>
        <textarea ref='message'></textarea>
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
