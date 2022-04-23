import React from 'react'
import './Style/pricing.css'

export default function Pricing() {
    return (
        <section className="pricing">
            <div className="services">
                <h2>Services</h2>

                <p>Regular Cut <span className='prices'>$20</span>
                </p>
                <p>Regular Cut with Beard Cleaning <span className='prices'>$30</span>
                </p>
                <p>Hair Cut (Skin) <span className='prices'>$25</span>
                </p>
                <p>Beard Trim <span className='prices'>$20</span>
                </p>
                <p>The Fade It Way <span className='prices'>$50</span>
                </p>

            </div>

            <div className="other_services">
                <h2>Other Services</h2>

                <p>Hot Towel Shave (Razor) <span className='prices'>$25</span>
                </p>
                <p>Hair Cut (Skin) & Beard with Razor <span className='prices'>$35</span>
                </p>
                <p>Facial <span className='prices'>$25</span>
                </p>
                <p>Black mask with any cut <span className='prices'>$10</span>
                </p>
                <p>Design with any Cut <span className='prices'>$10</span>
                </p>
            </div>
            
        </section>
    )
}

