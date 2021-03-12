import React from 'react';
import './App.css';
import Home from './component/pages/Home';
import Beers from './component/pages/Beers'
import Beer from './component/pages/Beer';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers} />
        <Route exact path='/:id' component={Beer} />
      </Switch>
    </Router>
      
    
  );
}

export default App;
