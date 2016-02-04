
import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import Enter from './components/Enter';
import Links from './components/Links';


const routes = <Route component={App}>
  <Route path="/links" component={Links} />
  <Route path="/" component={Enter} />
</Route>;

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
