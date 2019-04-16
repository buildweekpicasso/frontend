import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login/Login';
import Logout from './components/Navbar/Logout';
import Private from './components/Private';
import PayloadForm from './components/PayloadForm/PayloadForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Route
            exact path='/'
            component={PayloadForm}
          />
          <Route
            path='/login'
            component={Login}
          />
          <Route
            path='/logout'
            component={Logout}
          />
          <Route
            path='/signup'
            component={Login}
          />
          <PrivateRoute
            exact path='/private'
            component={Private}
          />
        </div>
      </div>
    );
  }
}

export default App;
