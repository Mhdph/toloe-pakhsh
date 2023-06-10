"use client";
import Slider from "rc-slider";
import React from "react";
import "rc-slider/assets/index.css";

function SearchSlider() {
  const [sliderValues, setSliderValues] = React.useState<number | number[]>([
    0, 100,
  ]);

  const handleSliderChange = (values: number | number[]) => {
    setSliderValues(values);
  };

  return (
    <div className="px-10">
      <Slider
        range
        reverse
        min={0}
        value={sliderValues}
        max={100}
        onChange={handleSliderChange}
        trackStyle={{ backgroundColor: "red" }}
        handleStyle={{
          backgroundColor: "black",
          borderColor: "black",
        }}
      />
    </div>
  );
}

export default SearchSlider;
