import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import styles from './../../../css/app.module.css';

class DetailsView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.title
        }
    }

	render() {
		return (
            <AppBar position="static" className={styles.detailsViewToolbar}>
                <Toolbar>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6" style={{'color': 'white'}}>
                                {this.state.title}
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
		);
	}
}

export default DetailsView;
