import React, { Component } from 'react';
import ProjectList from './ProjectList.js';
import Header from './Header.js';
import { connect } from 'react-redux';

// material-ui import statements
import Paper from '@material-ui/core/Paper';

class ProjectHome extends Component {

    render() {
        return (
            <div>
                <Paper justify="center" elevation={1}>
                    <Header />
                    { this.props.reduxStore.projects.map((project) => (
                        <ProjectList key={project.id} project={project} />
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