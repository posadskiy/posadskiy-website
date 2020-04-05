import Main from './Main';
import Contact from './Contact';
import Project from './Projects';
import Service from './Service';
import Page404 from './Page404';
import {Pages} from '../../common';

export const desktopPages = {
	[Pages.MAIN.component]: Main,
	[Pages.CONTACT.component]: Contact,
	[Pages.PROJECTS.component]: Project,
	[Pages.SERVICES.component]: Service,
	[Pages.PAGE404.component]: Page404,
};
