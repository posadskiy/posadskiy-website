import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import {LeftPage, LeftRightPage, ProjectItem, RightPage} from "../component";

class Projects extends Component {
	render() {
		return (
			<LeftRightPage>
				<LeftPage pageName="Projects">
					<p>My projects are divided into three types.</p>
					<p>At <span style={{color: "#00B5AD"}}>day job</span>, I am based on business priorities. I select a solution and technology for a specific task.</p>
					<p>I develop <span style={{color: "#00B5AD"}}>solutions that help</span> my family in free time. These solutions automate everyday processes, such as financial accounting or skills training. Here I try new technologies. The code and setup are always publicly available - anyone can use it for themselves.</p>
					<p>My <span style={{color: "#00B5AD"}}>Open Source libraries</span> are self-contained components that appeared during development. If I find a way to make the library better, I’m releasing an update. Of course, I fix bugs found by users and provide support.</p>
				</LeftPage>
				<RightPage pageName="Projects">
					<Grid columns={2} divided style={{margin: 0, background: "lightgray"}}>
						<Grid.Row>
							<Grid.Column>
								<ProjectItem
									image="cost-accounting-icon.png"
									header="Cost Accounting"
									description="Telegram Bot, that accepts purchase data, stores it and displays processed"
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="currency-converter-icon.png"
									header="Currency Converter"
									description="Currency converter library for Java applications"
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="skill-repeater-icon.png"
									header="Skill Repeater"
									description="Train your skills and do not forget to repeat them"
								/>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<ProjectItem
									image="study-everyday-icon.png"
									header="Study Everyday"
									description="Try new technologies and move to modern full-stack guide"
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="bank-work-icon.png"
									header="Bank full-time work"
									description="Desktop, mobile and server apps for the biggest russian bank"
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="iot-work-icon.png"
									header="IoT soft"
									description="Server-side, AI and ML solutions for climate intelligence start up"
								/>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<ProjectItem
									image="swing-teacher-icon.png"
									header="Swing Teacher"
									description="Desktop app for learning Java Swing with tasks and check system"
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="schedule-editor-icon.png"
									header="Schedule Editor"
									description="Desktop app for editing university lessons schedule"
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="cost-accounting-icon.png"
									header="Cost Accounting"
									description="Mobile App accepts purchase data, stores it and displays processed"
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</RightPage>
			</LeftRightPage>
		)
	}
}

export default Projects;
