import React from 'react'
import './Style/social_media.css'

export default function SocialMedia() {
    return (
        <div className="wrapper">
            
            {/* <div className="social_check">
                <p>Check us out on</p>
            </div> */}

            <div className="social_links">
                <div className="icon facebook">
                    <div className="tooltip">Facebook</div>
                    <a href="https://www.facebook.com/Fade_It_Barbershop-105672805150183" rel="noreferrer" target="_blank" className="fab fa-facebook-f"><span className="hidden">Facebook</span></a>
                </div>
                <div className="icon tiktok">
                    <div className="tooltip">TikTok</div>
                    <a href="https://www.tiktok.com/@fadeitbarbershop?" target="_blank"  rel="noreferrer" className="fab fa-tiktok"><span className="hidden">TikTok</span></a>
                </div>
                <div className="icon instagram">
                    <div className="tooltip">Instagram</div>
                    <a href="https://www.instagram.com/fade_it_barbershop/" target="_blank" rel="noreferrer" className="fab fa-instagram"><span className="hidden">Instagram</span></a>
                </div> 
            </div>
            
        </div>
    )
}
