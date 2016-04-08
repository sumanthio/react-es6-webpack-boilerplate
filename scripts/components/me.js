import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Paper from 'material-ui/lib/paper';

const style = {
  textAlign: 'center',
  display: 'inline-block',
};


export default class Me extends React.Component{

  render() {
    return (
      <div className="row">
        <Card style={style} className="col-xs-12 col-sm-12 col-lg-6 col-lg-offset-3">
         <CardMedia overlay={<CardTitle title="Sumanth " subtitle="Hi there, I am Sumanth, a Web Engineer from Hyderabad, India with three years of progressive experience" />}>
           <img src="assets/mainpic.jpg" />
         </CardMedia>
         <Paper zDepth={5}>
         <CardTitle title="Card title" subtitle="Card subtitle" />
         <CardText>
          Hi there, I am Sumanth, a Web Engineer from Hyderabad, India with three years of progressive experience in web making. Freelanced as a PHP dev for a PR agency. And then began my journey as a UI Engineer, with Fission Labs. On the other side of coin, I am a Keyboard (as in the Musical Instrument) artist and I freelance that as well...) About to start my Youtube career as a cover artist.
         </CardText>
         <CardActions>
           <FlatButton label="Action1" />
           <FlatButton label="Action2" />
         </CardActions>
         </Paper>
       </Card>
      </div>
    )
  }
}
