import React from 'react'
import BusinessHours from './BusinessHours'
import Pricing from './Pricing'
import Safety from './Safety'
import ImageGallery from 'react-image-gallery'
import Location from './Location'


export default function Home() {

    const images = [

        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image6.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image6.jpg',
        },
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image5.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image5.jpg',
        },
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image2.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image2.jpg',
        },
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image3.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image3.jpg',
        },
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image4.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image4.jpg',
        },
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image1.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image1.jpg',
        },
      ];

    return (
        <>
        
        <hr/>
        <Location/>
        <hr/>
        <div className='image-hours'>
          <ImageGallery 
          items={images} 
          showNav={false} 
          lazyLoad={true} 
          showThumbnails={true} 
          showPlayButton={false} 
          showFullscreenButton={false}
          originalHeight={10}
          
          />
          <BusinessHours/>
        </div>
        
        <hr/>
        <Pricing />
        <hr/>
        <Safety/>
        <hr/>
        </>
    )
}
