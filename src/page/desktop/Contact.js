import React, {Component} from 'react';
import {Desktop} from "../../component";
import {Button, TextArea, Input, Icon, List} from "semantic-ui-react";
import emailjs from 'emailjs-com';
import Link from '../../common/Link';
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
          <List divided inverted selection>
            <List.Item as='a' href={Link.Telegram}><Icon name="telegram" />Telegram</List.Item>
            <List.Item as='a' href={Link.Messenger}><Icon name="facebook messenger" />Messenger</List.Item>
            <List.Item as='a' href={Link.Linkedin}><Icon name="linkedin" />Linkedin</List.Item>
            <List.Item as='a' href={Link.Instagram}><Icon name="instagram" />Instagram</List.Item>
          </List>
          <div>or the inline form on the right</div>
				</Desktop.LeftPage>
				<Desktop.RightPage pageName="Contact">
					<div style={{height: "100%", display: "flex", flexDirection: "column", background: "#dddddd"}}>
						<div style={{textAlign: "center", padding: "3px 10px", height: "100%"}}>
							<TextArea style={{height: "100%", width: "100%", fontFamily: "Fira Mono", fontSize: "24px"}}
                        value={message}
							          placeholder="Input message here"
                        onInput={this.onMessageInput}
              />
						</div>
						<div style={{textAlign: "center", padding: "3px 10px"}}>
              <Input style={{fontFamily: "Fira Mono", fontSize: "18px"}}
                     value={name}
                     placeholder='Your name'
                     onChange={this.onNameInput}
                     icon={{ name: 'smile outline', circular: true, link: true, position: 'right' }}
              />
						</div>
						<div style={{ textAlign: "center", padding: "3px 10px"}}>
              <Input style={{fontFamily: "Fira Mono", fontSize: "18px"}}
                     value={email}
                     placeholder='Email for answer'
                     onChange={this.onEmailInput}
                     icon={{ name: 'at', circular: true, link: true, position: 'right' }}
              />
						</div>
						<div style={{ display: "flex", justifyContent: "center", width: "100%", padding: "3px 10px"}}>
              <AlertMessage
                isOpen={open}
                close={this.closeAlert}
                header={header}
                description={description}
                confirmText={confirmText}
                button={<Button style={{marginBottom: "10px", width: "30%", background: "#00B5AD"}} onClick={this.sendEmail}>Send</Button>}
              />
						</div>
					</div>
				</Desktop.RightPage>
			</Desktop.LeftRightPage>
		)
	}
}

export default Contact;
