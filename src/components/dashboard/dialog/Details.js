import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

import styles from './../../../css/app.module.css';
import STATUS_COLORS from './../../../status_colors';

class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            applicationData: props.selectedCard
        }
        console.log(props.selectedCard);
    }

    getStatusColor(status) {
        return {
            'color': STATUS_COLORS[status]
        }
    }

	render() {
        const {applicationData} = this.state;
		return (
            <div className={styles.detailsInformation}>
                <img
                    className={styles.detailsLogo}
                    src={applicationData.from.logo}
                ></img>
                <Typography variant='h3' style={{'marginTop': '15px'}}>
                    {applicationData.from.name}
                </Typography>
                <Typography variant='h5' style={{'marginTop': '6px'}}>
                    Status: &nbsp;
                    <span style={this.getStatusColor(applicationData.status)}>
                        {applicationData.status}
                    </span>
                </Typography>
                <div className={styles.detailsBorder}></div>
                
            </div>
		);
	}
}

export default Details;
