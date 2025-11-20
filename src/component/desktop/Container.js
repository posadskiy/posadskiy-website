import React, {Component} from 'react';
import {Utils} from "../../common";

// Semantic UI breakpoints: Computer starts at 992px
const COMPUTER_MIN_WIDTH = 992;

class Container extends Component {
	render() {
		const width = Utils.getWidth(COMPUTER_MIN_WIDTH);
		const shouldShow = width >= COMPUTER_MIN_WIDTH;
		
		if (!shouldShow) {
			return null;
		}
		
		return (
			<div style={{height: "100%", display: "flex", flex: 1, flexDirection: "row"}}>
				{this.props.children}
			</div>
		)
	}
}

export default Container;
