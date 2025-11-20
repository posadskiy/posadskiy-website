import React, {Component} from 'react';
import {Button, Grid, Typography, Box} from "@mui/material";
import {Link} from "react-router-dom";

class Page404 extends Component {

	render() {
		return (
			<Grid container sx={{ height: '100vh' }} alignItems="center" justifyContent="center">
				<Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
					<Typography variant="h1">404</Typography>
					<Typography variant="h3">Page does not exist</Typography>
					<Button component={Link} to="/" variant="contained" color="primary" sx={{width: '100%', maxWidth: '300px'}}>Go to Home</Button>
				</Grid>
			</Grid>
		);
	}
}

export default Page404;
