import React, {Component} from 'react';
import {LeftPage, LeftRightPage, RightPage} from "../component";

class Service extends Component {
	render() {
		return (
			<LeftRightPage>
				<LeftPage pageName="Service">
					Service
				</LeftPage>
				<RightPage pageName="Service">
					My services
				</RightPage>
			</LeftRightPage>
		)
	}
}

export default Service;
