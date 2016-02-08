
import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import Enter from './components/Enter';
import Links from './components/Links';
import styles from './app.scss';


const routes = <Route path='/' component={App}>
  <Route path="/link/" component={App} />
</Route>;

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
);
