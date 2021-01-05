import React from 'react';
import Image from '../Image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  canvasDiv: {
    border: '2px solid black'
  }
}));

export default function Canvas() {
  const classes = useStyles();
  return (
    <div className={classes.canvasDiv}>
      <Image index={2} size="large"/>
    </div>
  );
}