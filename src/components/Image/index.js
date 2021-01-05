import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import layer00 from '../../img/layer00.png';
import layer01 from '../../img/layer01.png';
import layer02 from '../../img/layer02.png';
import layer03 from '../../img/layer03.png';
import layer04 from '../../img/layer04.png';
import layer05 from '../../img/layer05.png';
import layer06 from '../../img/layer06.png';
import layer07 from '../../img/layer07.png';
import layer08 from '../../img/layer08.png';
import layer09 from '../../img/layer09.png';

/**
 * --- Image math ---
 * Each image is 8 by 10 inches, 600 DPI
 * w = 7200 pixels
 * h = 4800 pixels
 * 3:2 ratio
 * ------------------
 */

const images = [
  layer00,
  layer01,
  layer02,
  layer03,
  layer04,
  layer05,
  layer06,
  layer07,
  layer08,
  layer09,
]

const useStyles = makeStyles((theme) => ({
  medium: {
    height: "100%",
    width: "100%"
  },
  large: {
    height: "85%",
    width: "99%",
    paddingTop: '0.3em'
  }
}));

export default function Image({index, size}) {
  const classes = useStyles();
  const classBySize = {
    "medium": classes.medium,
    "large": classes.large
  }

  return (
    <img 
      src={images[index]} 
      alt={"Layer 0" + index} 
      className={classBySize[size]}
    /> 
  );
}