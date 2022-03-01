import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Routes  } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import AddExpense from './pages/add-expense/add-expense';

export default function App(){
  return(
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home}  />
        <Route path='/add-expense' component={AddExpense} />
      </Switch> 
      <div> Footer </div>
    </Router>
    
  );
}