import React, { Component } from 'react';

import Grow from '@material-ui/core/Grow';

import InternshipCard from './InternshipCard'

class CardGroup extends Component {
	render() {
		return (
            <React.Fragment>
                {this.props.applicationData.map((application, index) => {
                    return (
                        // <Grow
                        //     in={true}
                        //     style={{ transformOrigin: '0 0 0' }}
                        //     {...(true ? { timeout: index * 1000 } : {})}
                        //     >
                            <InternshipCard key={index} applicationData={application} selectCard={this.props.selectCard}></InternshipCard>
                    );
                })}
            </React.Fragment>
		);
	}
}

export default CardGroup;
