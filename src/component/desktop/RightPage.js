import React, {Component} from 'react';
import {TextField, Box} from "@mui/material";
import {Book, ArrowBack, ArrowForward, Refresh, Info} from "@mui/icons-material";

class RightPage extends Component {
	render() {
		const {
			pageName,
		} = this.props;

		const pageUrl = 'https://posadskiy.com/' + pageName;
		return (
			<Box sx={{flex: 1, height: "100%", paddingLeft: "20px", paddingRight: "40px", display: "flex", flexDirection: "column", alignSelf: "center"}}>
				<Box sx={{flex: 2, display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
					<Box sx={{display: "flex", flexDirection: "row"}}>
						<Box sx={{flex: 1, display: "flex", flexDirection: "row", background: "white", paddingTop: "5px", paddingBottom: "5px", borderTopLeftRadius: "7px", borderTopRightRadius: "7px"}}>
							<Book sx={{flex: 1, alignSelf: "center", fontSize: "1.6em"}} />
							<p style={{flex: 3, margin: 0, alignSelf: "center"}}>{pageName}</p>
						</Box>
						<Box sx={{flex: 2}}></Box>
					</Box>
					<Box sx={{background: "white", display: "flex", flexDirection: "row", alignItems: "center"}}>
						<ArrowBack sx={{flex: 1, fontSize: "1.6em", cursor: "pointer"}} />
						<ArrowForward sx={{flex: 1, fontSize: "1.6em", cursor: "pointer"}} />
						<Refresh sx={{flex: 1, fontSize: "1.6em", cursor: "pointer"}} />
						<TextField
							value={pageUrl}
							size="small"
							sx={{flex: 15}}
							InputProps={{
								startAdornment: <Info sx={{mr: 1, color: "action.active"}} />
							}}
						/>
					</Box>
				</Box>
				<Box sx={{flex: 4, display: "flex"}}>
					{this.props.children}
				</Box>
				<Box sx={{flex: 2}}>
					
				</Box>
			</Box>
		)
	}
}

export default RightPage;
