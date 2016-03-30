import React from 'react';

export default class Contact extends React.Component{
  constructor(){
    super();
  }
  componentWillMount: function() {
   var firebaseRef = new Firebase('https://sumanthio.firebaseio.com/messages/');
   this.bindAsArray(firebaseRef.limitToLast(25), 'items');
 }
   handleSubmit(e){
    e.preventDefault();
    var name = this.refs.username.value.trim();
    var email = this.refs.email.value.trim();
    var message = this.refs.message.value.trim();

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        Name<input type="text" ref="username"/>
        Email<input type="email" ref="email"/>
        <textarea ref='message'></textarea>
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
