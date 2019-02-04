import React, { Component } from 'react';
import './App.css';
import Header from './../Projects/Header.js';
// import ProjectHome from './../Projects/ProjectHome.js';
import ProjectHomeB from './../Projects/ProjectB/ProjectHomeB.js';
import AdminPage from './../Admin/AdminPage.js';
import { connect } from 'react-redux';
import { HashRouter as Router, Link as RouterLink, Route } from 'react-router-dom';

// material-ui imports
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {

  // loads the redux store with projects and tags
  componentDidMount() {
    this.reduxGet('GET_PROJECTS');
    this.reduxGet('GET_TAGS');
  }

  // takes in an action type and will GET the data for redux
  reduxGet = (actionTypeIn) => {
    const action = {type: actionTypeIn };
    this.props.dispatch(action);
  } // end reduxGet

  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ProjectHomeB} />
          <Route exact path="/admin" component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
