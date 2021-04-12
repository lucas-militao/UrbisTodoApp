import React from 'react';
import { Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/homepage" component={HomePage} />
  </Switch>
);

export default Routes;
