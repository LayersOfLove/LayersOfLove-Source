import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import logo from '../../img/logo.png';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
      float: 'left'
    },
    title: {
      float: 'left',
      fontSize: '30px'
    },
    authors: {
      marginTop: '10px',
      color: '#e9456a'
    }
}));


export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Grid container>
          <Grid item xs={1}>
            <div style={{width: '100%'}}>
              <img 
                src={logo} 
                style={{
                  height: '50px'
                }}
              />
              </div>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                Layers of Love
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography className={classes.authors} variant="h6" color="inherit" noWrap>
              Khadija Aziz & Laura Kay Keeling
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
