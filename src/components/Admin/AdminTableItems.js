import React, { Component } from 'react';
import moment from 'moment';

// material-ui imput statements
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import FlagIcon from '@material-ui/icons/Flag';

class AdminTableItems extends Component {
    render() {
        return (
            <TableRow>
                <TableCell component="th" scope="row">
                    {this.props.feedback.feeling}
                </TableCell>
                <TableCell>{this.props.feedback.understanding}</TableCell>
                <TableCell>{this.props.feedback.support}</TableCell>
                <TableCell>{this.props.feedback.comments}</TableCell>
                <TableCell>{moment(this.props.feedback.date).format("dddd, MMMM Do YYYY")}</TableCell>
                <TableCell>
                    <Tooltip title={ this.props.feedback.flagged ? "Item has been flagged for review" : "Flag for review?"}>
                        <IconButton aria-label="Flag" 
                                    color={ this.props.feedback.flagged ? "primary" : "default"}
                                    onClick={this.handleFlagClick}>
                            <FlagIcon />
                        </IconButton>
                    </Tooltip>
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

export default AdminTableItems;