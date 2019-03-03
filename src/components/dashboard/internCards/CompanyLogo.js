import React, { Component } from 'react';

import styles from './../../../css/app.module.css';

class CompanyLogo extends Component {
	render() {
		return (
            <img 
                src={this.props.source}
                className={styles.domainIcon}
                alt="Icon"
            />
		);
	}
}

export default CompanyLogo;

