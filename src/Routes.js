import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import {Page} from './common';
import {
	Main,
	Contact,
	Project,
	Service,
} from "./page";

class Routes extends Component {
	render() {
		const {
			MAIN,
			SERVICES,
			PROJECTS,
			CONTACT,
		} = Page;

		return (
			<Switch>
				<Route path={MAIN} exact component={Main}/>
				<Route exact path={SERVICES} component={Service}/>
				<Route exact path={PROJECTS} component={Project}/>
				<Route exact path={CONTACT} component={Contact}/>
				<Route component={() => {}}/>
			</Switch>
		)
	}
}

export default Routes;
