import React, {Component} from 'react';
import {Desktop, Mobile} from "../component";
import {desktopPages} from "./desktop";
import {mobilePages} from "./mobile";
import {LOADING_TIME} from "../common/Settings";
import {Backdrop, CircularProgress, Box} from "@mui/material";

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
		
		const setLoading = (value) => {
		  this.setState({isLoading: value});
    }

		const MobilePage = mobilePages[pageName];
		const DesktopPage = desktopPages[pageName];

		return (
			<Box>
				<Backdrop
					sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, position: 'fixed', background: "rgba(0, 0, 0, 0.8)" }}
					open={isLoading}
				>
					<CircularProgress size={60} />
				</Backdrop>
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
							<DesktopPage
                setLoading={setLoading}
              />
						</Desktop.Container>
					)
				}
			</Box>
		)
	}
}

export default Page;
