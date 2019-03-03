import React, { Component } from 'react';

import styles from './../../../css/app.module.css';

import logo from './../../../assets/tielogo.png';

class Blank extends Component {
	render() {
		return (
            <div className={styles.blankPage}>
                <div className={styles.blankContent}>
                    <img
						src={logo}
						className={styles.blankLogo}>
					</img>
                </div>
            </div>
		);
	}
}

export default Blank;
