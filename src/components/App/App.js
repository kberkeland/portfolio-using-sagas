import React, { Component } from 'react';
import './App.css';
import Header from './../Projects/Header.js';
import ProjectHome from './../Projects/ProjectHome.js';
import { connect } from 'react-redux';

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
      <div className="App">
        <Header />
        <ProjectHome />
      </div>
    );
  }
}

export default connect()(App);
