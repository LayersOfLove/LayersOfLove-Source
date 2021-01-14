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
  const [zIndexMapping, setZIndexMapping] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  function updateZIndexState(newZIndex) {
    setZIndexMapping(newZIndex);
  }

  return (
    <div className="App">
      <Header />
      <Container maxWidth="md">
        <p style={{
          margin: '1.6em',
          fontSize: '1.2em'
        }}>
          Hello! We are <a href="https://www.khadijaaziz.com/" target="_blank">Khadija Aziz</a> and <a href="https://www.laurakaykeeling.com/" target="_blank">Laura Kay Keeling</a>, and we invite you to experience the benefits of artistic collaboration by engaging with <em style={{color:'red'}}>Layers of Labour of Love</em>. This project is an extension of digital collages initially created for the 2021 DesignTO Festival’s curated exhibition Exchange Piece. 
        </p>
        <SelectionGrid 
          updateZIndexState={newZIndex => updateZIndexState(newZIndex)} />
      </Container>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={5}>
            <InstructionBar />
          </Grid>
          <Grid item md={7}>
            <Canvas zIndexMapping={zIndexMapping} />
            <CanvasShareBar />
          </Grid>
        </Grid>
      </Container>
      <br/>
      <Container maxWidth="md">
        <Description />
      </Container>
      <Footer />
    </div>
  );
}
