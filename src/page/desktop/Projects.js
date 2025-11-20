import React, {Component} from 'react';
import {Grid} from "@mui/material";
import {Desktop} from "../../component";
import {Project} from '../../common/Projects';
import ProjectView from "../../component/desktop/ProjectView";

class Projects extends Component {
  state = {
    isProjectViewOpen: false,
    currentProjectView: {
      image: '',
      header: '',
      description: '',
      confirmText: '',
    }
  }

  onClick = (project) => {
    this.setState({
      isProjectViewOpen: true,
      currentProjectView: {
        image: project.icon,
        header: project.name,
        description: project.description,
        confirmText: "OK",
      }
    })
  }
  
  closeProjectView = () => {
    this.setState({
      isProjectViewOpen: false,
    });
  }

	render() {
    const {
      isProjectViewOpen,
      currentProjectView: {
        image,
        header,
        description,
        confirmText
      },
    } = this.state;

		return (
		  <>
		  <ProjectView 
        isOpen={isProjectViewOpen}
        close={this.closeProjectView}
        image={image}
        header={header}
        description={description}
        confirmText={confirmText}
      />
			<Desktop.LeftRightPage>
				<Desktop.LeftPage pageName="Projects">
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
				</Desktop.LeftPage>
				<Desktop.RightPage pageName="Projects">
					<Grid container spacing={1} sx={{margin: 0, background: "lightgray"}}>
						<Grid item xs={4}>
							<Desktop.ProjectItem
								project={Project.CostAccounting}
                onClick={this.onClick}
							/>
						</Grid>
						<Grid item xs={4}>
							<Desktop.ProjectItem
                project={Project.CurrencyConverter}
                onClick={this.onClick}
							/>
						</Grid>
						<Grid item xs={4}>
							<Desktop.ProjectItem
                project={Project.SkillRepeater}
                onClick={this.onClick}
							/>
						</Grid>

						<Grid item xs={4}>
							<Desktop.ProjectItem
                project={Project.StudyEveryday}
                onClick={this.onClick}
							/>
						</Grid>
						<Grid item xs={4}>
							<Desktop.ProjectItem
                project={Project.BankWork}
                onClick={this.onClick}
							/>
						</Grid>
						<Grid item xs={4}>
							<Desktop.ProjectItem
								project={Project.IoTWork}
                onClick={this.onClick}
							/>
						</Grid>

						<Grid item xs={4}>
							<Desktop.ProjectItem
								project={Project.SwingTeacher}
                onClick={this.onClick}
							/>
						</Grid>
						<Grid item xs={4}>
							<Desktop.ProjectItem
                project={Project.ScheduleEditor}
                onClick={this.onClick}
							/>
						</Grid>
						<Grid item xs={4}>
							<Desktop.ProjectItem
								project={Project.RestSecurity}
                onClick={this.onClick}
							/>
						</Grid>
					</Grid>
				</Desktop.RightPage>
			</Desktop.LeftRightPage>
      </>
		)
	}
}

export default Projects;
