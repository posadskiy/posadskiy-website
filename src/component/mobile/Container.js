import React, {Component} from 'react';
import {Responsive, Sidebar} from "semantic-ui-react";
import {Utils} from "../../common";

class Container extends Component {
	render() {
		return (
			<Responsive
				as={Sidebar.Pushable}
				getWidth={() => Utils.getWidth(Responsive.onlyMobile.minWidth)}
				maxWidth={Responsive.onlyMobile.maxWidth}
				style={{position: "absolute", width: "100%", overflowX: "auto"}}
			>
				{this.props.children}
			</Responsive>
		)
	}
}

export default Container;
