import React, {Component} from 'react';
import {Button, Image, Reveal} from "semantic-ui-react";

class ProjectItem extends Component {
	render() {
		const {
			image,
			header,
			description,
		} = this.props;

		return (
			<Reveal animated='move up' style={{display: "flex", width: "100%", height: "100%"}}>
				<Reveal.Content visible style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "lightgray"}}>
					<Image style={{maxWidth: "70%", maxHeight: "70%", alignSelf: "center"}} src={image} />
				</Reveal.Content>
				<Reveal.Content hidden style={{alignSelf: "center"}}>
					<p style={{fontWeight: 900, margin: 0, textAlign: "center"}}>{header}</p>
					<p style={{textAlign: "center", marginBottom: "5px"}}>{description}</p>
					<Button basic color="teal" onClick={() => console.log(111)} style={{width: "100%"}}>Learn more</Button>
				</Reveal.Content>
			</Reveal>
		)
	}
}

export default ProjectItem;
