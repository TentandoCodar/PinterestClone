import {Route, Switch} from 'react-router-dom';

import React from 'react';

// import { Container } from './styles';
import Home from './pages/Home'
export default function Router() {
  return (
    <Route path="/" exact component={Home}></Route>
  );
}
