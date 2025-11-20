import React, {Component} from 'react';
import {Routes as RouterRoutes, Route} from "react-router-dom";
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
			<RouterRoutes>
				<Route path={MAIN.url} element={<Page pageName={MAIN.component} />}/>
				<Route path={SERVICES.url} element={<Page pageName={SERVICES.component} />}/>
				<Route path={PROJECTS.url} element={<Page pageName={PROJECTS.component} />}/>
				<Route path={CONTACT.url} element={<Page pageName={CONTACT.component} />}/>
				<Route path="*" element={<Page pageName={PAGE404.component}/>}/>
			</RouterRoutes>
		)
	}
}

export default Routes;
