import React, {Component} from 'react';
import {Modal, Button, Image} from "semantic-ui-react";
import {getProjectIconLink} from "../../common/Projects";

class ProjectView extends Component {
  
  render() {
    const {
      isOpen,
      close,
      image,
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
        <Modal.Content image>
          <Image size='medium' src={getProjectIconLink(image)} wrapped />
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

export default ProjectView;
