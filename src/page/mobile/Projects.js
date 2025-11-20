import React, {Component} from 'react';
import {Grid} from "@mui/material";
import {Mobile,Desktop} from "../../component";
import {Project} from "../../common/Projects";

class Projects extends Component {
	render() {
		return (
			<Mobile.LeftRightPage>
				<Mobile.LeftPage pageName="Projects" paddingBottom="20px">
					<p>I'm moving forward on several fronts.</p>
					<p>At <span style={{color: "#00B5AD"}}>day job</span>, I base on business priorities. My motto is that
            technology should be selected for a specific task, but not using one technology for all tasks.</p>
					<p>In my free time, I develop <span style={{color: "#00B5AD"}}>solutions that help my family</span>. These
            solutions as applications, sites, or even
            scripts automate everyday processes, such as financial accounting, budget planning, or skills training.
            During this activity, I operate with unknown technologies, trying something new. The code and setup are
            always publicly available - anyone can use it for themselves.</p>
					<p>My <span style={{color: "#00B5AD"}}>Open Source libraries</span> are self-contained components that appear
            during development, prepares for publishing, maintains, and improves during their life cycle.</p>
				</Mobile.LeftPage>
				<Mobile.RightPage pageName="Projects">
					<Grid container spacing={1} sx={{margin: 0, background: "lightgray", height: "100%", width: "100%"}}>
						<Grid item xs={6} sm={4} sx={{padding: "5px"}}>
							<Desktop.ProjectItem
                project={Project.CostAccounting}
							/>
						</Grid>
						<Grid item xs={6} sm={4} sx={{padding: "5px"}}>
							<Desktop.ProjectItem
                project={Project.CurrencyConverter}
							/>
						</Grid>
						<Grid item xs={6} sm={4} sx={{padding: "5px"}}>
							<Desktop.ProjectItem
                project={Project.SkillRepeater}
							/>
						</Grid>

						<Grid item xs={6} sm={4} sx={{padding: "5px"}}>
							<Desktop.ProjectItem
                project={Project.StudyEveryday}
							/>
						</Grid>
						<Grid item xs={6} sm={4} sx={{padding: "5px"}}>
							<Desktop.ProjectItem
                project={Project.BankWork}
							/>
						</Grid>
						<Grid item xs={6} sm={4} sx={{padding: "5px"}}>
							<Desktop.ProjectItem
                project={Project.IoTWork}
							/>
						</Grid>

						<Grid item xs={6} sm={4} sx={{padding: "5px"}}>
							<Desktop.ProjectItem
                project={Project.SwingTeacher}
							/>
						</Grid>
						<Grid item xs={6} sm={4} sx={{padding: "5px"}}>
							<Desktop.ProjectItem
                project={Project.ScheduleEditor}
							/>
						</Grid>
						<Grid item xs={6} sm={4} sx={{padding: "5px"}}>
							<Desktop.ProjectItem
                project={Project.RestSecurity}
							/>
						</Grid>
					</Grid>
				</Mobile.RightPage>
			</Mobile.LeftRightPage>
		)
	}
}

export default Projects;
