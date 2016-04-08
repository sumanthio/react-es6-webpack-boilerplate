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
        <div className="row col-lg-10 col-lg-offset-1">
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
          <Card style={style} className='col-sm-12 col-md-6 col-lg-4 col-lg-offset-1'>
           <CardHeader title="BOOKOPOLIS" subtitle="Angular+Dropwizard" avatar="https://www.bookopolis.com/img/logo.png"/>
           <CardMedia overlay={<CardTitle title="www.bookopolis.com" subtitle="worked as UI Engineer" />}>
             <img src="https://www.bookopolis.com/img/slide--1.jpg" />
           </CardMedia>

           <Paper zDepth={5}>
             <CardTitle title="Card title" subtitle="Card subtitle" />
             <CardText>
                 A Bay area EdTech Platform, with a vision to instill the joy of reading
                among young readers. Operates as a resource for kids (and parents and
                teachers) to find new book ideas that have been rated and reviewed by other
                kids. It provides personalized Book Recommendations for each Bookopolis
                reader based on books they have read and liked.
              <ul>
                <li>Built and maintained the Application's web functionality in AngularJS.</li>
                <li>Runs Dropwizard on the backend. Hosted on AWS.</li>
              </ul>
             </CardText>
             <CardActions>
               <a href='http://www.bookopolis.com' target='_blank'><FlatButton label="View"></FlatButton></a>
              </CardActions>
           </Paper>
         </Card>

         <Card style={style} className='col-sm-12 col-md-6 col-lg-4 col-lg-offset-1'>
          <CardHeader title="(this)" subtitle="as in, this very website" avatar="http://lo"/>
          <CardMedia overlay={<CardTitle title="sumanth.co.in" subtitle="Overlay subtitle" />}>
            <img src="../assets/portf.png" />
          </CardMedia>

          <Paper zDepth={5}>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Yep. You read that right. I always considerd this website as a form of art. Originally created in AngularJS and ngMaterial. I have changed the tools and frameworks over the time.
            As of now, this is built in ReactJS layered with Material-ui, running Firebase as Baas. Absolutely no idea what its gonna be other day.
            <ul>
              <li>ReactJS</li>
              <li>Material-ui</li>
              <li>Firebase</li>
            </ul>
          </CardText>
          <CardActions>
            <a href='http://www.bookopolis.com' target='_blank'><FlatButton label="Github"></FlatButton></a>
          </CardActions>
          </Paper>
        </Card>
        </div>
      </div>
    )
  }
}
