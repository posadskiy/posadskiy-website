import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import {Pages} from './common';
import {Page} from './page'

class Routes extends Component {
	render() {
		const {
			MAIN,
			SERVICES,
			PROJECTS,
			CONTACT,
			PAGE404,
		} = Pages;

		return (
			<Switch>
				<Route exact path={MAIN.url} component={() => <Page pageName={MAIN.component} />}/>
				<Route exact path={SERVICES.url} component={() => <Page pageName={SERVICES.component} />}/>
				<Route exact path={PROJECTS.url} component={() => <Page pageName={PROJECTS.component} />}/>
				<Route exact path={CONTACT.url} component={() => <Page pageName={CONTACT.component} />}/>
				<Route component={() => <Page pageName={PAGE404.component}/>}/>
			</Switch>
		)
	}
}

export default Routes;
