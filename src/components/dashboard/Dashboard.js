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
            view: 'none',
            selected: null,
        }

        this.selectCard = this.selectCard.bind(this);
    }

    renderView() {
        if (this.state.view === 'details' && this.state.selected !== null) {
            return <DetailsView selectedCard={this.state.selected}></DetailsView>
        } else if (this.state.view === 'none') {
            return <div></div>
        } else if (this.state.view === 'profile') {
            return <div></div>
        } else {
            return <div></div>
        }
    }

    selectCard(selectedCard) {
        this.setState({
            view: 'none'
        }, () => {
            this.setState({
                view: 'details',
                selected: selectedCard
            });
        })
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
