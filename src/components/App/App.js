import React, { useState, useEffect } from 'react';

import './App.css';
import Header from '../Header'
import IntroParagraph from '../IntroParagraph';
import SelectionGrid from '../SelectionGrid';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Canvas from '../Canvas';
import InstructionBar from '../InstructionBar';
import Description from '../Description';
import CanvasShareBar from '../CanvasShareBar';
import Footer from '../Footer';

const DEFAULT_ZIN_MAPPING = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function removeParamsFromUrl() {
  // get the string following the ?
  var query = window.location.search.substring(1)

  // is there anything there ?
  if (query.length) {
    // are the new history methods available ?
    if (window.history != undefined && window.history.pushState != undefined) {
      // if pushstate exists, add a new state to the history, this changes the url without reloading the page

      window.history.pushState({}, document.title, window.location.pathname);
    }
  }
}

function convertZIndexMappingToUrlParam(zIndexMapping) {
  let s = '';
  zIndexMapping.forEach(val => {
    s += val === 10 ? 'a' : val;
  })
  return s;
}

function getZMappingFromUrl() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let zParam = params.get('z');
  if (zParam === null) return DEFAULT_ZIN_MAPPING;
  
  let zIndexMapping = [];
  
  // validate the given zParam.
  // its length must be exactly 10, otherwise we ignore it.
  // each of its chars must be between '0' and '9', and each 
  // char must be unique.
  if (zParam.length != 10) return DEFAULT_ZIN_MAPPING;
  
  for (let i = 0; i < 10; i++) {
    let z = zParam[i] === 'a' ? 10 : parseInt(zParam[i]);  
    if (z === 0 ||
      (zIndexMapping.indexOf(z) < 0 && z >= 1 && z <= 10)) {
        zIndexMapping.push(z);
      } else return DEFAULT_ZIN_MAPPING;
    }
    return zIndexMapping;
  }
  
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
    const [zIndexMapping, setZIndexMapping] = useState(getZMappingFromUrl());

    useEffect(() => removeParamsFromUrl());
    
    function updateZIndexState(newZIndex) {
      setZIndexMapping(newZIndex);
    }
    
  return (
    <div className="App">
      <Header />
      <Container maxWidth="md">
        <IntroParagraph />
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
            <CanvasShareBar zIndexMappingStr={convertZIndexMappingToUrlParam(zIndexMapping)} />
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
