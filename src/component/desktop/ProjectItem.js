import React, {Component} from 'react';
import {Button, Box} from "@mui/material";
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
			<Box
				sx={{
					display: "flex",
					width: "100%",
					height: "100%",
					position: "relative",
					"&:hover .project-content-hidden": {
						opacity: 1,
						transform: "translateY(0)"
					},
					"&:hover .project-content-visible": {
						opacity: 0
					}
				}}
			>
				<Box
					className="project-content-visible"
					sx={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						background: "lightgray",
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						transition: "opacity 0.3s"
					}}
				>
					<img src={getProjectIconLink(icon)} alt={header} style={{maxWidth: "70%", maxHeight: "70%", alignSelf: "center", objectFit: "contain"}} />
				</Box>
				<Box
					className="project-content-hidden"
					sx={{
						alignSelf: "center",
						opacity: 0,
						transform: "translateY(20px)",
						transition: "all 0.3s",
						width: "100%",
						padding: 2,
						textAlign: "center"
					}}
				>
					<p style={{fontWeight: 900, margin: 0, textAlign: "center"}}>{header}</p>
					<p style={{textAlign: "center", marginBottom: "5px"}}>{description}</p>
					{!!onClick && (
						<Button variant="outlined" color="primary" onClick={() => onClick(project)} sx={{width: "100%", borderColor: "#00B5AD", color: "#00B5AD", '&:hover': {borderColor: "#009c96", backgroundColor: "rgba(0, 181, 173, 0.1)"}}}>
							Learn more
						</Button>
					)}
				</Box>
			</Box>
		)
	}
}

export default ProjectItem;
