import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img}/>
        <h1><span>I'm Padmaja Buggaveeti,</span> front end developer based in USA</h1>
        <p>I'm Padmaja Buggaveeti, front end developer based in USA with 10 years of experience</p>
        <div className='hero-action'>
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume"><AnchorLink className='anchor-link' offset={50} href='#contact'>My Resume</AnchorLink></div>
        </div>
    </div>
  )
}

export default Hero