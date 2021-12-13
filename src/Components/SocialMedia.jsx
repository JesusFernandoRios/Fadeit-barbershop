import React from 'react'
import './Style/social_media.css'

export default function SocialMedia() {
    return (
        <div class="wrapper">
            
            {/* <div className="social_check">
                <p>Check us out on</p>
            </div> */}

            <div className="social_links">
                <div class="icon facebook">
                    <div class="tooltip">Facebook</div>
                    <a href="https://www.facebook.com/Fade_It_Barbershop-105672805150183" rel="noreferrer" target="_blank" class="fab fa-facebook-f"><span className="hidden">Facebook</span></a>
                </div>
                <div class="icon tiktok">
                    <div class="tooltip">TikTok</div>
                    <a href="https://www.tiktok.com/@fadeitbarbershop?" target="_blank"  rel="noreferrer" class="fab fa-tiktok"><span className="hidden">TikTok</span></a>
                </div>
                <div class="icon instagram">
                    <div class="tooltip">Instagram</div>
                    <a href="https://www.instagram.com/fade_it_barbershop/" target="_blank" rel="noreferrer" class="fab fa-instagram"><span className="hidden">Instagram</span></a>
                </div> 
            </div>
            
        </div>
    )
}
