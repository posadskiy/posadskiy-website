import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Router} from "react-router-dom";
import {Segment, Icon, Button, Image} from "semantic-ui-react";
import './App.css';
import Routes from "./Routes";
import {History} from "./common";
import {Page} from './common'

function App() {
	return (
		<Router history={History.history}>
		<div style={{height: "100%"}}>
			<Segment style={{height: "100%", margin: 0, padding: 0, border: 'none', boxShadow: 'none'}}>
			<div id="page" style={{height: "100%", display: "flex", background: "#1d1d1d"}}>
				<div id="left-panel" style={{height: "100%", background: "#181818", display: "flex", flex: 1, flexDirection: "column"}}>
					<div style={{flex: 1, background: "black", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center"}}>
						<a href=""><Icon name="product hunt" size="huge" style={{color: "#00B5AD"}} /></a>
						<p style={{color: "#00B5AD", fontSize: 17}}>posadskiy</p>
					</div>
					<div style={{flex: 2}}></div>
					<div id="menu" style={{flex: 4, display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
						<Button id="nonShadow" onClick={() => History.push(Page.MAIN)} basic color="teal" style={{marginRight: 0}} animated='fade'>
							<Button.Content visible><Icon name="home" size="big" /></Button.Content>
							<Button.Content hidden>About</Button.Content>
						</Button>
						<Button id="nonShadow" onClick={() => History.push(Page.SERVICES)} basic color="teal" style={{marginRight: 0}} animated='fade'>
							<Button.Content visible><Icon name="setting" size="big" /></Button.Content>
							<Button.Content hidden>Service</Button.Content>
						</Button>
						<Button id="nonShadow" onClick={() => History.push(Page.PROJECTS)} basic color="teal" style={{marginRight: 0}} animated='fade'>
							<Button.Content visible><Icon name="eye" size="big" /></Button.Content>
							<Button.Content hidden>Projects</Button.Content>
						</Button>
						<Button id="nonShadow" onClick={() => History.push(Page.CONTACT)} basic color="teal" style={{marginRight: 0}} animated='fade'>
							<Button.Content visible><Icon name="mail" size="big" /></Button.Content>
							<Button.Content hidden>Contact</Button.Content>
						</Button>
					</div>
					<div style={{flex: 2}}></div>
					<div id="social" style={{flex: 2, display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center"}}>
						<a href="https://www.linkedin.com/in/dimitri-posadskiy/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size="large" style={{color: "#00B5AD"}} /></a>
						<a href="https://github.com/posadskiy" target="_blank" rel="noopener noreferrer"><Icon name="github" size="large" style={{color: "#00B5AD"}} /></a>
						<a href="https://www.instagram.com/dimitri.posadskiy/" target="_blank" rel="noopener noreferrer"><Icon name="instagram" size="large" style={{color: "#00B5AD"}} /></a>
					</div>
				</div>
				<div style={{flex: 14, display: "flex"}}>
					<Routes />
				</div>
			</div>
			</Segment>
		</div>
		</Router>
	);
}

export default App;
