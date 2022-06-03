import React from 'react'
import BusinessHours from './BusinessHours'
import './Style/location.css'

export default function Location() {
    return (
        <section className="location">
            
            <BusinessHours/>
            

            <video width="50%" height="500" autoPlay loop  muted>

                <source src='https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Videos/convertedVideo.mp4' type='video/mp4'/>

                Video file not supported
            </video>

            
        </section>
    )
}
