import React, {Component} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography} from "@mui/material";

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
      <>
        {button}
        <Dialog
          open={isOpen}
          onClose={close}
          maxWidth="xs"
          fullWidth
        >
          <DialogTitle>{header}</DialogTitle>
          <DialogContent>
            <Typography>{description}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={close}>{confirmText}</Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

export default AlertMessage;
