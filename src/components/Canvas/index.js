import React, { useState } from 'react';
import Image from '../Image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  canvasDiv: {
    border: '2px solid black'
  }, 
  blankDiv: {
    border: '2px solid black',
    width: '680.667px',
    height: '458.2px'
  }
}));

export default function Canvas() {
  const classes = useStyles();
  const [isBlank, setIsBlank] = useState(true);

  return (
    <>
      {isBlank ? 
        <div className={classes.blankDiv}></div>
      :
        <div className={classes.canvasDiv}>
          <Image index={1} size="large"/>
        </div>
      }
    </>
  );
}