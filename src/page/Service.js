import React, {Component} from 'react';
import {Desktop} from "../component";
import * as DesktopPages from "./desktop";

class Service extends Component {
	render() {
		return (
			<div>
				<Desktop.Container>
					<DesktopPages.Service />
				</Desktop.Container>
			</div>
		)
	}
}

export default Service;
