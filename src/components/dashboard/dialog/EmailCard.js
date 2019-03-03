import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';


class EmailTimeline extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: props.email
        }
    }

	render() {
        const { email } = this.state;
		return (
            <Grid item>
                <Card style={{'margin': '15px'}}>
                    {email.from.email}
                </Card>
            </Grid>
		);
	}
}

export default EmailTimeline;
