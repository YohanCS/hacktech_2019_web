import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import DetailNav from './DetailNav';

import styles from './../../../css/app.module.css';

class DetailsView extends Component {
	render() {
		return (
            <Paper className={styles.detailsViewPanel}>
				<DetailNav title="Application View"></DetailNav>
                This is the dash view
            </Paper>
		);
	}
}

export default DetailsView;
