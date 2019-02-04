import React, { Component } from 'react';

// material-ui import statements
import Button from '@material-ui/core/Button';

class GitHubLink extends Component {

    render() {
        return (
            <Button href={this.props.github}>
                GitHub
            </Button>
        )
    }
}


export default GitHubLink;