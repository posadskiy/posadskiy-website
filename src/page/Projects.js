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
									image="https://ya-webdesign.com/images250_/vector-financial-budget-6.png"
									header="Cost Accounting"
									description="Telegram Bot, that accepts purchase data, stores it and displays processed"
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="https://lh3.googleusercontent.com/wUv1E_wP8hcp1IvNdiMbN9iHZuWYbwCHlFYEY_jpcSx5V0v0L6iRzw4_c6fmzEkvbQ=w300"
									header="Currency Converter"
									description="Currency converter library for Java applications"
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="https://cdn4.iconfinder.com/data/icons/defaulticon/icons/png/256x256/media-repeat-alt.png"
									header="Skill Repeater"
									description="Train your skills and do not forget to repeat them"
								/>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<ProjectItem
									image="https://cdn.armut.com/UserPics/tr:w-325,h-325/0383ff40-f564-40ea-bd4a-0452b651278b.png"
									header="Skill Repeater"
									description="Train your skills and do not forget to repeat them"
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="https://ek-okna.ru/wp-content/uploads/2019/06/finansovoe-uchrezhdenie-300x300.png"
									header="Bank full-time work"
									description=""
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="https://bestcom.moscow/upload/medialibrary/80a/80af5b44f8183345f51d6c0e69557708.png"
									header="IoT soft"
									description=""
								/>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<ProjectItem
									image="https://cdn.shopify.com/s/files/1/1787/8943/products/9d8f7c026d0fa261bf72078b0087d06c_600x.png"
									header="Study Everyday"
									description=""
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="https://4.bp.blogspot.com/-HF4O7oVDeQw/XB0oWjydLBI/AAAAAAAAAfU/Nsn6kL8cgooeRNrVbTvoXOQ_jSYlsL3GgCLcBGAs/s320/overtime.png"
									header="Schedule Editor"
									description="Desktop app for editing university lessons schedule"
								/>
							</Grid.Column>
							<Grid.Column>
								<ProjectItem
									image="https://ya-webdesign.com/images250_/vector-financial-budget-6.png"
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
