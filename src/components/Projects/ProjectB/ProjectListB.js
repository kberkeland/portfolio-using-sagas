import React, { Component } from 'react';
import './Project.css';

// material-ui import statements
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class ProjectListB extends Component {
    render() {
        return (
            <Grid container spacing={16}>
                <Grid item>
                    <img src={this.props.project.thumbnail} />
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {this.props.project.name}
                            </Typography>
                            <Typography gutterBottom >
                                {this.props.project.github}
                            </Typography>
                            <Typography component="p">
                                {this.props.project.description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">
                            {this.props.project.tag_id}
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default ProjectListB;