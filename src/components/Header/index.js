import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
      float: 'left'
    },
    title: {
      float: 'left'
    },
    authors: {
      float: 'right'
    },
    test: {
      width: '100%'
    }
}));


export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <div className={classes.test}>
          <CameraIcon className={classes.icon} />
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Layers of Love
          </Typography>
          <Typography className={classes.authors} variant="h6" color="inherit" noWrap>
            Khadija Aziz & Laura Kay Keeling
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
