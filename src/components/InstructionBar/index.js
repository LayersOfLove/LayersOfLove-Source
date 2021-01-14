import React from 'react';

export default function InstructionBar() {
  return (
    <div style={{
      textAlign: 'left',
      marginRight: '1.5em'
    }}>
      <strong>Instructions:</strong>
      <ol>
        <li>
          Select an image by clicking one of the thumbnail icons from Layers. This will bring the image to your Canvas. 
        </li>
        <li>
          Continue selecting the Layers in the order that you wish to see them, choosing as few or as many as you like. The first image selected will become your background.
        </li>
        <li>
          To remove an image from your canvas, unclick the Layer.
        </li>
        <li>
          When you are happy with your digital collage, show it off on social media by clicking one (or all) of the icons below your Canvas. 
        </li>
        <li>
          Please also click “Submit”, so you can directly share your art and comments with artists Khadija Aziz and Laura Kay Keeling.
        </li>
        <li>
          When sharing your collage on social media, please tag us so we can enjoy and share your Layers of Love digital collage! @khadija_a_  @laurakaykeeling 
        </li>
      </ol>
    </div>
  )
}