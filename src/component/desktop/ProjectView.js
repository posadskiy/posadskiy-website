import React, {Component} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Typography} from "@mui/material";
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
      <>
        {button}
        <Dialog
          open={isOpen}
          onClose={close}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>{header}</DialogTitle>
          <DialogContent>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
              <img src={getProjectIconLink(image)} alt={header} style={{maxWidth: '200px', height: 'auto'}} />
              <Typography>{description}</Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={close}>{confirmText}</Button>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

export default ProjectView;
