import React, { Component } from 'react';
import ProjectList from './ProjectList.js';
import { connect } from 'react-redux';

// material-ui import statements
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class ProjectHome extends Component {

    render() {
        return (
            <div>
                <Paper elevation={1}>
                    <Grid container spacing={24}>
                        { this.props.reduxStore.projects.map((project) => (
                            <ProjectList key={project.id} project={project} />
                        ))}
                    </Grid>
                </Paper>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(ProjectHome);