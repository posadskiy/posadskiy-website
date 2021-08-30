import React, {Component} from 'react';
import {Desktop} from "../../component";
import {Button, TextArea} from "semantic-ui-react";

class Contact extends Component {
	render() {
		return (
			<Desktop.LeftRightPage>
				<Desktop.LeftPage pageName="Contact">
					You can send me message
				</Desktop.LeftPage>
				<Desktop.RightPage pageName="Contact">
					<div style={{height: "100%", display: "flex", flexDirection: "column", background: "#dddddd"}}>
						<div style={{flex: 1}}></div>
						<div style={{flex: 6}}>
							<TextArea style={{height: "100%", width: "100%", fontFamily: "Fira Mono", fontSize: "24px"}}
							          placeholder="Enter your amazing message here"/>
						</div>
						<div style={{flex: 1}}></div>
						<div style={{flex: 1, display: "flex", justifyContent: "center", width: "100%"}}>
							<Button style={{marginBottom: "10px", width: "30%", background: "#00B5AD"}}>Send</Button>
						</div>
					</div>
				</Desktop.RightPage>
			</Desktop.LeftRightPage>
		)
	}
}

export default Contact;
