import React, {Component} from 'react';
import {Desktop} from "../component";
import * as DesktopPages from "./desktop";

class Contact extends Component {
	render() {
		return (
			<div>
				<Desktop.Container>
					<DesktopPages.Contact />
				</Desktop.Container>
			</div>
		)
	}
}

export default Contact;
