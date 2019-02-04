import React, { Component } from 'react';
import ProjectListB from './ProjectListB.js';
import Header from './../Header.js';
import { connect } from 'react-redux';
import './Project.css';

// material-ui import statements
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class ProjectHome extends Component {

    render() {
        return (
            <div>
                <Paper justify="center" elevation={1}>
                    <Header />
                    { this.props.reduxStore.projects.map((project) => (
                        <ProjectListB key={project.id} project={project} />
                    ))}
                </Paper>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(ProjectHome);