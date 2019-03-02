import React, { Component } from 'react';

import Dashboard from './Dashboard';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import styles from './../../css/app.module.css';

class Main extends Component {
	render() {
		return (
			<div>
                <AppBar className={styles.navbar}>
                    <Toolbar>
                        <Typography varient='h5'>
                            Impuls
                        </Typography>
                    </Toolbar>
                </AppBar>
            
                <Dashboard></Dashboard>
            </div>
		);
	}
}

export default Main;
