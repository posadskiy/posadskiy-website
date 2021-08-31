import React, {Component} from 'react';
import {Modal, Button} from "semantic-ui-react";

class AlertMessage extends Component {
  
  render() {
    const {
      isOpen,
      close,
      header,
      description,
      confirmText,
      button
    } = this.props;

    return (
      <Modal
        open={isOpen}
        onClose={close}
        trigger={button}
      >
        <Modal.Header>{header}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {description}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={close}>{confirmText}</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AlertMessage;
