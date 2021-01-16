import React from 'react';
import { Facebook, Instagram, Twitter, Link } from '@material-ui/icons';
import { 
  Button,
  IconButton, 
  Grid,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import {
  FacebookShareButton,
  TwitterShareButton
} from 'react-share';

const useStyles = makeStyles(theme => ({
  shareIcon: {
    cursor: 'pointer'
  }
}));

const BASE_URL = "https://layersoflove.ca"

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
      
      {/* Twitter */}
      <Grid item md={5}>
        <TwitterShareButton 
          url={BASE_URL}
          title="I just made a #LayersofLabourofLove digital collage with @_khadija_a_ and @laurakaykeeling! #DesignTO21"
          related={["_khadija_a_", "laurakaykeeling"]}
        >
          <IconButton color="secondary">
            <Tooltip title="Twitter">
              <Twitter className={classes.shareIcon} />
            </Tooltip>
          </IconButton>
        </TwitterShareButton>

      {/* Facebook */}
        <FacebookShareButton 
          url={BASE_URL}
          quote="I just made a #LayersofLabourofLove digital collage with Khadija Aziz and Laura Keeling! #DesignTO21"   
          hashtag="#LayersofLabourofLove"     
        >
          <IconButton color="secondary">
            <Tooltip title="Facebook">
              <Facebook 
                className={classes.shareIcon} 
              />
            </Tooltip>
          </IconButton>
        </FacebookShareButton>

      {/* Instagram */}
        <IconButton color="secondary">
          <Tooltip title="Instagram">
            <Instagram className={classes.shareIcon} />
          </Tooltip>
        </IconButton>

      {/* Copy link */}
        <IconButton color="secondary">
          <Tooltip title="Copy link">
            <Link className={classes.shareIcon} />
          </Tooltip>
        </IconButton>  
        </Grid>
    </Grid>
  );
}