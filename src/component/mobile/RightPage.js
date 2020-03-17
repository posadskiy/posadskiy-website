import React, {Component} from 'react';
import {Icon, Input} from "semantic-ui-react";

class RightPage extends Component {
	render() {

		return (
			<div style={{flex: 1, display: "flex", flexDirection: "column", alignSelf: "center"}}>
				{this.props.children}
			</div>
		)
	}
}

export default RightPage;
