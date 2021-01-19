import React from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// reference: https://material-ui.com/components/modal/

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function SimpleModal({ formModalOpen, handleClose, zIndexMapping }) {
  const classes = useStyles();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <iframe 
        src={"https://docs.google.com/forms/d/e/1FAIpQLSeL-qiTWPPxeF5c9y6tst12R3P2UN--XnZ7PybY8FeBs4H4qA/viewform?embedded=true&usp=pp_url&entry.875432947=https://layersoflove.ca/?z%3D" + zIndexMapping} 
        width="800" height="700" frameborder="0" marginheight="1000" marginwidth="0">Loading…</iframe>    </div>
  );

  return (
    <div>
      <Modal
        open={formModalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}