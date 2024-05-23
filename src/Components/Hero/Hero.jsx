import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img}/>
        <h1><span>I'm Padmaja Buggaveeti,</span> front end developer based in USA</h1>
        <p>I'm Padmaja Buggaveeti, front end developer based in USA with 10 years of experience</p>
        <div className='hero-action'>
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero