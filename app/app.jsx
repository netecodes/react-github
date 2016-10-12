import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Github from './components/Github';
import Main from './components/Main';


//Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  		<IndexRoute component={Github} />
  	</Route>
  </Router>
  ,
  document.getElementById('app')
);
