import './App.css';
import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
