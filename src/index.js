import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_PROJECTS', getProjects);
    yield takeEvery('GET_TAGS', getTags);
    yield takeEvery('ADD_PROJECT', addProject);
    yield takeEvery('DELETE_PROJECT', deleteProject);
}

// saga that will POST a new project to the database
function* addProject(action) {
    try {
        yield axios.post('/projects', action.payload);
        const nextAction = {type: 'GET_PROJECTS'};
        yield put(nextAction);
    } catch (error) {
        // console log message for POST error
        console.log(`Error with addProject: ${error}`);
    }
} // end addProject

// saga that calls to the server to GET projects then adds them to redux
function* getProjects() {
    try {
        const projectsResponse = yield axios.get('/projects');
        // will set the projects in the projects redux store
        const action = {type: 'SET_PROJECTS', payload: projectsResponse.data};
        yield put(action);
    } catch (error) {
        // console log message for an error
        console.log(`Error with getProjects saga: ${error}`);
    }
} // end getProjects

// saga function for DELETE where a project is passed in
function* deleteProject(action) {
    try {
        yield axios.delete(`/projects/delete/${action.payload}`);
        const nextAction = {type: 'GET_PROJECTS'};
        yield put(nextAction);
    } catch (error) {
        // console log message for DELETE error
        console.log(`Error in deleteProject: ${error}`);
    }
} // end deleteProject
  
// saga that calls to the server to GET projects then adds them to redux
function* getTags() {
    try {
        const tagsResponse = yield axios.get('/tags');
        // will set the projects in the projects redux store
        const action = {type: 'SET_TAGS', payload: tagsResponse.data};
        yield put(action);
    } catch (error) {
        // console log message for an error
        console.log(`Error with getTags saga: ${error}`);
    }
} // end getProjects

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
