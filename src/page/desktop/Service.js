import React, {Component} from 'react';
import {Desktop} from "../../component";

class Service extends Component {
	render() {
		return (
			<Desktop.LeftRightPage>
				<Desktop.LeftPage pageName="Service">
					Service
				</Desktop.LeftPage>
				<Desktop.RightPage pageName="Service">
					My services
				</Desktop.RightPage>
			</Desktop.LeftRightPage>
		)
	}
}

export default Service;
