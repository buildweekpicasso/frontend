import React, { Component } from 'react';
import './App.scss';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
