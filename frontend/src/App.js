import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './routes';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
