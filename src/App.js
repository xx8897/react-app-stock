import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './components/pages/home';
import producer from './components/pages/producer';
import stock from './components/pages/stock.js';
import TSMC from './components/pages/TSMC.js';
import TW2454 from './components/pages/TW2454';
import TW2303 from './components/pages/TW2303';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/producer' component={producer} />
          <Route path='/stock' component={stock} />
          <Route path='/TSMC' component={TSMC} />
          <Route path='/TW2454' component={TW2454} />
          <Route path='/TW2303' component={TW2303} />
        </Switch>
      </Router>
    </>
  );
}

export default App;