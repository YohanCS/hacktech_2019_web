import React, { Component } from 'react';

import styles from './../../../css/app.module.css';

class EmailIcon extends Component {
	render() {
		return (
            <div className={styles.emailBuffer}>
                <div className={styles.emailIcon}>
                    <span>
                        {this.props.emailCount}
                    </span>
                    <div style={{'height': '1px'}}></div>
                </div>
            </div>
		);
	}
}

export default EmailIcon;
