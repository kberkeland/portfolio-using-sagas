import React, { Component } from 'react';
import AdminTableItems from './AdminTableItems.js';
import { connect } from 'react-redux';

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
                            <TableCell>Project</TableCell>
                            <TableCell>Delete?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxStore.projects.map(projects => (
                            <AdminTableItems key={projects.id} projects={projects} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStoreToProps)(AdminTable);