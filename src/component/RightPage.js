import React, {Component} from 'react';
import {Icon, Input} from "semantic-ui-react";

class RightPage extends Component {
	render() {
		const {
			pageName,
		} = this.props;

		const pageUrl = 'https://posadskiy.com/' + pageName;
		return (
			<div style={{flex: 1, paddingLeft: "20px", paddingRight: "40px", display: "flex", flexDirection: "column", alignSelf: "center"}}>
				<div style={{flex: 2, display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
					<div style={{display: "flex", flexDirection: "row"}}>
						<div style={{flex: 1, display: "flex", flexDirection: "row", background: "white", paddingTop: "5px", paddingBottom: "5px", borderTopLeftRadius: "7px", borderTopRightRadius: "7px"}}>
							<Icon style={{flex: 1, alignSelf: "center", fontSize: "1.6em"}} name="book" />
							<p style={{flex: 3}}>{pageName}</p>
						</div>
						<div style={{flex: 2}}></div>
					</div>
					<div style={{background: "white", display: "flex", flexDirection: "row"}}>
						<Icon style={{flex: 1, alignSelf: "center", fontSize: "1.6em"}} name="arrow left" />
						<Icon style={{flex: 1, alignSelf: "center", fontSize: "1.6em"}} name="arrow right" />
						<Icon style={{flex: 1, alignSelf: "center", fontSize: "1.6em"}} name="redo" />
						<Input style={{flex: 15}} icon='info circle' iconPosition='left' value={pageUrl} />
					</div>
				</div>
				<div style={{flex: 5}}>
					{this.props.children}
				</div>
				<div style={{flex: 1}}>
					
				</div>
			</div>
		)
	}
}

export default RightPage;
