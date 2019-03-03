import React, { Component } from 'react';

import styles from './../../../css/app.module.css';

class Details extends Component {
    constructor(props) {
        super(props)

        console.log(props.selectedCard);
    }
    
	render() {
		return (
            <div>
                this is some info
            </div>
		);
	}
}

export default Details;
