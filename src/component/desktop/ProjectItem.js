import React, {Component} from 'react';
import {Button, Image, Reveal} from "semantic-ui-react";
import {getProjectIconLink} from '../../common/Projects';

class ProjectItem extends Component {
	render() {
		const {
			project: {
			  icon,
        header,
        description,
      },
      project,
      onClick
		} = this.props;

		return (
			<Reveal animated='move up' style={{display: "flex", width: "100%", height: "100%"}}>
				<Reveal.Content visible style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "lightgray"}}>
					<Image style={{maxWidth: "70%", maxHeight: "70%", alignSelf: "center"}} src={getProjectIconLink(icon)} />
				</Reveal.Content>
				<Reveal.Content hidden style={{alignSelf: "center"}}>
					<p style={{fontWeight: 900, margin: 0, textAlign: "center"}}>{header}</p>
					<p style={{textAlign: "center", marginBottom: "5px"}}>{description}</p>
					<Button basic color="teal" onClick={() => onClick(project)} style={{width: "100%"}}>Learn more</Button>
				</Reveal.Content>
			</Reveal>
		)
	}
}

export default ProjectItem;
