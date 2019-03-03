import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import LoginPage from './components/login/LoginPage.js';
import Main from './components/dashboard/Main.js';

import API_GET_EMAILS from './impuls_api';
import {CLIENT_ID, CLIENT_SECRET} from './unsafe_auth';

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loggedIn: false
		}

		this.renderView = this.renderView.bind(this)
		this.googleLogin = this.googleLogin.bind(this)
		this.googleError = this.googleError.bind(this)
		this.getApplicationData = this.getApplicationData.bind(this);
	}

	renderView(loggedIn) {
		if (loggedIn) {
			return <Main></Main>
		} else {
			return <LoginPage googleLogin={this.googleLogin} googleError={this.googleError}></LoginPage>
		}
	}

	googleLogin(response) {
		console.log(response);
		this.getApplicationData(response.accessToken);
	}

	googleError(response) {
		console.log(response);
	}

	getApplicationData(accessToken) {
		let self = this;
		axios.get(API_GET_EMAILS, {
			params: {
				accessToken: accessToken
			}
		}).then((response) => {
			console.log(response);
			self.setState({
				loggedIn: true
			});
		}).catch((error) => {
			console.log(error)
		});
	}

	render() {
		return (
			<div className="App">
				{this.renderView(this.state.loggedIn)}
			</div>
		);
	}
}

export default App;
