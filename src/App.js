import React from 'react';
import logo from './logo.svg';
import './assets/stylesheets/index.scss';
import './App.css';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import NavSearchPage from './components/NavSearchPage';


function App() {
  return (
   <Switch>
    <Route exact path='/' component={HomePage} />
    <Route  path='/search' component={SearchPage} />
    <Route  path='/testRedux' component= { NavSearchPage } />
   </Switch>
  );
}

export default App;
