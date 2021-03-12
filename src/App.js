import React from 'react';
import './App.css';
import Home from './component/pages/Home';
import Beers from './component/pages/Beers'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers} />
      </Switch>
    </Router>
      
    
  );
}

export default App;
