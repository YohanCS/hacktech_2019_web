import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import classes from 'react';



const responseGoogle = (response) => {
    console.log(response);
}

class LoginPage extends Component {
	  
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
			<div className = "content-wrapper">
			<div className = "loginbtn">
			<GoogleLogin 
                        className="google-login-button"
						clientId="177279057869-n5j48p4vn7aucbkvjvcst1qc2j61mgsn.apps.googleusercontent.com"
						render={renderProps => (
					      <Button onClick={renderProps.onClick} variant="outlined" color="inherit"  size="large" className={classes.button}>
							<pre><i class="fab fa-google"></i>  Sign In With Google</pre>
						  </Button>
						  )}
                        buttonText="Sign"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
             />
		  </div>
		  </div>
		);
	}
}

export default LoginPage;
