"use client";
import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/images/HeroPictureMobile.png";
import Ajil from "@/assets/images/Ajil.png";
import useMediaQuery from "@/hooks/useMediaQuery";
type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
  const isMobile = useMediaQuery("(max-width: 648px)");

  return (
    <div className="mt-10 md:mt-0 flex items-center justify-center">
      <Image src={isMobile ? HeroImage : Ajil} alt="ajil shab eyd picture" />
    </div>
  );
};
export default HeroSection;
