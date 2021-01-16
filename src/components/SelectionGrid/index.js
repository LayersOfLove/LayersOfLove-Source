import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "1em"
  },
  paper: {
    position: 'relative',
    height: 2 * 40,
    width: 3 * 40,
  },
  image: {
    height: "100%",
    width: "100%",
    cursor: 'pointer'
  },
}));

export default function SelectionGrid({ updateZIndexState }) {
  const classes = useStyles();
  const [zIndexMapping, setZIndexMapping] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [zIndexStack, setZIndexStack] = useState([]);

  function imageClicked(imageId) {
    // update the stack 
    setZIndexStack(currentStack => {
      let index = currentStack.indexOf(imageId);
      let newStack = [...currentStack];
      if (index > -1) {
        // remove this image from the zIndexStack, if it exists in the current stack
        newStack.splice(index, 1);
      } else {
        // add this image to the current stack
        newStack.push(imageId);        
      }

      // update the zIndexMapping state based on the new updated stack
      setZIndexMapping(currentMapping => {
        let newMapping = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        newStack.forEach((item, index) => {
          newMapping[item] = index + 1;
        });

        // update the parent's zIndexMapping so the parent can propogate the 
        // change onto the canvas.
        updateZIndexState([...newMapping]);
        return newMapping;
      });

      return newStack;
    });

  }

  return (
    <>
      <p style={{
        paddingLeft: '8.6em',
        margin: 0,
        textAlign: 'left',
        fontSize: '0.9em'
      }}>Layers</p>    
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2, 3, 4].map((imageId) => (
            <Grid key={imageId} item>
              <Paper className={classes.paper} children={
                <>
                  { zIndexMapping[imageId] === 0 ? 
                        <img
                          src={images[imageId]}
                          alt={"Layer " + imageId}
                          className={classes.image}
                          onClick={() => imageClicked(imageId)}
                        />
                      :
                        <>
                          <img
                            src={images[imageId]}
                            alt={"Layer " + imageId}
                            style={{
                              position: 'absolute',
                              height: "100%",
                              width: "100%",
                              top: 0,
                              left: 0
                            }}
                          />
                          <div
                            onClick={() => imageClicked(imageId)}
                            style={{
                              position: 'absolute',
                              height: "100%",
                              width: "100%",
                              top: 0,
                              left: 0,
                              backgroundColor: 'rgba(0, 0, 0, 0.46)',
                              alignItems: 'center',
                              display: 'flex',
                              cursor: 'pointer'
                            }}
                          >
                              <Typography variant="h4" color="inherit" noWrap
                                style={{
                                  position: 'absolute',
                                  left: '30%',
                                  color: 'white',
                                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                  borderRadius: '1em 1em 1em 1em',
                                  padding: '0.1em',
                                  width: '35%',
                                }}
                              >
                                {zIndexMapping[imageId]}
                            </Typography>
                          </div>
                        </>
                  }
                </> }
               />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[5, 6, 7, 8, 9].map((imageId) => (
            <Grid key={imageId} item>
              <Paper className={classes.paper} children={
                <>
                  { zIndexMapping[imageId] === 0 ? 
                        <img
                          src={images[imageId]}
                          alt={"Layer " + imageId}
                          className={classes.image}
                          onClick={() => imageClicked(imageId)}
                        />
                      :
                        <>
                          <img
                            src={images[imageId]}
                            alt={"Layer " + imageId}
                            style={{
                              position: 'absolute',
                              height: "100%",
                              width: "100%",
                              top: 0,
                              left: 0
                            }}
                            />
                          <div
                            onClick={() => imageClicked(imageId)}
                            style={{
                              position: 'absolute',
                              height: "100%",
                              width: "100%",
                              top: 0,
                              left: 0,
                              backgroundColor: 'rgba(0, 0, 0, 0.46)',
                              alignItems: 'center',
                              display: 'flex',
                              cursor: 'pointer'
                            }}
                          >
                              <Typography variant="h4" color="inherit" noWrap
                                style={{
                                  position: 'absolute',
                                  left: '30%',
                                  color: 'white',
                                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                  borderRadius: '1em',
                                  padding: '0.1em',
                                  width: '35%',
                                }}
                              >
                                {zIndexMapping[imageId]}
                            </Typography>
                          </div>
                        </>
                      }
                </>
              } />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}
