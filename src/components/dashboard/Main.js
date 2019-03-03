import React, { Component } from 'react';

import Dashboard from './Dashboard';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Person from '@material-ui/icons/Person';

import styles from './../../css/app.module.css';

import logo from './../../assets/tielogo.png';

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            renderProfile: false
        };

        this.renderProfileState = this.renderProfileState.bind(this);
        this.unRenderProfile = this.unRenderProfile.bind(this);
    }

    renderProfileState() {
        this.setState({
            renderProfile: true
        });
    }

    unRenderProfile() {
        console.log('de rendered')
        this.setState({
            renderProfile: false
        });
    }

	render() {
		return (
			<React.Fragment>
                <AppBar position="static" className={styles.navbar}>
                    <Toolbar>
                        <Grid container>
                            <Grid xs={12} sm item>
                                <Grid container direction="row">
                                    <Grid item>
                                        <img
                                            src={logo}
                                            className={styles.logoTopLeft}>
                                        </img>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h5' style={{'color': 'white', 'marginRight': '20px'}}>
                                            Impulse
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Person onClick={() => {this.renderProfileState()}}></Person>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Dashboard applicationData={this.props.applicationData} renderProfile={this.state.renderProfile} deRender={this.unRenderProfile}></Dashboard>
            </React.Fragment>
		);
	}
}

export default Main;
