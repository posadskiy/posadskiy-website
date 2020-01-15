import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Segment, Icon, Button, Image} from "semantic-ui-react";
import './App.css';

function App() {
	return (
		<div style={{height: "100%"}} className="App">
			<Segment style={{height: "100%", margin: 0, padding: 0, border: 'none', boxShadow: 'none'}}>
			<div id="page" style={{height: "100%", display: "flex", background: "#1d1d1d"}}>
				<div id="left-panel" style={{height: "100%", background: "#181818", display: "flex", flex: 1, flexDirection: "column"}}>
					<div style={{flex: 1, background: "black", display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
						<a href=""><Icon name="product hunt" size="huge" style={{color: "#00B5AD"}} /></a>
						<p style={{color: "#00B5AD", fontSize: 17}}>posadskiy</p>
					</div>
					<div style={{flex: 2}}></div>
					<div id="menu" style={{flex: 4, display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
						<Button id="nonShadow" basic color="teal" style={{marginRight: 0}} animated='fade'>
							<Button.Content visible><Icon name="home" size="big" /></Button.Content>
							<Button.Content hidden>About me</Button.Content>
						</Button>
						<Button id="nonShadow" basic color="teal" style={{marginRight: 0}} animated='fade'>
							<Button.Content visible><Icon name="setting" size="big" /></Button.Content>
							<Button.Content hidden>Service</Button.Content>
						</Button>
						<Button id="nonShadow" basic color="teal" style={{marginRight: 0}} animated='fade'>
							<Button.Content visible><Icon name="eye" size="big" /></Button.Content>
							<Button.Content hidden>Projects</Button.Content>
						</Button>
						<Button id="nonShadow" basic color="teal" style={{marginRight: 0}} animated='fade'>
							<Button.Content visible><Icon name="mail" size="big" /></Button.Content>
							<Button.Content hidden>Contact me</Button.Content>
						</Button>
					</div>
					<div style={{flex: 2}}></div>
					<div id="social" style={{flex: 2, display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
						<a href="https://www.linkedin.com/in/dimitri-posadskiy/" target="_blank"><Icon name="linkedin" size="large" style={{color: "#00B5AD"}} /></a>
						<a href="https://github.com/DmitryPosadskiy" target="_blank"><Icon name="github" size="large" style={{color: "#00B5AD"}} /></a>
						<a href="https://www.instagram.com/dimitri.posadskiy/" target="_blank"><Icon name="instagram" size="large" style={{color: "#00B5AD"}} /></a>
					</div>
				</div>
				<div id="hello" style={{flex: 7, background: "#1d1d1d", paddingLeft: "40px", alignSelf: "center"}}>
					<div style={{textAlign: "left"}}>
						<p style={{margin: 0, color: "white", fontSize: "40px", fontWeight: 900}}>Hi,</p>
						<p style={{margin: 0, color: "white", fontSize: "40px", fontWeight: 900}}>I'm Posadskiy</p>
						<p style={{margin: 0, color: "white", fontSize: "40px", fontWeight: 900}}>full stack developer</p>
						<p style={{margin: 0, color: "white", fontSize: "20px", fontWeight: 700}}>Java / JavaScript / React / React Native / Big Data / Machine Learning</p>
					</div>
				</div>
				<div id="photo" style={{alignSelf: "center", paddingRight: "40px"}}>
					<Image src='/main_photo.png' size="large" />
				</div>
			</div>
			</Segment>
		</div>
	);
}

export default App;
