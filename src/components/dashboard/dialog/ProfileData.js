import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import DetailNav from './DetailNav';
import Details from './Details';

import styles from './../../../css/app.module.css';

import {Doughnut} from 'react-chartjs-2';

const types = ['Applied', 'Rejected', 'Offer Recieved', 'Interviewing']

class ProfileData extends Component {
    constructor(props) {
        super(props)

        let chartData = {
            datasets: [{
                data: this.getData(this.props.applicationData),
                backgroundColor: [
                    '#7896e8',
                    '#f26659',
                    '#5ac46b',
                    '#fcad58',
                ]
            }],
            labels: types
        }
        
        this.state = {
            chartData: chartData
        };
    }

    getData(applicationData) {
        let typesOf = ['Applied', 'Rejected', 'Offer Received', 'Interviewing']
        let data = []
        for(let i = 0; i < typesOf.length; i++) {
            console.log('TYPE', typesOf[i])
            let total = 0
            for(let j = 0; j < applicationData.length; j++) {
                console.log(applicationData[j].recent_status);
                if (applicationData[j].recent_status === typesOf[i]) {
                    console.log(applicationData[j].recent_status);
                    total += 1
                }
            }
            data.push(total);
        }
        return data;
    }

	render() {
		return (
            <div style={{'height': '550px', 'marginTop': '50px'}}>
                <Doughnut
                    style={{'height': '400px', 'width': '400px'}}
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                    width={300}
                    height={300}
                    options={{
                        maintainAspectRatio: false
                    }}
                ></Doughnut>
            </div>
		);
	}
}

export default ProfileData;
