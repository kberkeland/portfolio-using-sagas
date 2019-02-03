import React, { Component } from 'react';
import './ProjectList.css';

// material-ui import statements
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import PeopleIcon from '@material-ui/icons/People';
import PhotoIcon from '@material-ui/icons/Photo';
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

class ProjectList extends Component {
    render() {
        return (
            // <Grid item md={6} className="card">
                <Card className="card">
                    <CardMedia
                        className="card-media"
                        component="img"
                        src={this.props.project.thumbnail}
                    />
                    <div className="card-details">
                    <CardContent>
                        <Typography component="h5" variant="h5">
                            { this.props.project.name }
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.project.github }
                        </Typography>
                        <Typography>
                        </Typography>
                        <Typography component="p">
                                {this.props.project.description}
                        </Typography>
                    </CardContent>
                    </div>
                </Card>
            // </Grid>
        )
    }
}

export default ProjectList;