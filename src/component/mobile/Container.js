import React, {Component} from 'react';
import {Box} from "@mui/material";
import {Utils} from "../../common";

// Semantic UI breakpoints: Mobile 0-767px, Tablet 768-991px
const TABLET_MAX_WIDTH = 991;

class Container extends Component {
	render() {
		const width = Utils.getWidth(0);
		const shouldShow = width <= TABLET_MAX_WIDTH;
		
		if (!shouldShow) {
			return null;
		}
		
		return (
			<Box sx={{position: "absolute", width: "100%", overflowX: "auto"}}>
				{this.props.children}
			</Box>
		)
	}
}

export default Container;
