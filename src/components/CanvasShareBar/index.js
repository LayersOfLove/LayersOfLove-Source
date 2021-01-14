import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Facebook, Instagram, Twitter, Link } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  shareIcon: {
    cursor: 'pointer'
  }
}));

export default function CanvasShareBar() {
  const classes = useStyles();

  return (
    <div style={{
      textAlign: 'right',
      paddingRight: '1.8em'
    }}>
      Share on social media:
      <div>
        <Tooltip title="Twitter">
          <Twitter className={classes.shareIcon} />
        </Tooltip>
          <Tooltip title="Facebook">
          <Facebook className={classes.shareIcon} />
        </Tooltip>
        <Tooltip title="Instagram">
          <Instagram className={classes.shareIcon} />
        </Tooltip>
        <Tooltip title="Copy link">
          <Link className={classes.shareIcon} />
        </Tooltip>
      </div>
    </div>
  );
}