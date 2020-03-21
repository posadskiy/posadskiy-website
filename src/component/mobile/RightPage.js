import React, {Component} from 'react';

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
