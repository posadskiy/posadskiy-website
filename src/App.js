import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Box} from "@mui/material";
import './App.css';
import {Desktop, Mobile, Content} from './component';
import {NavigationProvider} from './common/NavigationProvider';

function App() {
	return (
		<BrowserRouter>
			<NavigationProvider>
				<Box sx={{height: "100%"}}>
					<Box sx={{height: "100%", margin: 0, padding: 0, border: 'none', boxShadow: 'none'}}>
						<div id="page" style={{height: "100%", display: "flex", flexDirection: "row", background: "#1d1d1d"}}>
							<Desktop.Header>
								<Content />
							</Desktop.Header>
							<Mobile.Header>
								<Content />
							</Mobile.Header>
						</div>
					</Box>
				</Box>
			</NavigationProvider>
		</BrowserRouter>
	);
}

export default App;
