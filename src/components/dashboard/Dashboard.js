import React, { Component } from 'react';

import CardGroup from './internCards/CardGroup';
import DetailsView from './dialog/DetailsView';

import Grid from '@material-ui/core/Grid';

import styles from './../../css/app.module.css';

// View types - details, none,

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            view: 'details',
            selected: '',
        }
    }

    renderView() {
        if (this.state.view === 'details') {
            return <DetailsView></DetailsView>
        } else if (this.state.view === 'none') {
            return <div></div>
        } else if (this.state.view === 'profile') {
            return <div></div>
        }
    }

    selectCard(card) {
        console.log(card)
    }

	render() {
		return (
            <div className={styles.dashboardPage}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid className={styles.cardGroupOverflow} item xs={4}>
                        <CardGroup selectCard={this.selectCard}/>
                    </Grid>
                    <Grid item xs={8}>
                        {this.renderView()}
                    </Grid>
                </Grid>
            </div>
		);
	}
}

export default Dashboard;
