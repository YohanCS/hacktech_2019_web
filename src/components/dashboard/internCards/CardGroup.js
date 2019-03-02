import React, { Component } from 'react';

import InternshipCard from './InternshipCard'

import testData from './../../../test_data';

class CardGroup extends Component {
	render() {
		return (
            <div style={{'overflowY': 'scroll'}}>
                {testData.internshipObjects.map((applicationData, index) => {
                    return (
                        <InternshipCard key={index} applicationData={applicationData}></InternshipCard>
                    );
                })}
            </div>
		);
	}
}

export default CardGroup;
