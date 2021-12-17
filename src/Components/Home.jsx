import React from 'react'
import BusinessHours from './BusinessHours'
import Pricing from './Pricing'
import Safety from './Safety'
import ImageGallery from 'react-image-gallery'


export default function Home() {

    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];

    return (
        <>

        <hr/>
        <BusinessHours/>
        <hr/>
        <ImageGallery items={images} showNav={false}/>
        <hr/>
        <Pricing />
        <hr/>
        <Safety/>
        <hr/>
        </>
    )
}
