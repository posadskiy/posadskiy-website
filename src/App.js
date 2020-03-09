import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Router} from "react-router-dom";
import {Segment} from "semantic-ui-react";
import './App.css';
import Routes from "./Routes";
import {History} from "./common";
import {DesktopHeader, MobileHeader} from './component';

function App() {
	return (
		<Router history={History.history}>
			<div style={{height: "100%"}}>
				<Segment style={{height: "100%", margin: 0, padding: 0, border: 'none', boxShadow: 'none'}}>
					<div id="page" style={{height: "100%", display: "flex", flexDirection: "row", background: "#1d1d1d"}}>
						<DesktopHeader><div style={{flex: 19, display: "flex"}}>
							<Routes/>
						</div></DesktopHeader>
						<MobileHeader><div style={{flex: 19, display: "flex"}}>
							<Routes/>
						</div></MobileHeader>
						
					</div>
				</Segment>
			</div>
		</Router>
	);
}

export default App;
