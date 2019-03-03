import React, { Component } from 'react';

import InternshipCard from './InternshipCard'

import testData from './../../../test_data';

class CardGroup extends Component {

    log(card) {
        console.log(card)
    }
	render() {
		return (
            <React.Fragment>
                {testData.internshipObjects.map((applicationData, index) => {
                    return (
                        <InternshipCard key={index} applicationData={applicationData} selectCard={this.log}></InternshipCard>
                    );
                })}
            </React.Fragment>
		);
	}
}

export default CardGroup;
