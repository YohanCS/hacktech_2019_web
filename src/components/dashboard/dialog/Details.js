import React, { Component } from 'react';

import DetailsInfo from './DetailsInfo';
import EmailTimeline from './EmailTimeline';

import styles from './../../../css/app.module.css';

class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            applicationData: props.selectedCard
        }
    }

	render() {
        const {applicationData} = this.state;
		return (
            <div>
                <DetailsInfo applicationData={applicationData}></DetailsInfo>
                <div className={styles.detailsBorder}></div>
                <EmailTimeline emails={applicationData.emails}></EmailTimeline>
            </div>
		);
	}
}

export default Details;
