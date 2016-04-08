import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Paper from 'material-ui/lib/paper';
import Divider from 'material-ui/lib/divider';

const style = {

};

export default class Work extends React.Component{

  render() {
    return (
      <div>
      <div className="row col-lg-8 col-lg-offset-2">
                 <Paper zDepth={5}>
                 <CardTitle title="Work Experience" subtitle="And Portfolio" />
                 <CardText>
                   Been working on diversified set of stacks, required for a scalable web ecosystem. I expertise in <code>Laravel, Django</code>. <code>Angular</code> and <code>React</code> when it comes to the front-end.
                   Or even better Ionic and React-native for a hybrid perspective.
                   <br/>
                   <hr/>
                   Well, currently I am with <a href='http://www.fissionlabs.com' target='_blank'>Fission Labs</a>, as a UI Engineer the past 2 years. Been building Angular and React Applications ever since. It has been a quick and quite challenging experience. Happened to experience the actual Silicon Valley start-up work flow, culture and hacks.
                 </CardText>
                 <CardActions>
                 <a href='http://www.fissionlabs.com' target='_blank'><FlatButton label="Action1"></FlatButton></a>

                   <FlatButton label="Action2" />
                 </CardActions>
                 </Paper>
      </div>

      <Divider/>


        <div className="row">
          <Card style={style} className='col-sm-12 col-md-6 col-lg-4'>
           <CardHeader title="BOOKOPOLIS" subtitle="Angular+Dropwizard" avatar="https://www.bookopolis.com/img/logo.png"/>
           <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
             <img src="https://www.bookopolis.com/img/slide--1.jpg" />
           </CardMedia>

           <Paper zDepth={5}>
           <CardTitle title="Card title" subtitle="Card subtitle" />
           <CardText>
           Bookopolis is a web application with a vision to instill the joy of reading
among young readers. Operates as a resource for kids (and parents and
teachers) to find new book ideas that have been rated and reviewed by other
kids. It provides personalized Book Recommendations for each Bookopolis
reader based on books they have read, liked and what other Bookopolis
  readers with similar tastes have enjoyed.
  <ul>
  <li>Built and maintained the Application's web functionality using
AngularJS.</li>
<li>Twin Module application with .xls File export functionality.</li>
<li>Understanding of the business rules, mapping specifications and
technical specifications for the interfaces.</li>
  </ul>
           </CardText>
           <CardActions>
             <a href='http://www.fissionlabs.com' target='_blank'><FlatButton label="Action1"></FlatButton></a>
             <FlatButton label="Action2" />
           </CardActions>
           </Paper>
         </Card>
         <Card style={style} className='col-sm-12 col-md-6 col-lg-4'>
          <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="http://lorempixel.com/100/100/nature/"/>
          <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
            <img src="http://lorempixel.com/600/337/nature/" />
          </CardMedia>

          <Paper zDepth={5}>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          </Paper>
        </Card>
        </div>
      </div>
    )
  }
}
