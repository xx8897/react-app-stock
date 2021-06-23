import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './components/pages/home';
import producer from './components/pages/producer';
import stock from './components/pages/stock.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/producer' component={producer} />
          <Route path='/stock' component={stock} />
        </Switch>
      </Router>
    </>
  );
}

export default App;