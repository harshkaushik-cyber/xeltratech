import React from 'react'
import "../../serviceoffered/SocialMediaDevelopment/SocialMediaapproach.css"

function SocialMediaApproachCard({icon1, icon2, logo, para}) {
  return (
    
      <div className='solution-box-content1'>
                    <img className='solution-box-content1-img1' src={icon1}/>
                    <img className='solution-box-content1-img2' src={icon2}/>
                    <div className='solution-box-content1-logo'>{logo}</div>
                    <div className='solution-box-content1-footer'>{para}</div>
        </div>
  )
}

export default SocialMediaApproachCard
