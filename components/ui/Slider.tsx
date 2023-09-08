/* eslint-disable @next/next/no-img-element */
'use client';
import React, {useEffect, useState} from 'react';
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

  useEffect(() => {
    (function () {
      var i = 'Bmul43',
        a: any = window,
        d = document;
      function g() {
        var g = d.createElement('script'),
          s = 'https://www.goftino.com/widget/' + i,
          l = localStorage.getItem('goftino_' + i);
        g.async = !0;
        g.src = l ? s + '?o=' + l : s;
        d.getElementsByTagName('head')[0].appendChild(g);
      }

      if (d.readyState === 'complete') {
        g();
      } else {
        if (a.addEventListener) {
          a.addEventListener('load', g, false);
        } else if (a.attachEvent) {
          a.attachEvent('onload', g);
        }
      }
    })();
  }, []); // Ensure the useEffect runs only once (on mount)

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
