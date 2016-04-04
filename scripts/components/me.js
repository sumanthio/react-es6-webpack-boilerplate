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
height: 50,
width: 200,
margin: 20,
textAlign: 'center',
display: 'inline-block',
};
export default class Me extends React.Component{
  render() {
    return (
      <div>
        <Paper style={style} zDepth={5}>
        loremloremloremloremloremloremloremloremloremlorem
        </Paper>
      </div>
    )
  }
}
