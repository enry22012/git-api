import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './Components/Pages/HomePage'

const App = (props) => (
  <Router>
    <Switch>
      <Route exact path='/'
              component={(routeProps) => <HomePage {...routeProps}/>}/>
    </Switch>
  </Router>
);

export default App;