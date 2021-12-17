import React from 'react'
import SocialMedia from './SocialMedia'

import './Style/appointment_button.css'

export default function AppointmentButton() {
    return (
        <div className="appointment_button">

            <div>
                <SocialMedia/>
            </div>

            <div>
            <a href="https://booksy.com/en-us/598651_fade-it-barbershop_barber-shop_14721_sun-city"  target="_blank" className="bn3637 bn37">Book Now</a>
            </div>
            
        </div>
    )
}
