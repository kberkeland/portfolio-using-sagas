import React, { Component } from 'react';
import AdminInputForm from './AdminInputForm.js';

// material-ui import statements
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class AdminPage extends Component {
    render() {
        return (
            <Paper justify="left" elevation={1}>
                <Typography variant="h4" gutterBottom>
                    Add A Project
                </Typography>
                <AdminInputForm />
            </Paper>
        )
    }
}

export default AdminPage;