import React, { Component } from 'react';

import InternshipCard from './InternshipCard'

class CardGroup extends Component {
	render() {
		return (
            <React.Fragment>
                {this.props.applicationData.map((application, index) => {
                    return (
                        <InternshipCard key={index} applicationData={application} selectCard={this.props.selectCard}></InternshipCard>
                    );
                })}
            </React.Fragment>
		);
	}
}

export default CardGroup;
