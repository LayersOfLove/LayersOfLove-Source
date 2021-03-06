import React from 'react';
import './introParagraph.css'

export default function IntroParagraph() {
  return (
    <>
    <p className='mobileWarning' style={{
        backgroundColor: '#e53c3c',
        color: 'white',
        padding: '8px',
    }}>
        Unfortunately, this website is not mobile friendly. For best user experience, please view this website from a desktop computer.
    </p>
    <p style={{
      margin: '1.6em',
      fontSize: '1.2em',
      width: '78%',
      marginLeft: '5.05em'
    }}>
      Hello! We are <a href="https://www.khadijaaziz.com/" target="_blank">Khadija Aziz</a> and <a href="https://www.laurakaykeeling.com/" target="_blank">Laura Kay Keeling</a>, and we invite you to experience the benefits of artistic collaboration by engaging with <br /> <em style={{ color: '#e9456a' }}>Layers of Labour of Love</em>. This project is an extension of digital collages initially created for the 2021 DesignTO Festival’s curated exhibition <a href="https://designto.org/event/exchange-piece/"><i>Exchange Piece</i></a>.
    </p>
    </>
  );
}