import React, { Component } from 'react';

import CardGroup from './internCards/CardGroup';

import Grid from '@material-ui/core/Grid';

import styles from './../../css/app.module.css';

class Dashboard extends Component {
	render() {
		return (
            <div className={styles.dashboardPage}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item xs={4}>
                        <CardGroup/>
                    </Grid>
                    <Grid item xs={8}>
                        <div style={{'textAlign': 'center'}}>
                            <p>
                                This is the dashboard
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
		);
	}
}

export default Dashboard;
