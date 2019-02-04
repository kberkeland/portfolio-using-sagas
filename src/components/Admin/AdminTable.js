import React, { Component } from 'react';

// material-ui imput statements
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class AdminTable extends Component {
    render() {
        return (
            <div>
                <br />
                <Table className="table-css">
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Flag for review</TableCell>
                            <TableCell>Delete?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.feedbackArray.map(feedback => (
                            <AdminFormItem key={feedback.id} feedback={feedback} getFeedbackData={this.getFeedbackData} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default AdminTable;