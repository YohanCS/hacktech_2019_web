import React, { Component } from 'react';

import DetailsInfo from './DetailsInfo';
import EmailTimeline from './EmailTimeline';

import styles from './../../../css/app.module.css';

class Blank extends Component {
	render() {
		return (
            <div className={styles.blankPage}>
                <div className={styles.blankContent}>
                    This page has no data and is just a blank state
                </div>
            </div>
		);
	}
}

export default Blank;
