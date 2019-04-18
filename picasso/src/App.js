import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login/Login';
import Logout from './components/Navbar/Logout';
import Private from './components/Private';
import PayloadForm from './components/PayloadForm/PayloadForm';
import ResultImages from './components/ResultImages';
// import Gallery from './components/Gallery';

import { baseURL, testURL, fetchStyleImages, submitPayload, login, signup, fetchRequest } from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Route
            exact path='/'
            render={props => (
              <PayloadForm
                {...props}
                error={this.props.error}
                baseURL={baseURL}
                testURL={testURL}
                fetchStyleImages={this.props.fetchStyleImages}
                fetchingStyles={this.props.fetchingStyles}
                styleImages={this.props.styleImages}
                submitPayload={this.props.submitPayload}
                submitDeepPayload={this.props.submitDeepPayload}
                submittingPayload={this.props.submittingPayload}
                resultImages={this.props.resultImages}
                processDeep={this.props.processDeep}
              />
            )}
          />
          <Route
            path='/result/:key'
            render={props => (
              <ResultImages
                {...props}
                error={this.props.error}
                resultImages={this.props.resultImages}
                fetchRequest={this.props.fetchRequest}
                fetchingRequest={this.props.fetchingRequest}
              />
            )}
          />
          {/* <Route
            path='/gallery'
            render={props => (
              <Gallery
                {...props}
                error={this.props.error}
                fetchGallery={this.props.fetchGallery}
                fetchingGallery={this.props.fetchGallery}
              />
            )}
          /> */}
          <Route
            path='/login'
            render={props => (
              <Login
                {...props}
                error={this.props.error}
                login={this.props.login}
                loggingIn={this.props.loggingIn}
              />
            )}
          />
          <Route
            path='/logout'
            render={props => (<Logout {...props} />)}
          />
          <Route
            path='/signup'
            render={props => (
              <Login
                {...props}
                error={this.props.error}
                signup={this.props.signup}
                signingUp={this.props.signingUp}
              />
            )}
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

const mapStateToProps = ({ error, loggingIn, signingUp, fetchingStyles, styleImages, submittingPayload, resultImages, processDeep, fetchingRequest }) => ({ error, loggingIn, signingUp, fetchingStyles, styleImages, submittingPayload, resultImages, processDeep, fetchingRequest })

export default connect(
  mapStateToProps,
  { fetchStyleImages, submitPayload, login, signup, fetchRequest }
)(App);
