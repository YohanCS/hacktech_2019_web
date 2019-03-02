import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import Button from '@material-ui/core/Button';
import classes from 'react';

import styles from './../../css/app.module.css';

class LoginPage extends Component {	  
	render() {
		return (
			<div className={styles.loginPage}>
				<div className={styles.loginContent}>
					<p>
						Here is the login button
					</p>
					<GoogleLogin 
						className="google-login-button"
						clientId="177279057869-n5j48p4vn7aucbkvjvcst1qc2j61mgsn.apps.googleusercontent.com"
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
