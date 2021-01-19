import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
    position: 'relative',
    bottom: 0,
    width: '100%',
    fontSize: '11pt',
    padding: '3px'
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <span style={{
        position: 'absolute',
        left: '10px'
      }}>
        LayersofLove.ca is an extension of <em>Layers of Labours of Love</em> by <a href="https://khadijaaziz.com">Khadija Aziz</a> and <a href="https://www.laurakaykeeling.com">Laura Kay Keeling</a>, created in 2021. 
      </span>
      <span style={{
        position: 'absolute',
        right: '10px'
      }}>
        Website by <a href="https://areeba.ca">Areeba Aziz</a>
      </span>
      <span>&nbsp;</span>
    </footer>
  );
}