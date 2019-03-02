import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Paper from '@material-ui/core/Paper';

import styles from './../../../css/app.module.css';

import placeholder_image from './../../../assets/test.jpg'

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

	render() {
        const {applicationData} = this.state

		return (
            <Paper className={styles.applicationCard}>
                <Card>
                    <CardMedia
                        className={styles.companyIcon}
                        title="Company Icon"
                    >
                        <img src={this.getImageSource(applicationData.domain)}/>
                    </CardMedia>
                    <CardContent>
                        {applicationData.name}
                    </CardContent>
                </Card>
            </Paper>
		);
	}
}

export default InternshipCard;
