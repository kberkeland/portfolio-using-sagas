import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

// material-ui imput statements
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class AdminTableItems extends Component {

    handleDeleteClick = () => {
        const action = {type: 'DELETE_PROJECT', payload: this.props.projects.id};
        this.props.dispatch(action);
        swal("Project deleted", "You have deleted the project.", "success");
    } // end handleDeleteClick

    render() {
        return (
            <TableRow>
                <TableCell>
                    {this.props.projects.name}
                </TableCell>
                <TableCell>
                    <Tooltip title="Delete">
                        <IconButton aria-label="Delete" 
                                    color="secondary" 
                                    onClick={this.handleDeleteClick}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </TableRow>
        )
    }
}

export default connect()(AdminTableItems);