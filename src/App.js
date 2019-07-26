import { gql } from 'apollo-boost'
import React from 'react'
import { Query } from 'react-apollo'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Home from './Home.jsx'
import Profile from './Profile.jsx'

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </div>
    </Router>
  )
}

export default App
