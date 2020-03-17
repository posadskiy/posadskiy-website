import React, {Component} from 'react';
import {Image} from "semantic-ui-react";

class Main extends Component {
	render() {
		return (
			<div style={{display: "flex", width: "100%"}}>
				<div id="hello" style={{flex: 1, background: "#1d1d1d", paddingLeft: "40px", alignSelf: "center"}}>
					<div style={{textAlign: "left"}}>
						<p style={{margin: 0, color: "white", fontSize: "40px", fontWeight: 900}}>Hi,</p>
						<p style={{margin: 0, color: "white", fontSize: "40px", fontWeight: 900}}>I'm <span style={{color: "#00B5AD"}}>Dimitri Posadskiy</span></p>
						<p style={{margin: 0, color: "white", fontSize: "40px", fontWeight: 900}}>full stack developer</p>
						<p style={{margin: 0, color: "white", fontSize: "20px", fontWeight: 700}}>Java / JavaScript / React / React Native / Big Data / Machine Learning</p>
					</div>
				</div>
				<div id="photo" style={{alignSelf: "flex-end",  paddingRight: "40px", flex: 1}}>
					<Image src='/main_photo.png' style={{height: "100%", width: "100%"}} />
				</div>
			</div>
		)
	}
}

export default Main;
