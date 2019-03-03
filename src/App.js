import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage.js'
import Main from './components/dashboard/Main.js'



class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loggedIn: true
		}

		this.renderView = this.renderView.bind(this)
		this.googleLogin = this.googleLogin.bind(this)
		this.googleError = this.googleError.bind(this)
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
		this.setState({loggedIn: true})
	}

	googleError(response) {
		console.log(response);
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
