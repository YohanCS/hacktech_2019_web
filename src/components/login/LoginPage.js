import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import classes from 'react';

import styles from './../../css/app.module.css';

import logo from './../../assets/tielogo.png';

class LoginPage extends Component {	  
	render() {
		return (
			<div className={styles.loginPage}>
				<div className={styles.loginContent}>
					<img
						src={logo}
						className={styles.logo}>
					</img>
					<Typography variant="h6" className={styles.logoTitle}>
						Impulse
					</Typography>
					<Typography variant="h5" className={styles.logoDescription}>
						A better way to manage internship applications
					</Typography>
					<GoogleLogin 
						className="google-login-button"
						clientId="177279057869-n5j48p4vn7aucbkvjvcst1qc2j61mgsn.apps.googleusercontent.com"
						scope="https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://mail.google.com/ https://www.googleapis.com/auth/gmail.labels"
						render={renderProps => (
							<Button onClick={renderProps.onClick} variant="outlined" color="inherit"  size="large" className={classes.button}>
								<pre><i className="fab fa-google"></i>  Sign In With Google</pre>
							</Button>
						)}
						buttonText="Sign"
						onSuccess={this.props.googleLogin}
						onFailure={this.props.googleError}
					/>
				</div>
				
			</div>
		);
	}
}

export default LoginPage;
