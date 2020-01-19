import React, {Component} from 'react';
import {LeftPage, LeftRightPage} from "../component";

class Contact extends Component {
	render() {
		return (
			<LeftRightPage>
				<LeftPage pageName="Contact">
					You can send me message
				</LeftPage>
			</LeftRightPage>
		)
	}
}

export default Contact;
