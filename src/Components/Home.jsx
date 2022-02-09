import React from 'react'
import BusinessHours from './BusinessHours'
import Pricing from './Pricing'
import Safety from './Safety'
import ImageGallery from 'react-image-gallery'


export default function Home() {

    const images = [

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
        <BusinessHours/>
        <hr/>
        <ImageGallery items={images} showNav={false} lazyLoad={false} showThumbnails={true} showPlayButton={false} showFullscreenButton={false} />
        <hr/>
        <Pricing />
        <hr/>
        <Safety/>
        <hr/>
        </>
    )
}
