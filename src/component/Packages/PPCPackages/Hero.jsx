import React from 'react'
import './Hero.css'
import banner from "./images/banner.jpg"
import SplitText from '../../SingleComponents/SplitText';
function Hero() {
  return (
    <div>
      <div className="hero-body">
                    <img className="h-full w-full object-cover" src={banner}/>
                    <div className=' hero-box'>
                      <SplitText text="Our Pay Per Click Packages" className="hero-box-heading1" delay={50}/>
                    </div>
                </div>
    </div>
  )
}

export default Hero