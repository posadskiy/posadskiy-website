import React, {Component} from 'react';
import {Desktop} from "../../component";
import {Button, TextField, List, ListItem, ListItemText, Box} from "@mui/material";
import {Telegram, Facebook, LinkedIn, Instagram} from "@mui/icons-material";
import emailjs from '@emailjs/browser';
import {SocialLink} from '../../common/Link';
import {AlertMessage} from "../../component/desktop";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    alert: {
      open: "",
      header: "",
      description: "",
      confirmText: "",
    }
  };
  
  clearForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }
  
  onMessageInput = (e) => {
    this.setState({message: e.target.value});
  }
  
  onNameInput = (e) => {
    this.setState({name: e.target.value});
  }

  onEmailInput = (e) => {
    this.setState({email: e.target.value});
  }
  
  setAlert = (header, description, confirmText) => {
    this.setState({
      alert: {
        open: true,
        header,
        description,
        confirmText,
      }
    })
  }
  
  closeAlert = () => {
    this.setState({
      alert: {
        open: false,
      }
    });
  }

  sendEmail = () => {
    const {
      name,
      email,
      message,
    } = this.state;
    
    if (!this.validation()) return;
    
    const {
      setLoading,
    } = this.props;
    
    setLoading(true);

    const params = {
      from_name: "User",
      name,
      email,
      message
    };

    emailjs.send('service_1zfv4cb', 'template_5fppk3g', params, 'user_76k57KfKEtGkRIGd7NJqc')
      .then(() => {
        setLoading(false);
        this.clearForm();
        this.setAlert("Success", "Your message is successfully sent", "OK");
      }, (error) => {
        this.setAlert("Something went wrong...", error.text, "OK");
      });
  }
  
  validation = () => {
    const {
      name,
      email,
      message,
    } = this.state;

    if (message.length < 30) {
      this.setAlert("Something went wrong...", "Please, write something more detailed", "OK");
      return false;
    }

    if (!name || name.length < 2) {
      this.setAlert("Something went wrong...", "Please, fill name", "OK");
      return false;
    }

    if (!email || email.length < 5) {
      this.setAlert("Something went wrong...", "Please, fill e-mail", "OK");
      return false;
    }

    return true;
  }
  
	render() {
    const {
      name,
      email,
      message,
      alert: {
        open,
        header,
        description,
        confirmText,
      }
    } = this.state;

		return (
			<Desktop.LeftRightPage>
				<Desktop.LeftPage pageName="Contact">
          <div>You can send me message via</div>
          <List>
            <ListItem component="a" href={SocialLink.Telegram} sx={{color: 'inherit', textDecoration: 'none'}}>
              <Telegram sx={{mr: 1}} />
              <ListItemText primary="Telegram" />
            </ListItem>
            <ListItem component="a" href={SocialLink.Messenger} sx={{color: 'inherit', textDecoration: 'none'}}>
              <Facebook sx={{mr: 1}} />
              <ListItemText primary="Messenger" />
            </ListItem>
            <ListItem component="a" href={SocialLink.Linkedin} sx={{color: 'inherit', textDecoration: 'none'}}>
              <LinkedIn sx={{mr: 1}} />
              <ListItemText primary="Linkedin" />
            </ListItem>
            <ListItem component="a" href={SocialLink.Instagram} sx={{color: 'inherit', textDecoration: 'none'}}>
              <Instagram sx={{mr: 1}} />
              <ListItemText primary="Instagram" />
            </ListItem>
          </List>
          <div>or the inline form on the right</div>
				</Desktop.LeftPage>
				<Desktop.RightPage pageName="Contact">
					<div style={{height: "100%", display: "flex", flexDirection: "column", background: "#dddddd"}}>
            <div style={{textAlign: "center", padding: "20px 0"}}>
              <div style={{height: "100%", width: "100%", fontFamily: "Fira Mono", fontSize: "24px", color: "#777"}}>Feedback form</div>
            </div>
						<Box sx={{textAlign: "center", padding: "3px 10px", height: "100%"}}>
							<TextField
								multiline
								fullWidth
								value={message}
								placeholder="Input message here"
								onChange={this.onMessageInput}
								sx={{
									height: "100%",
									'& .MuiInputBase-root': {
										fontFamily: "Fira Mono",
										fontSize: "24px",
										height: "100%"
									}
								}}
							/>
						</Box>
						<Box sx={{textAlign: "center", padding: "3px 10px"}}>
              <TextField
								fullWidth
								value={name}
								placeholder='Your name'
								onChange={this.onNameInput}
								sx={{
									'& .MuiInputBase-root': {
										fontFamily: "Fira Mono",
										fontSize: "18px"
									}
								}}
              />
						</Box>
						<Box sx={{textAlign: "center", padding: "3px 10px"}}>
              <TextField
								fullWidth
								value={email}
								placeholder='Email for answer'
								onChange={this.onEmailInput}
								sx={{
									'& .MuiInputBase-root': {
										fontFamily: "Fira Mono",
										fontSize: "18px"
									}
								}}
              />
						</Box>
						<Box sx={{ display: "flex", justifyContent: "center", width: "100%", padding: "3px 10px"}}>
              <AlertMessage
                isOpen={open}
                close={this.closeAlert}
                header={header}
                description={description}
                confirmText={confirmText}
                button={<Button variant="contained" sx={{marginBottom: "10px", width: "30%", backgroundColor: "#00B5AD", '&:hover': {backgroundColor: "#009c96"}}} onClick={this.sendEmail}>Send</Button>}
              />
						</Box>
					</div>
				</Desktop.RightPage>
			</Desktop.LeftRightPage>
		)
	}
}

export default Contact;
