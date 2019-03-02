import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './components/login/LoginPage.js'
import Main from './components/dashboard/Main.js'



class App extends Component {
	render() {
		return (
			<div className="App">
				<Router style={{'height': '100%'}}>
					<div style={{'height': '100%'}}>
						<Route exact path="/" component={LoginPage}/>
						<Route path="/dashboard" component={Main}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
