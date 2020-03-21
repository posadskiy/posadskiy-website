import React, {Component} from 'react';
import {Desktop, Mobile} from "../component";
import * as DesktopPages from "./desktop";
import * as MobilePages from "./mobile";

class Main extends Component {
	render() {
		return (
			<div style={{width: "100%"}}>
				<Mobile.Container>
					<MobilePages.Main />
				</Mobile.Container>
				<Desktop.Container>
					<DesktopPages.Main />
				</Desktop.Container>
			</div>
		)
	}
}

export default Main;
