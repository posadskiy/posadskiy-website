import React, {Component} from 'react';

class LeftPage extends Component {
	render() {
		const {
			pageName,
			paddingBottom,
		} = this.props;

		return (
			<div style={{flex: 1, display: "flex", flexDirection: "column", paddingBottom: paddingBottom}}>
				<div style={{color: "white", margin: "10px 0", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "Fira Mono", fontWeight: 900, fontSize: "25px"}}>
					<p style={{margin: 0, color: "#00B5AD", textAlign: "center"}}>{pageName}</p>
				</div>
				<div style={{paddingLeft: "10px", color: "lightgray", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "Fira Mono", fontSize: "20px"}}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default LeftPage;
