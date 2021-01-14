import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Facebook, Instagram, Twitter, Link } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import { Button, IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  shareIcon: {
    cursor: 'pointer'
  }
}));

export default function CanvasShareBar() {
  const classes = useStyles();
  const socials = {
    'Twitter': <Twitter className={classes.shareIcon} />,
    'Facebook': <Facebook className={classes.shareIcon} />,
    'Instagram': <Instagram className={classes.shareIcon} />,
    'Copy link': <Link className={classes.shareIcon} />
  }

  return (
    <Grid container style={{
      paddingTop: '0.2em'
    }}>
      <Grid item md={1}>
        <Button variant="contained" color="primary" style={{
          marginTop: '0.35em'
        }}>
          Submit
        </Button>
      </Grid>
      <Grid item md={5}>
        <IconButton color="secondary">
          <Tooltip title="Twitter">
            <Twitter className={classes.shareIcon} />
          </Tooltip>
        </IconButton>

        <IconButton color="secondary">
          <Tooltip title="Facebook">
            <Facebook className={classes.shareIcon} />
          </Tooltip>
        </IconButton>

        <IconButton color="secondary">
          <Tooltip title="Instagram">
            <Instagram className={classes.shareIcon} />
          </Tooltip>
        </IconButton>

        <IconButton color="secondary">
          <Tooltip title="Copy link">
            <Link className={classes.shareIcon} />
          </Tooltip>
        </IconButton>  
        </Grid>
    </Grid>
    // <div style={{
    //   position: 'relative'
    // }}>
    //   <div style={{
    //     textAlign: 'left',
    //     paddingTop: '0.4em'
    //   }}>
    //     <Tooltip title="Twitter">
    //       <Twitter className={classes.shareIcon} />
    //     </Tooltip>
    //       <Tooltip title="Facebook">
    //       <Facebook className={classes.shareIcon} />
    //     </Tooltip>
    //     <Tooltip title="Instagram">
    //       <Instagram className={classes.shareIcon} />
    //     </Tooltip>
    //     <Tooltip title="Copy link">
    //       <Link className={classes.shareIcon} />
    //     </Tooltip>
    //   </div>
    // </div>
  );
}