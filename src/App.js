import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Freepik from './components/Freepik'
import './App.css'

const App = () =>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/freepik" component={Freepik} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </Router>


export default App;
