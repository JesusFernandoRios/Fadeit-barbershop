import React,{useEffect} from 'react'
import SocialMedia from './SocialMedia'

import './Style/appointment_button.css'

export default function AppointmentButton() {


    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "https://booksy.com/widget/code.js?id=598651&country=us&lang=en";
        script.async = true; 
        document.getElementById('script').appendChild(script);
    }, []);


    return (
        <div className="appointment_button">

            <div>
                <SocialMedia/>
            </div>

            <div id='script'>
            </div>
            
            
        </div>
    )
}
