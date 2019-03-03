import React, { Component } from 'react';
import moment from 'moment';

import EmailCard from './EmailCard';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

import Grid from '@material-ui/core/Grid';

import styles from './../../../css/app.module.css';

class EmailTimeline extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emails: props.emails
        }
        console.log(this.state.emails);
    }

    timeFromNow(time) {
        let currentTime = moment()
        return moment(time).from(currentTime)
    }

    formatTime(time) {
        return time.format('dddd, MMMM Do YYYY');
    }

	render() {
        const { emails } = this.state;
		return (
            <div className={styles.timeline}>
                <Timeline lineColor={'#ddd'}>
                    {emails.map((email, index) => {
                        return (
                            <TimelineItem 
                                dateInnerStyle={{ background: '#7b95ed', color: '#ffffff' }}
                                key={index}
                                dateText={this.formatTime(moment(email.date))}
                                style={{color: '#b483e2'}}>
                                <h3>From: {email.from.email}</h3>
                                <h4>{email.from.domain}</h4>
                                <p>
                                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                                    est.
                                </p>
                            </TimelineItem>
                        );
                    })}
                </Timeline>
            </div>
		);
	}
}

export default EmailTimeline;
