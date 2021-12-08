import React from 'react'
import BusinessHours from './BusinessHours'
import Pricing from './Pricing'
import Safety from './Safety'
import SocialMedia from './SocialMedia'
import ImageGallery from 'react-image-gallery'

export default function Home() {
    return (
        <>

        <SocialMedia/>
        <hr/>
        <BusinessHours/>
        <hr/>
        <Pricing />
        <hr/>
        <Safety/>
        <hr/>
        </>
    )
}
