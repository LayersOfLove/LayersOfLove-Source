import React, { useState } from 'react';
import { Facebook, Twitter, Link } from '@material-ui/icons';
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

import FormModal from '../FormModal';

const useStyles = makeStyles(theme => ({
  shareIcon: {
    cursor: 'pointer'
  }
}));

const BASE_URL = "https://layersoflove.ca"
const URL_W_Z = BASE_URL + "/?z=";

export default function CanvasShareBar({ zIndexMappingStr }) {
  const classes = useStyles();
  const url = zIndexMappingStr === '0000000000' ? BASE_URL : URL_W_Z + zIndexMappingStr;
  const socials = {
    'Twitter': <Twitter className={classes.shareIcon} />,
    'Facebook': <Facebook className={classes.shareIcon} />,
    'Copy link': <Link className={classes.shareIcon} />
  }

  const [formModalOpen, setFormModalOpen] = useState(false);

  return (
    <Grid container style={{
      paddingTop: '0.2em'
    }}>
      <Grid item md={1}>
        <Button 
          variant="contained" 
          color="primary" 
          style={{
            marginTop: '0.35em'
          }}
          onClick={() => setFormModalOpen(true)}
          >
          Submit
        </Button>
        <FormModal formModalOpen={formModalOpen} handleClose={() => setFormModalOpen(false)} />
      </Grid>
      
      {/* Twitter */}
      <Grid item md={5}>
        <TwitterShareButton 
          url={url}
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
          url={url}
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

      {/* Copy link */}
        <IconButton 
          color="secondary"
          onClick={() => {
            // copy logic from: https://stackoverflow.com/a/50795833
            let temp = document.createElement('input');
            temp.value = url;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand('copy');
            document.body.removeChild(temp);
          }}  
        >
          <Tooltip title="Copy link">
            <Link className={classes.shareIcon} />
          </Tooltip>
        </IconButton>  
        </Grid>
    </Grid>
  );
}