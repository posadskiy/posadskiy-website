import React, {Component} from 'react';
import {LeftPage, LeftRightPage, RightPage} from "../component";
import {Button, Divider, Grid, Icon, Segment, TextArea} from "semantic-ui-react";

class Contact extends Component {
	render() {
		return (
			<LeftRightPage>
				<LeftPage pageName="Contact">
					You can send me message
				</LeftPage>
				<RightPage pageName="Contact">
					<div style={{height: "100%", display: "flex", flexDirection: "column"}}>
						<Segment style={{flex: 2, minHeight: "min-content", margin: 0, padding: 0, cursor: "pointer"}} placeholder>
							<Grid columns={2} style={{margin: 0, height: "100%"}}>
								<Grid.Column style={{textAlign: "center", alignSelf: "center", padding: 0, height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={() => window.open("https://t.me/dimitri_posadskiy", "_blank")}>
									<Icon size="huge" name="telegram plane" />
								</Grid.Column>
								<Grid.Column verticalAlign='middle' style={{textAlign: "center", alignSelf: "center", padding: 0, height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}  onClick={() => window.open("mailto:admin@posadskiy.com", "_blank")}>
									<Icon size="huge" name="at" />
								</Grid.Column>
							</Grid>
							<Divider vertical></Divider>
						</Segment>
						<div style={{flex: 1, background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px"}}>
							<p>Use messenger or write message below</p>
						</div>
						<div style={{flex: 6}}>
							<TextArea style={{height: "100%", width: "100%", fontFamily: "Fira Mono", fontSize: "24px"}}
							          placeholder="Enter your amazing message here"/>
						</div>
						<div style={{flex: 1, display: "flex", justifyContent: "center", width: "100%"}}>
							<Button style={{marginTop: "10px", width: "30%", background: "#00B5AD"}}>Send</Button>
						</div>
					</div>
				</RightPage>
			</LeftRightPage>
		)
	}
}

export default Contact;
