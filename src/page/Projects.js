import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";
import {LeftPage, LeftRightPage, ProjectItem, RightPage} from "../component";

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
				<RightPage onFocus={() => console.log(111)} pageName="Projects">
					<Grid columns={3} divided style={{margin: 0, background: "white"}}>
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
									description=""
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="bank-work-icon.png"
									header="Bank full-time work"
									description=""
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="iot-work-icon.png"
									header="IoT soft"
									description=""
								/>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<ProjectItem
									image="swing-teacher-icon.png"
									header="Swing Teacher"
									description=""
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
