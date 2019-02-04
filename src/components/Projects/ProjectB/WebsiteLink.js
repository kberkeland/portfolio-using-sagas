import React, { Component } from 'react';

// material-ui import statements
import Button from '@material-ui/core/Button';

class WebsiteLink extends Component {

    render() {
        return (
            <Button href={this.props.github}>
                Website
            </Button>
        )
    }
}


export default WebsiteLink;