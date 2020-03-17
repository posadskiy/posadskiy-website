import React, {Component} from 'react';
import {Desktop} from "../component";
import * as DesktopPages from "./desktop";

class Page404 extends Component {
	render() {
		return (
			<div>
				<Desktop.Container>
					<DesktopPages.Page404 />
				</Desktop.Container>
			</div>
		)
	}
}

export default Page404;
