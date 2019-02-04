import React, { Component } from 'react';
import AdminHeader from './AdminHeader.js';
import AdminInputForm from './AdminInputForm.js';
import AdminTable from './AdminTable.js';

// material-ui import statements
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

class AdminPage extends Component {

    // function for back to projects list
    sendToProjects = () => {
        // send the user to projects home
        this.props.history.push('/');
    } // end sendToProjects

    render() {
        return (
            <Paper elevation={1}>
                <AdminHeader />
                <Typography justify="left" variant="h4" gutterBottom>
                    Add A Project
                </Typography>
                <Button color="secondary" onClick={this.sendToProjects}>
                    Back to Projects
                </Button>
                <AdminInputForm />
                <br />
                <Divider />
                <AdminTable />
            </Paper>
        )
    }
}

export default AdminPage;