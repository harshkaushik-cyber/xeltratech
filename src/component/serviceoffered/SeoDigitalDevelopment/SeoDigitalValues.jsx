import React from 'react'
import "./SeoDigitalValues.css"
import SeoDigitalValuesCard from "../../cards/SeoDigitalCard/SeoDigitalValuesCard"
import data from "../../../arraydata/SeoDigitalArray/SeoDigitalValuesArray"

function SeoDigitalValues() {
  return (
    <>
    <div className='PHPValues-body'>
        <div className='PHPValues-box'>
            <div className='PHPValues-header'>
                <div className='PHPValues-heading'><span className='text-[#ED1C24]'> Our  </span> Values </div>
                <div className='PHPValues-para'>Our SEO & digital marketing experts drive online growth with data-driven strategies, optimizing search rankings, increasing traffic, and enhancing brand visibility for maximum engagement and conversions.</div>
            </div>


            <div className='SeoDigitalValues-content'>
            {data.map((data,index)=>(<SeoDigitalValuesCard key={index} icon={data.icon} para={data.para}/>))}   
            </div>
        </div>
      
    </div>
    </>
  )
}

export default SeoDigitalValues
