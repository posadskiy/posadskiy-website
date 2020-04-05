import React, {Component} from 'react';
import {Desktop, Mobile} from "../component";
import {desktopPages} from "./desktop";
import {mobilePages} from "./mobile";
import {LOADING_TIME} from "../common/Settings";
import {Dimmer, Loader} from "semantic-ui-react";

class Page extends Component {

	state = {
		isLoading: true,
	};

	componentDidMount() {
		setTimeout(() => this.setState({isLoading: false}), LOADING_TIME);
	}

	render() {
		const {
			isLoading,
		} = this.state;
		
		const {
			pageName,
		} = this.props;

		const MobilePage = mobilePages[pageName];
		const DesktopPage = desktopPages[pageName];

		return (
			<div>
				<Dimmer style={{position: 'fixed', background: "black"}} active={isLoading}>
					<Loader size='massive' content='Loading...' indeterminate/>
				</Dimmer>
				{
					MobilePage && (
						<Mobile.Container>
							<MobilePage/>
						</Mobile.Container>
					)
				}
				{
					DesktopPage && (
						<Desktop.Container>
							<DesktopPage />
						</Desktop.Container>
					)
				}
			</div>
		)
	}
}

export default Page;
