/* eslint-disable @next/next/no-img-element */
'use client';
import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface SliderProps {
  images: string[];
}

const SliderImage: React.FC<SliderProps> = ({images}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    beforeChange: (oldIndex: any, newIndex: any) => setCurrentSlide(newIndex), // Handle slide change
  };

  return (
    <div className='mt-20 md:mt-0 2xl:px-10' style={{maxWidth: '100%', overflowX: 'hidden'}}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} className='md:w-[1276px] 2xl:w-full' alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
      <div style={{textAlign: 'center'}}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)} // Handle dot click
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderImage;
