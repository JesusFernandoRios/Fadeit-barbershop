import React from 'react'
import './Style/social_media.css'

export default function SocialMedia() {
    return (
        <div class="wrapper">
            <div class="icon facebook">
                <div class="tooltip">Facebook</div>
                <span><i class="fab fa-facebook-f"></i></span>
            </div>
            <div class="icon twitter">
                <div class="tooltip">Twitter</div>
                <span><i class="fab fa-twitter"></i></span>
            </div>
            <div class="icon instagram">
                <div class="tooltip">Instagram</div>
                <span><i class="fab fa-instagram"></i></span>
            </div>
            <div class="icon youtube">
                <div class="tooltip">Youtube</div>
                <span><i class="fab fa-youtube"></i></span>
            </div>
        </div>
    )
}
