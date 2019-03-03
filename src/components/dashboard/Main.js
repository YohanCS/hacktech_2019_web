import React, { Component } from 'react';

import Dashboard from './Dashboard';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import styles from './../../css/app.module.css';

class Main extends Component {
	render() {
		return (
			<React.Fragment>
                <AppBar position="static" className={styles.navbar}>
                    <Toolbar>
                        <Typography variant='h5' style={{'color': 'white'}}>
                            Impulse
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Dashboard></Dashboard>
            </React.Fragment>
		);
	}
}

export default Main;
