import {Route, Switch} from 'react-router-dom';

import React from 'react';

// import { Container } from './styles';
import Home from './pages/Home';
import Profile from './pages/Profile'
export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/profile" exact component={Profile}></Route>
    </Switch>
  );
}
