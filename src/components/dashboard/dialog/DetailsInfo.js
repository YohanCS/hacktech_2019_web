import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

import styles from './../../../css/app.module.css';

import STATUS_COLORS from './../../../status_colors'

class DetailsInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            applicationData: props.applicationData
        }
    }

    getStatusColor(status) {
        return {
            'color': STATUS_COLORS[status]
        }
    }

	render() {
        const { applicationData } = this.state;

		return (
            <div className={styles.detailsInformation}>
                <img
                    className={styles.detailsLogo}
                    src={applicationData.logo}
                    alt='Company Icon'
                ></img>
                <Typography variant='h3' style={{'marginTop': '15px'}}>
                    {applicationData.name}
                </Typography>
                <Typography variant='h5' style={{'marginTop': '6px'}}>
                    Status: &nbsp;
                    <span style={this.getStatusColor(applicationData.recent_status)}>
                        {applicationData.recent_status}
                    </span>
                </Typography>                
            </div>
		);
	}
}

export default DetailsInfo;
