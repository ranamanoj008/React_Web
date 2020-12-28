import React from 'react'
import Common from './Common';
import image from './Images/tech2-rbg.png'

const Home = ()=>{
    return(
        <>
            <Common name="Grow your business with"
            imgsrc={image} 
            visit="/services"
            btnname="Get Started"
             />
        </>
    )
}

export default Home;