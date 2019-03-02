import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import Button from '@material-ui/core/Button';
import classes from 'react';

import styles from './../../css/app.module.css';

class LoginPage extends Component {

	googleResponse(response) {
		console.log(response)
	}
	  
	render() {

		const btnStyle = {
			color: 'white',
			backgroundColor: 'purple',
			padding: '15px 30px',
			width: '12%',
			height: '25%',
			borderRadius: '15px',
		};

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
								<pre><i class="fab fa-google"></i>  Sign In With Google</pre>
							</Button>
						)}
						buttonText="Sign"
						onSuccess={this.responseGoogle}
						onFailure={this.responseGoogle}
					/>
				</div>
				
			</div>
		);
	}
}

export default LoginPage;
