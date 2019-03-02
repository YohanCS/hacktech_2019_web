import React, { Component } from 'react';

import Dashboard from './Dashboard';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import styles from './../../css/app.module.css';

class Main extends Component {
	render() {
		return (
			<div>
                <AppBar>
                    <Toolbar>
                        Impuls
                    </Toolbar>
                </AppBar>
            
                <Dashboard></Dashboard>
            </div>
		);
	}
}

export default Main;
