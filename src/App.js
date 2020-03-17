import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Router} from "react-router-dom";
import {Segment} from "semantic-ui-react";
import './App.css';
import {History} from "./common";
import {Desktop, Mobile, Content} from './component';

function App() {
	return (
		<Router history={History.history}>
			<div style={{height: "100%"}}>
				<Segment style={{height: "100%", margin: 0, padding: 0, border: 'none', boxShadow: 'none'}}>
					<div id="page" style={{height: "100%", display: "flex", flexDirection: "row", background: "#1d1d1d"}}>
						<Desktop.Header>
							<Content />
						</Desktop.Header>
						<Mobile.Header>
							<Content />
						</Mobile.Header>
					</div>
				</Segment>
			</div>
		</Router>
	);
}

export default App;
