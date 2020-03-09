import React, {Component} from 'react';
import {Utils} from '../common';
import {Responsive, Sidebar, Menu, Segment, Container, Icon} from "semantic-ui-react";

class MobileHeader extends Component {
	state = {};

	handleSidebarHide = () => this.setState({ sidebarOpened: false });

	handleToggle = () => this.setState({ sidebarOpened: true });
	
	render() {
		const {children} = this.props;
		const {sidebarOpened} = this.state;
		
		return (
			<Responsive
				as={Sidebar.Pushable}
				getWidth={() => Utils.getWidth(Responsive.onlyMobile.minWidth)}
				maxWidth={Responsive.onlyMobile.maxWidth}
				style={{position: "absolute", width: "100%", overflowX: "auto"}}
			>
				<Sidebar
					as={Menu}
					animation='overlay'
					inverted
					onHide={this.handleSidebarHide}
					vertical
					visible={sidebarOpened}
				>
					<Menu.Item as='a' active>Home</Menu.Item>
					<Menu.Item as='a'>Work</Menu.Item>
					<Menu.Item as='a'>Company</Menu.Item>
					<Menu.Item as='a'>Careers</Menu.Item>
					<Menu.Item as='a'>Log in</Menu.Item>
					<Menu.Item as='a'>Sign Up</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Segment
						inverted
						textAlign='center'
						style={{padding: 0, height: 0, width: 0}}
						vertical
					>
						<Container>
							<Menu pointing secondary size='large'>
								<Menu.Item onClick={this.handleToggle}>
									<Icon name='sidebar'/>
								</Menu.Item>
							</Menu>
						</Container>
					</Segment>

					{children}
				</Sidebar.Pusher>
			</Responsive>
		)
	}
}

export default MobileHeader;
