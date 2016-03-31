import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Blog from './components/blog';
import Me from './components/me';
import Work from './components/work';
import Contact from './components/contact';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';


render(
  <Router history={browserHistory}>
   <Route path="/" component={App}>
     <IndexRoute component={Me}/>
     <Route path="me" component={Me}/>
     <Route path="work" component={Work}/>
     <Route path="blog" component={Blog}/>
     <Route path="Contact" component={Contact}/>
   </Route>
 </Router>,
  document.getElementById('root')
);
