import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GitHub Page on React</h1>
        </header>
        <p className="App-intro">
          <a href="http://reactdev.io">Visit ReactDev</a> for more react
          tutorials.
        </p>
      </div>
    )
  }
}

export default App
