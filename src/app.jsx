
import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import Enter from './components/Enter';
import Links from './components/Links';


/**
const routes = <Route component={App}>
  <Route path="/links" component={Links} />
  <Route path="/" component={Enter} />
</Route>;

<Router>{routes}</Router>,
**/
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
