import React, {Component} from 'react';
import {Button, Icon, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {History, Pages} from "../../common";
import {Container} from "./index";
import {SocialLink} from './../../common/Link'
import {Logo} from "../../common/Images";

class Header extends Component {
	render() {
		const {
			children,
		} = this.props;

		return (
			<Container>
				<div id="left-panel"
				     style={{height: "100%", background: "#181818", display: "flex", flex: 1, flexDirection: "column"}}>
					<div style={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						alignItems: "center"
					}}>
						<Image 
              as={Link} 
              to={"/"} 
              style={{maxWidth: "80%", maxHeight: "80%"}} 
              src={Logo.BlackCircle.get(Logo.BlackCircle.size128)}
            />
					</div>
					<div style={{flex: 2}}></div>
					<div id="menu" style={{flex: 4, display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
						{/*<Button id="nonShadow" onClick={() => History.push(Page.SERVICES)} basic color="teal"
						        style={{marginRight: 0, paddingLeft: 0}} animated='fade'>
							<Button.Content visible><Icon name="setting" size="big" style={{marginRight: 0}}/></Button.Content>
							<Button.Content hidden>Service</Button.Content>
						</Button>*/}
						<Button id="nonShadow" onClick={() => History.push(Pages.PROJECTS.url)} basic color="teal"
						        style={{marginRight: 0, paddingLeft: 0}} animated='fade'>
							<Button.Content visible><Icon name="eye" size="big" style={{marginRight: 0}}/></Button.Content>
							<Button.Content hidden>Projects</Button.Content>
						</Button>
					  <Button id="nonShadow" onClick={() => History.push(Pages.CONTACT.url)} basic color="teal"
						        style={{marginRight: 0, paddingLeft: 0}} animated='fade'>
							<Button.Content visible><Icon name="mail" size="big" style={{marginRight: 0}}/></Button.Content>
							<Button.Content hidden>Contact</Button.Content>
            </Button>
					</div>
					<div style={{flex: 2}}></div>
					<div id="social" style={{
						flex: 2,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						alignItems: "center"
					}}>
						<a href={SocialLink.Linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin"
                    size="large" 
                    style={{color: "#00B5AD"}}
              />
						</a>
						<a href={SocialLink.GitHub} target="_blank" rel="noopener noreferrer">
              <Icon name="github"
                    size="large"
                    style={{color: "#00B5AD"}}
              />
						</a>
						<a href={SocialLink.Instagram} target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" 
                    size="large" 
                    style={{color: "#00B5AD"}}
              />
						</a>
					</div>
				</div>
				{children}
			</Container>
		)
	}
}

export default Header;
