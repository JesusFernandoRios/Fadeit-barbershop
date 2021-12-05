import React from 'react'
import AppointmentButton from './AppointmentButton'
import BusinessHours from './BusinessHours'
import Pricing from './Pricing'
import Safety from './Safety'
import SocialMedia from './SocialMedia'

export default function Home() {
    return (
        <>

        <SocialMedia/>
        <AppointmentButton/>
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
