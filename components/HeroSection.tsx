import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/images/HeroPictureMobile.png";
type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="mt-10">
      <Image src={HeroImage} alt="ajil shab eyd picture" />
    </div>
  );
};
export default HeroSection;
