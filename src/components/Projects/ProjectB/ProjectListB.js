import React, { Component } from 'react';
import './Project.css';
import GitHubLink from './GitHubLink.js';
import WebsiteLink from './WebsiteLink.js';

// material-ui import statements
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class ProjectListB extends Component {
    render() {
        return (
            <Grid className="grid-test"  container spacing={16}
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
                            <Grid item >
                            <Typography gutterBottom >
                                {this.props.project.github != null ? <GitHubLink github={this.props.project.github}/> : ""}
                            </Typography>
                            <Typography gutterBottom >
                                {this.props.project.website != null ? <WebsiteLink website={this.props.project.website}/> : ""}
                            </Typography>
                            </Grid>
                            <Typography component="p">
                                {this.props.project.description}
                            </Typography>
                        </Grid>
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

export default ProjectListB;