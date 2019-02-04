import React, { Component } from 'react';
import './ProjectList.css';
import moment from 'moment';

// material-ui import statements
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class ProjectList extends Component {
    render() {
        return (
            <Grid className="grid-test" container spacing={16}
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item>
                    <img src={this.props.project.thumbnail} />
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {this.props.project.name}
                            </Typography>
                            <Typography>
                                {moment(this.props.project.date_completed).format("dddd, MMMM Do YYYY")}
                            </Typography>
                            <Typography component="p">
                                {this.props.project.description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Typography gutterBottom >
                            {this.props.project.github != null ? <a href={this.props.project.github} target="_blank">GitHub</a> : ""}
                        </Typography>
                        <Typography gutterBottom >
                            {this.props.project.website != null ? <a href={this.props.project.website} target="_blank">Website</a> : ""}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">
                            {this.props.project.tag_name}
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}

export default ProjectList;