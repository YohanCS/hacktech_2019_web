import React, { Component } from 'react';

import EmailCard from './EmailCard';

import Grid from '@material-ui/core/Grid';

class EmailTimeline extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emails: props.emails
        }
        console.log(this.state.emails);
    }

	render() {
        const { emails } = this.state;
		return (
            <Grid container>
                {emails.map((email) => {
                    return <EmailCard email={email}></EmailCard>
                })}
            </Grid>
		);
	}
}

export default EmailTimeline;
