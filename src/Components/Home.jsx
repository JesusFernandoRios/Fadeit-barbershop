import React from 'react'
import BusinessHours from './BusinessHours'
import Pricing from './Pricing'
import Safety from './Safety'
import ImageGallery from 'react-image-gallery'


export default function Home() {

    const images = [
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/4.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/4.jpg',
        },
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/img-7.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/img-7.jpg',
        },
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/img-8.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/img-8.jpg',
        },
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/img-6.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/img-6.jpg',
        },
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/2.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/2.jpg',
        },
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/3.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/3.jpg',
        },
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/1.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/1.jpg',
        },
        {
          original: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/img-1.jpg',
          thumbnail: 'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/img-1.jpg',
          
        },
      ];

    return (
        <>
        
        <hr/>
        <ImageGallery items={images} showNav={false} lazyLoad={false} showThumbnails={true} showPlayButton={false} showFullscreenButton={false} />
        <hr/>
        <BusinessHours/>
        <hr/>
        <Pricing />
        <hr/>
        <Safety/>
        <hr/>
        </>
    )
}
