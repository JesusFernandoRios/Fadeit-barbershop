import React from 'react'
import './Style/business_hours.css'

export default function BusinessHours() {
    return (

        <div className="hours">

            <h2>Business Hours</h2>
                <p>Monday - Friday    <span className='time'>9:00 AM - 6:00 PM</span>
                </p>
                <p>Saturday           <span className='time'>8:00 AM - 5:00 PM</span>
                </p>
                <p>Sunday             <span className='time'>10:00 AM - 4:00PM</span>
                </p>
        </div>
            
    )
}
