import React from 'react'
import BusinessHours from './BusinessHours'
import Pricing from './Pricing'
import Safety from './Safety'

export default function Home() {
    return (
        <>
        <hr/>
        <BusinessHours/>
        <hr/>
        <Pricing />
        <hr/>
        <Safety/>
        </>
    )
}
