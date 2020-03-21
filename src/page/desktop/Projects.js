import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import {Desktop} from "../../component";

class Projects extends Component {
	render() {
		return (
			<Desktop.LeftRightPage>
				<Desktop.LeftPage pageName="Projects">
					<p>My projects are divided into three types.</p>
					<p>At <span style={{color: "#00B5AD"}}>day job</span>, I am based on business priorities. I select a solution
						and technology for a specific task.</p>
					<p>I develop <span style={{color: "#00B5AD"}}>solutions that help</span> my family in free time. These
						solutions automate everyday processes, such as financial accounting or skills training. Here I try new
						technologies. The code and setup are always publicly available - anyone can use it for themselves.</p>
					<p>My <span style={{color: "#00B5AD"}}>Open Source libraries</span> are self-contained components that
						appeared during development. If I find a way to make the library better, I’m releasing an update. Of course,
						I fix bugs found by users and provide support.</p>
				</Desktop.LeftPage>
				<Desktop.RightPage pageName="Projects">
					<Grid columns={3} divided style={{margin: 0, background: "lightgray"}}>
						<Grid.Column>
							<Desktop.ProjectItem
								image="cost-accounting-icon.png"
								header="Cost Accounting"
								description="Telegram Bot, that accepts purchase data, stores it and displays processed"
							/>
						</Grid.Column>
						<Grid.Column>
							<Desktop.ProjectItem
								image="currency-converter-icon.png"
								header="Currency Converter"
								description="Currency converter library for Java applications"
							/>
						</Grid.Column>
						<Grid.Column>
							<Desktop.ProjectItem
								image="skill-repeater-icon.png"
								header="Skill Repeater"
								description="Train your skills and do not forget to repeat them"
							/>
						</Grid.Column>

						<Grid.Column>
							<Desktop.ProjectItem
								image="study-everyday-icon.png"
								header="Study Everyday"
								description="Try new technologies and move to modern full-stack guide"
							/>
						</Grid.Column>
						<Grid.Column>
							<Desktop.ProjectItem
								image="bank-work-icon.png"
								header="Bank full-time work"
								description="Container, mobile and server apps for the biggest russian bank"
							/>
						</Grid.Column>
						<Grid.Column>
							<Desktop.ProjectItem
								image="iot-work-icon.png"
								header="IoT soft"
								description="Server-side, AI and ML solutions for climate intelligence start up"
							/>
						</Grid.Column>

						<Grid.Column>
							<Desktop.ProjectItem
								image="swing-teacher-icon.png"
								header="Swing Teacher"
								description="Container app for learning Java Swing with tasks and check system"
							/>
						</Grid.Column>
						<Grid.Column>
							<Desktop.ProjectItem
								image="schedule-editor-icon.png"
								header="Schedule Editor"
								description="Container app for editing university lessons schedule"
							/>
						</Grid.Column>
						<Grid.Column>
							<Desktop.ProjectItem
								image="cost-accounting-icon.png"
								header="Cost Accounting"
								description="Container App accepts purchase data, stores it and displays processed"
							/>
						</Grid.Column>
					</Grid>
				</Desktop.RightPage>
			</Desktop.LeftRightPage>
		)
	}
}

export default Projects;
