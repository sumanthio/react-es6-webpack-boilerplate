import React from 'react';
import {render} from 'react-dom';
import App from './App';
import { Router, Route, Link, browserHistory } from 'react-router'

//var appHistory = routerHistory(createHistory)({ queryKey: false });

render(
  //<App />,
  <Router history={browserHistory}>
   <Route path="/" component={App}>
     <Route path="about" component={App} />
     <Route path="inbox" component={App}>
       <Route path="messages/:id" component={App} />
     </Route>
   </Route>
 </Router>,
  document.getElementById('root')
);
