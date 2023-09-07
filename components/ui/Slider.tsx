import React, { useState, useEffect } from 'react';

interface SliderProps {
  images: string[];
  interval: number;
}

const Slider: React.FC<SliderProps> = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next index, looping back to 0 if at the end
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, interval);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, interval, images.length]);

  return (
    <div className="relative overflow-hidden w-full">
      <div className="slider-container w-full flex transition-transform ease-in-out duration-500 transform -translate-x-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slider-image w-full h-auto ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
