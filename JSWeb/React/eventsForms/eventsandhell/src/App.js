import React, { Component } from 'react';
import './App.css';
import ButtonWithClick from './ButtonWithClick';
import RegisterForm from './RegisterForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterForm/>
      </div>
    );
  }
}

export default App;
