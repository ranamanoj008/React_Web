import React from 'react'
import Common from './Common'
import image from './Images/tech4.jpg'
const About = ()=>{
    return(
        <>  
            <Common name="Welcome to About page"
            imgsrc={image} 
            visit="/contact"
            btnname="Contact Us"/>
        </>
    )
}

export default About;