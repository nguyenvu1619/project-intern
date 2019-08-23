import React from 'react';
import logo from './logo.svg';
import './assets/stylesheets/index.scss';
import './App.css';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
require('dotenv').config();

function App() {
  return (
    <BrowserRouter>
   <Switch>
    <Route exact path='/' component={HomePage} />
    <Route  path='/' />
    <Route  path='/' />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
