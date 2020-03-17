import React, {Component} from 'react';
import {Container, Icon, Menu, Segment, Sidebar} from "semantic-ui-react";
import {Container as MobileContainer} from "./index";
import {Link} from "react-router-dom";
import {History} from '../../common';

class Header extends Component {
	state = {};

	handleSidebarHide = () => this.setState({sidebarOpened: false});

	handleToggle = () => this.setState({sidebarOpened: true});
	
	onMenuItemClick = (tab) => {
		this.handleSidebarHide();
	};

	render() {
		const {children} = this.props;
		const {sidebarOpened} = this.state;

		return (
			<MobileContainer>
				<Sidebar
					as={Menu}
					animation='overlay'
					inverted
					onHide={this.handleSidebarHide}
					vertical
					visible={sidebarOpened}
					size="massive"
					style={{display: "flex", flexDirection: "column-reverse", width: "50%"}}
				>
					<Menu.Item as={Link} to="/" active={History.getLocation()?.pathname === "/"} onClick={this.handleSidebarHide}>Home</Menu.Item>
					<Menu.Item style={{marginTop: "80px"}} as={Link} to="/projects" active={History.getLocation()?.pathname === "/projects"} onClick={this.handleSidebarHide}>Projects</Menu.Item>
					<Menu.Item as='a' href="https://www.linkedin.com/in/dimitri-posadskiy/" onClick={this.handleSidebarHide}>
						<Icon name="github" style={{color: "#00B5AD"}}/>GitHub
					</Menu.Item>
					<Menu.Item as='a' href="https://github.com/posadskiy" onClick={this.handleSidebarHide}>
						<Icon name="linkedin" style={{color: "#00B5AD"}}/>Linkedin
					</Menu.Item>
					<Menu.Item as='a' href="https://www.instagram.com/dimitri.posadskiy/" onClick={this.handleSidebarHide}>
						<Icon name="instagram" style={{color: "#00B5AD"}}/>Instagram
					</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Segment
						inverted
						textAlign='center'
						style={{padding: 0, height: "100%", width: 0, bottom: 0, position: "absolute"}}
						vertical
					>
						<Container>
							<Menu pointing secondary size='large'>
								<Menu.Item style={{zIndex: 10, bottom: 0, position: "absolute"}} onClick={this.handleToggle}>
									<Icon style={{color: "#00B5AD"}} name='sidebar'/>
								</Menu.Item>
							</Menu>
						</Container>
					</Segment>

					{children}
				</Sidebar.Pusher>
			</MobileContainer>
		)
	}
}

export default Header;
