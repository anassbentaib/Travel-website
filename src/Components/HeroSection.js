import React from 'react'
import './HeroSection.css'
import {Button} from './Button'
import'../App.css'


function HeroSection() {
  return (
    <div className="hero-container">
      <video src='/videos/v2.mp4' autoPlay loop muted/>
      <h1>
        ADVENTURE AWAITS
      </h1>
      <p>
        What are you waiting for ?
      </p>
      <div className='hero-btn'>
        <Button 
        className='btns' 
          buttonStyle = 'btn-outline' 
        buttonSize='btn-large'>
            GET STARTED
        </Button>

        <Button 
        className='btns' 
          buttonStyle = 'btn-primary' 
        buttonSize='btn-large'>
            WATCH TRILLER 
            <i className='far fa-play-circle' />
        </Button>
      </div>

    </div>
  )
}

export default HeroSection
