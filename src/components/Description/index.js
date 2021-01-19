import React from 'react';
import { Grid } from '@material-ui/core';

import khadija from '../../img/khadija.jpg';
import laura from '../../img/laura.jpg';

export default function Description() {
  return (
    <>
    <h4>About this Project</h4>
    <p>
        Layers of Labour of Love reflects on labour, love, and acts of care that have been especially prominent in our communities over the last year. Twice a week for four weeks, we exchanged two digital collages and each added new drawings or scanned images of plants, textiles, and other everyday objects to develop this diptych. These reciprocating acts of care – through the labour of consciously contributing to each other’s work – has culminated in a visual representation of what could only be the result of a truly collaborative effort.
    </p>
    <p>
        Paired by DesignTO, we participated in an exchange of conversations, readings, and our own artworks, to learn about each other’s personal narratives that inspire us to make the art that we do. Now, we invite you to create your own digital collage using the same layers that we used to create Layers of Labour of Love.
    </p>
    <h4>Artist Bios</h4>
    <Grid container>
      <Grid item xs={12} sm={6}>
        <img
          src={khadija}
          style={{
            width: '300px',
          }}
        ></img>
        <br />
        <strong>Khadija Aziz</strong><br />
        <a href="https://khadijaaziz.com">Khadijaaziz.com</a> / <a href="https://www.instagram.com/_khadija_a_">@_khadija_a_</a>
        <p style={{
          fontSize: '14px',
          paddingLeft: '1.7em',
          paddingRight: '1.7em'
        }}>
          Khadija Aziz is a textile artist and educator who investigates spontaneous experimentation in her process-based practice. She graduated from OCAD University’s Material Art & Design program in June 2020 with a BFA, and she is currently pursuing an MFA at Concordia University’s Fibre & Material Practices program. Khadija received the 2019 Award of Excellence in Community Arts Engagement from the Ontario Museum Association for her work at the Textile Museum of Canada. In recognition of her creative practice, Khadija has most recently received the Shanks Memorial Award in Textiles from Craft Ontario and the Creative Promise Award from Surface Design Association in 2020.
        </p>  
      </Grid>
      <Grid item xs={12} sm={6}>
        <img
          src={laura}
          style={{
            width: '304px',
          }}
        ></img>
        <br />
        <strong>Laura Kay Keeling</strong><br />
        <a href="https://www.laurakaykeeling.com">www.laurakaykeeling.com</a> / <a href="https://www.instagram.com/laurakaykeeling/">@laurakaykeeling</a> / Analog Photography <a href="https://www.instagram.com/lllllllllllllllllkk/">@lllllllllllllllllkk</a>
        <p style={{
          fontSize: '14px',
          paddingLeft: '1.7em',
          paddingRight: '1.7em'
        }}>
          Laura Kay Keeling is a Toronto-based artist whose work encompasses analog photography, video, collage and installation-based projects. Her work explores how we form connections with each other and nature. Exploring and unpacking emotions through the creation of new work, while examining concepts related to “the visitor” as spoken about in Rumi’s Poem ‘The Guest House’. Laura feels very connected to and at peace in nature; her new works explore ideas relating to plant sentience and reciprocal care.
        </p>
      </Grid>
    </Grid>
    </>
  );
}