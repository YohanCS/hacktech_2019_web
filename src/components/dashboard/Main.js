import React, { Component } from 'react';

import Dashboard from './Dashboard';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styles from './../../css/app.module.css';

import logo from './../../assets/tielogo.png';

class Main extends Component {
	render() {
		return (
			<React.Fragment>
                <AppBar position="static" className={styles.navbar}>
                    <Toolbar>
                        <img
                            src={logo}
                            className={styles.logoTopLeft}>
                        </img>
                        <Typography variant='h5' style={{'color': 'white'}}>
                            Impulse
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Dashboard applicationData={this.props.applicationData}></Dashboard>
            </React.Fragment>
		);
	}
}

export default Main;
