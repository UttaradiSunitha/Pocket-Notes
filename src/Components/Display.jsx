import React from 'react'
import background from  '../Images/background.jpg'
import icon from '../Images/icon.png'
import './Display.css'


const Display = () => {
  return (
        <div id='container'>
        <img src={background} alt="background" id='background'/>
        <h1 id='title'>Pocket Notes</h1>
        <p id='description'>
            Send and receive messages without keeping your phone online.
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
        </p>
        <p id='footer'><img src={icon} alt="icon" id='encrypt' />end-to-end encrypted</p>
        </div>
  )
}

export default Display