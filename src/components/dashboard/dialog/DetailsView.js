import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import DetailNav from './DetailNav';
import Details from './Details';

import styles from './../../../css/app.module.css';

class DetailsView extends Component {
	render() {
		return (
            <Paper className={styles.detailsViewPanel}>
				<DetailNav title="Application View"></DetailNav>
                <Details selectedCard={this.props.selectedCard}></Details>
            </Paper>
		);
	}
}

export default DetailsView;
