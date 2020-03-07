import React, {Component} from 'react';

class LeftRightPage extends Component {
	render() {
		return (
			<div style={{display: "flex", width: "100%", flexWrap: "wrap", overflow: "scroll"}}>
				{this.props.children}
			</div>
		)
	}
}

export default LeftRightPage;
