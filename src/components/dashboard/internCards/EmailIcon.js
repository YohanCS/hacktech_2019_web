import React, { Component } from 'react';

class EmailIcon extends Component {
	render() {
		return (
            <React.Fragment>
                <div>
                    {this.props.emailCount}
                </div>
            </React.Fragment>
		);
	}
}

export default EmailIcon;
