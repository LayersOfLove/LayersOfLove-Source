import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Image from '../Image';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "1.5em",
    marginBottom: "1.3em"
  },
  paper: {
    height: 2 * 40,
    width: 3 * 40,
  },
}));

export default function SelectionGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2, 3, 4].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} children={
                <Image index={value} size={"medium"}/>
              } />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[5, 6, 7, 8, 9].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} children={
                <Image index={value} size={"medium"} />
              } />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
