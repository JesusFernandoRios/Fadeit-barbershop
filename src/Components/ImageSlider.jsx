import React from 'react'
import './Style/image_slider.css'

function ImageSlider() {

    const images = [
        'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image6.jpg',
        'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image5.jpg',
        'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image2.jpg',
        'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image3.jpg',
        'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image4.jpg',
        'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/new-image1.jpg',
        'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/img-3.jpg',
        'https://fadeitbarbershop.s3.us-west-2.amazonaws.com/Images/img-5.jpg'    
    ];


  return (
    <div className='image-slider'>
        
      {images.map( (image, i)  => {
              
        return (
          <img  className="barbershop-image" src={image} alt="Barbershop Images"/>
        )})}
    </div>
  )
}

export default ImageSlider