import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from 'views/App';
import Home from 'components/Home';
import About from 'views/About';
import NotFound from 'views/NotFound';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  ABOUT: `${ publicPath }about`
};

const Routes = () => (
  <Router history={ browserHistory }>
    <Route path={ publicPath } component={ App }>
      <IndexRoute component={ Home }/>
      <Route path={ routeCodes.HOME } component={ Home }/>
      <Route path={ routeCodes.ABOUT } component={ About }/>
      <Route path='*' component={ NotFound }/>
    </Route>
  </Router>
);

export default Routes;
