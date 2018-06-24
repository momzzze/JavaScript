import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wellcome from './components/Welcome'
import Timer from './components/Timer';





class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>          
        </header>
        <p className="App-intro">              
          To get started, edit <code>src/App.js</code> and save to reload.          
        </p>
        <Wellcome title="Reworcking the title here" subtitle="Sometihng for subtitle to test it"/>  
        <Timer/>
      </div>
    );
  }
}

export default App;
