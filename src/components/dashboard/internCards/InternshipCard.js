import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';

import styles from './../../../css/app.module.css';


const STATUS_COLORS = {
    'Accepted': '#5ac46b',
    'Rejected': '#f26659',
    'Coding Challenge': '#59a6ff',
    'Applied': '#fcad58',
    'Interview': '#bf80f2'
}


class InternshipCard extends Component {
    constructor(props) {
        super(props)

        console.log(props.applicationData);
        this.state = {
            applicationData: props.applicationData
        }
    }

    getImageSource(domain) {
        return '//logo.clearbit.com/' + domain
    }

    getStatusColor(status) {
        return {
            'color': STATUS_COLORS[status]
        }
    }

	render() {
        const {applicationData} = this.state

		return (
            <Paper className={styles.applicationCard}>
                <Card>
                    <Grid container>
                        <Grid item className={styles.domainIcon}>
                            <img 
                                src={this.getImageSource(applicationData.domain)}
                                className={styles.domainIcon}
                                alt="Icon"
                            />
                        </Grid>
                        <Grid item className={styles.domainIcon}>
                            <CardContent className={styles.applicationContent}>
                                <Grid container>
                                    <Grid item>
                                        <Typography variant="h6">
                                            {applicationData.name}
                                        </Typography>  
                                    </Grid>
                                    <Grid item>
                                        <Typography  className={styles.role}>
                                            {applicationData.role}
                                        </Typography>  
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item>
                                        <Typography gutterBottom>
                                            Status: 
                                        </Typography>  
                                    </Grid>
                                    <Grid item>
                                        <Typography gutterBottom className={styles.status} style={this.getStatusColor(applicationData.status)}>
                                            {applicationData.status}
                                        </Typography>  
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Grid>
                        <Grid>

                        </Grid>
                    </Grid>
                </Card>
            </Paper>
		);
	}
}

export default InternshipCard;
