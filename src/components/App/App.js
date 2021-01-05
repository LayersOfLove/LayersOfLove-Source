import React, { useState } from 'react';
import './App.css';
import Header from '../Header'
import SelectionGrid from '../SelectionGrid';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Canvas from '../Canvas';
import InstructionBar from '../InstructionBar';
import Description from '../Description';
import CanvasShareBar from '../CanvasShareBar';
import Footer from '../Footer';

export default function App() {
  /**
   * Image z-index mappings. 
   * 
   * We have 10 images, with ids 0-9.
   * 
   * Each image will be assigned a z-index `zIndex`.
   * For this implementation, we'll assign our lowest z-index to be 1. 
   * 
   * So, we need to maintain a small list that maps indices (0-9) 
   * to the corresponding z-index for the image with that list index.
   * 
   * We will also decide that a value of 0 will mean that the image does
   * not exist in the canvas. 
   * 
   * So, the starting state, or default state of this list will
   * be [0, 0, 0, 0, 0, 0, 0].
   * 
   * Also, a z-index of anywhere between 1-10 can only appear once 
   * in the list.
   *  
   */
  const [zIndexMapping, setZIndexMapping] = useState([1, 2, 3, 6, 1, 4, 7, 8, 9, 10]);

  function updateZIndexState(newZIndex) {
    setZIndexMapping(zIndexMapping)
  }

  return (
    <div className="App">
      <Header />
      <Container maxWidth="md">
        <SelectionGrid 
          updateZIndexState={newZIndex => updateZIndexState(newZIndex)} />
        <Grid container>
          <Grid item md={3}>
            <InstructionBar />
          </Grid>
          <Grid item md={9}>
            <Canvas zIndexMapping={zIndexMapping} />
            <CanvasShareBar />
          </Grid>
          <Grid item xs={12}>
            <Description />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
