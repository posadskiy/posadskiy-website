import React, {Component} from 'react';

class LeftPage extends Component {
	render() {
		const {
			pageName,
		} = this.props;

		return (
			<div style={{flex: 1, paddingLeft: "40px", paddingRight: "20px", display: "flex", flexDirection: "column"}}>
				<div style={{flex: 1, color: "white", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "Fira Mono", fontWeight: 900, fontSize: "25px", opacity: 0.3}}>
					<p style={{margin: 0}}>public class <span style={{display: "initial", color: "#00B5AD", opacity: 1}}>{pageName}</span> {'{'}</p>
					<p style={{paddingLeft: "20px", margin: 0}}>public String toString() {'{'}</p>
					<p style={{paddingLeft: "40px", margin: 0}}>return "</p>
				</div>
				<div style={{flex: 1, paddingLeft: "60px", color: "lightgray", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "Fira Mono", fontSize: "20px"}}>
					{this.props.children}
				</div>
				<div style={{flex: 1, color: "white", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "Fira Mono", fontWeight: 900, fontSize: "25px", opacity: 0.3}}>
					<p style={{paddingLeft: "40px", margin: 0}}>";</p>
					<p style={{paddingLeft: "20px", margin: 0}}>{'}'}</p>
					<p style={{margin: 0}}>{'}'}</p>
				</div>
			</div>
		)
	}
}

export default LeftPage;
