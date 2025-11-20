import React, {Component} from 'react';
import {Button, Box} from "@mui/material";
import {Visibility, Mail, LinkedIn as LinkedInIcon, GitHub, Instagram as InstagramIcon} from "@mui/icons-material";
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
					<Box sx={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						alignItems: "center"
					}}>
						<Box
              component={Link} 
              to={"/"} 
              sx={{maxWidth: "80%", maxHeight: "80%", display: "block"}}
            >
              <img src={Logo.BlackCircle.get(Logo.BlackCircle.size128)} alt="Logo" style={{maxWidth: "100%", height: "auto"}} />
            </Box>
					</Box>
					<div style={{flex: 2}}></div>
					<Box id="menu" sx={{flex: 4, display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
						<Button 
							id="nonShadow" 
							onClick={() => History.push(Pages.PROJECTS.url)} 
							variant="text"
							color="primary"
							sx={{marginRight: 0, paddingLeft: 0, color: "#00B5AD", justifyContent: "flex-start"}}
							startIcon={<Visibility />}
						>
							Projects
						</Button>
						<Button 
							id="nonShadow" 
							onClick={() => History.push(Pages.CONTACT.url)} 
							variant="text"
							color="primary"
							sx={{marginRight: 0, paddingLeft: 0, color: "#00B5AD", justifyContent: "flex-start"}}
							startIcon={<Mail />}
						>
							Contact
						</Button>
					</Box>
					<div style={{flex: 2}}></div>
					<Box id="social" sx={{
						flex: 2,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
						alignItems: "center"
					}}>
						<a href={SocialLink.Linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{fontSize: "2rem", color: "#00B5AD"}} />
						</a>
						<a href={SocialLink.GitHub} target="_blank" rel="noopener noreferrer">
              <GitHub sx={{fontSize: "2rem", color: "#00B5AD"}} />
						</a>
						<a href={SocialLink.Instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={{fontSize: "2rem", color: "#00B5AD"}} />
						</a>
					</Box>
				</div>
				{children}
			</Container>
		)
	}
}

export default Header;
