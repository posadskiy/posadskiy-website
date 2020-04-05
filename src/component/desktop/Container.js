import React, {Component} from 'react';
import {Utils} from "../../common";
import {Responsive} from "semantic-ui-react";

class Container extends Component {
	render() {
		return (
			<Responsive
				getWidth={() => Utils.getWidth(Responsive.onlyComputer.minWidth)}
				minWidth={Responsive.onlyComputer.minWidth}
				style={{height: "100%", display: "flex", flex: 1, flexDirection: "row"}}
			>
				{this.props.children}
			</Responsive>
		)
	}
}

export default Container;
