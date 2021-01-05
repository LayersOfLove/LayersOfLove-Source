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

const useStyles = makeStyles(theme => ({
  canvasDiv: {
    position: 'relative',
    width: '654.55px',
    height: '436.36px'
  }, 
  blankDiv: {
    border: '1.5px solid black',
    width: '654.55px',
    height: '436.36px'
  }
}));

function Image({ imageId, zIndex }) {
  /**
  * --- Image math ---
  * Each image is 8 by 10 inches, 600 DPI
  * w = 7200 pixels
  * h = 4800 pixels
  * 3:2 ratio
  * ------------------
  */
  return (
    <>
    {zIndex === 0 ? <></> : 
      <img
        src={images[imageId]}
        alt={"Layer " + imageId}
        style={
          {
            position: 'absolute',
            top: '0px',
            left: '0px',
            zIndex: zIndex,
            width: '100%',
            height: '100%'
          }
        }
      />
    }
    </>
  );
}

export default function Canvas({ zIndexMapping }) {
  const classes = useStyles();
  const isBlank = zIndexMapping.reduce((a, b) => a + b, 0) === 0;

  return (
    <>
      <p style={{
        padding: 0,
        margin: 0,
        textAlign: 'left',
        fontSize: '0.9em'
      }}>Canvas</p>
      {isBlank ? 
        <div className={classes.blankDiv}></div>
      :
        <div className={classes.canvasDiv}>
          {zIndexMapping.map((val, i) => {
            return (
              <Image key={`cgi-${i}`} imageId={i} zIndex={val} />
            );
          })}
        </div>
      }
    </>
  );
}