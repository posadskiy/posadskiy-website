import React, {Component} from 'react';
import {Desktop, Mobile} from "../component";
import * as DesktopPages from "./desktop";
import * as MobilePages from "./mobile";

class Projects extends Component {
	render() {
		return (
			<div>
				<Mobile.Container>
					<MobilePages.Project />
				</Mobile.Container>
				<Desktop.Container>
					<DesktopPages.Project />
				</Desktop.Container>
			</div>
		)
	}
}

export default Projects;
