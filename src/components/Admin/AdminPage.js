import React, { Component } from 'react';
import AdminInputForm from './AdminInputForm.js';
import AdminTable from './AdminTable.js';

// material-ui import statements
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class AdminPage extends Component {
    render() {
        return (
            <Paper elevation={1}>
                <Typography justify="left" variant="h4" gutterBottom>
                    Add A Project
                </Typography>
                <AdminInputForm />
                <br />
                <Divider />
                <AdminTable />
            </Paper>
        )
    }
}

export default AdminPage;