import React, {Component} from 'react';
import {Grid, Image} from "semantic-ui-react";
import {LeftPage, LeftRightPage} from "../component";

class Projects extends Component {
	render() {
		return (
			<LeftRightPage>
				<LeftPage pageName="Projects">
					<p>I spend time for OpenSource solutions and free-to-use projects helps me in life</p>
					<p>I spend time for OpenSource solutions and free-to-use projects helps me in life</p>
					<p>I spend time for OpenSource solutions and free-to-use projects helps me in life</p>
					<p>I spend time for OpenSource solutions and free-to-use projects helps me in life</p>
				</LeftPage>
				<div style={{flex: 1, paddingLeft: "20px", paddingRight: "20px", display: "flex", flexDirection: "column", alignSelf: "center"}}>
					<div >
						<Grid columns={3} padded>
							<Grid.Column style={{padding: 0, margin: 0}}>
								<Image src='https://www.projectsmart.co.uk/img/data-security.png' />
							</Grid.Column>
							<Grid.Column style={{padding: 0, margin: 0}}>
								<Image src='https://cdn.skim.gs/image/upload/v1456343848/msi/19-mixed-media-owl-project_bsm1ja.jpg' />
							</Grid.Column>
							<Grid.Column style={{padding: 0, margin: 0}}>
								<Image src='https://i.pinimg.com/originals/d7/c2/1e/d7c21ed57581480afef65c8b08f8d1ae.jpg' />
							</Grid.Column>
							<Grid.Column style={{padding: 0, margin: 0}}>
								<Image src='https://s-media-cache-ak0.pinimg.com/736x/2a/f4/68/2af46843c64e0c7bfc25149f5d059dbf--symmetry-art-name-art-projects.jpg' />
							</Grid.Column>
							<Grid.Column style={{padding: 0, margin: 0}}>
								<Image src='http://kewaunee.in/image/thumbnail/services/turnkey_project_management/turnkey_project_management_thum.jpg' />
							</Grid.Column>
							<Grid.Column style={{padding: 0, margin: 0}}>
								<Image src='https://www.thekamasutra.co/assets/images/animated/g.gif' />
							</Grid.Column>
							<Grid.Column style={{padding: 0, margin: 0}}>
								<Image src='https://www.projectsmart.co.uk/img/data-security.png' />
							</Grid.Column>
							<Grid.Column style={{padding: 0, margin: 0}}>
								<Image src='https://cdn.skim.gs/image/upload/v1456343848/msi/19-mixed-media-owl-project_bsm1ja.jpg' />
							</Grid.Column>
							<Grid.Column style={{padding: 0, margin: 0}}>
								<Image src='https://i.pinimg.com/originals/d7/c2/1e/d7c21ed57581480afef65c8b08f8d1ae.jpg' />
							</Grid.Column>
						</Grid>
					</div>
				</div>
			</LeftRightPage>
		)
	}
}

export default Projects;
