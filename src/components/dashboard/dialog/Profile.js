import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import DetailNav from './DetailNav';
import ProfileData from './ProfileData';

import styles from './../../../css/app.module.css';

class Profile extends Component {
	render() {
		return (
            <Paper className={styles.detailsViewPanel}>
				<DetailNav title="Profile View"></DetailNav>
                <ProfileData applicationData={this.props.applicationData}></ProfileData>
            </Paper>
		);
	}
}

export default Profile;
