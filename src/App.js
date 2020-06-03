import React from 'react';
import './App.css';
import Products from './components/ProductsPage/Products';
import Contacts from './components/Contacts/Contacts.js'
import Home from './components/Home/Home.js';

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/Contact' component={Contacts} />
        <Route exact path='/Product' component={Products} />
      </div>
    </Router>
  );
}

export default App;
