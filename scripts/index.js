import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Blog from './components/blog';
import Me from './components/me';
import Work from './components/work';
import Contact from './components/contact';
import { Router, Route, Link, browserHistory } from 'react-router'

//var appHistory = routerHistory(createHistory)({ queryKey: false });

render(
  //<App />,
  <Router history={browserHistory}>
   <Route path="/" component={App}>
     <Route path="me" component={Me}/>
     <Route path="work" component={Work}/>
     <Route path="blog" component={Blog}/>
     <Route path="Contact" component={Contact}/>
     <Route path="*" component={Me}/>
   </Route>
 </Router>,
  document.getElementById('root')
);
