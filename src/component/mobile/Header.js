import React, {Component} from 'react';
import {Drawer, List, ListItem, ListItemText, Box, IconButton, Container as MuiContainer} from "@mui/material";
import {Menu as MenuIcon, GitHub, LinkedIn, Instagram} from "@mui/icons-material";
import {Container as MobileContainer} from "./index";
import {Link} from "react-router-dom";
import {Pages} from '../../common';

class Header extends Component {
	state = {};

	handleSidebarHide = () => this.setState({sidebarOpened: false});

	handleToggle = () => this.setState({sidebarOpened: true});

	render() {
		const {children} = this.props;
		const {sidebarOpened} = this.state;

		return (
			<MobileContainer>
				<Drawer
					anchor="left"
					open={sidebarOpened}
					onClose={this.handleSidebarHide}
					sx={{width: "50%"}}
				>
					<Box sx={{width: "100%", display: "flex", flexDirection: "column-reverse", minHeight: "100vh", bgcolor: "#1d1d1d", color: "white"}}>
						<List>
							<ListItem component={Link} to={Pages.MAIN.url} onClick={this.handleSidebarHide} sx={{color: window.location.pathname === Pages.MAIN.url ? "#00B5AD" : "inherit"}}>
								<ListItemText primary="Home" />
							</ListItem>
							<ListItem component={Link} to={Pages.PROJECTS.url} onClick={this.handleSidebarHide} sx={{mt: 10, color: window.location.pathname === Pages.PROJECTS.url ? "#00B5AD" : "inherit"}}>
								<ListItemText primary="Projects" />
							</ListItem>
							<ListItem component="a" href="https://www.linkedin.com/in/dimitri-posadskiy/" onClick={this.handleSidebarHide} sx={{color: "#00B5AD"}}>
								<GitHub sx={{mr: 1}} />
								<ListItemText primary="GitHub" />
							</ListItem>
							<ListItem component="a" href="https://github.com/posadskiy" onClick={this.handleSidebarHide} sx={{color: "#00B5AD"}}>
								<LinkedIn sx={{mr: 1}} />
								<ListItemText primary="Linkedin" />
							</ListItem>
							<ListItem component="a" href="https://www.instagram.com/dimitri.posadskiy/" onClick={this.handleSidebarHide} sx={{color: "#00B5AD"}}>
								<Instagram sx={{mr: 1}} />
								<ListItemText primary="Instagram" />
							</ListItem>
						</List>
					</Box>
				</Drawer>

				<Box sx={{position: "relative"}}>
					<Box
						sx={{
							padding: 0,
							height: "100%",
							width: 0,
							bottom: 0,
							position: "absolute",
							textAlign: "center"
						}}
					>
						<MuiContainer>
							<Box sx={{zIndex: 10, bottom: 0, position: "absolute"}}>
								<IconButton onClick={this.handleToggle} sx={{color: "#00B5AD"}}>
									<MenuIcon />
								</IconButton>
							</Box>
						</MuiContainer>
					</Box>

					{children}
				</Box>
			</MobileContainer>
		)
	}
}

export default Header;
