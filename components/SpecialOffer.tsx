import React from "react";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";
import Card from "./ui/Card";

type SpecialOfferProps = {};

const SpecialOffer: React.FC<SpecialOfferProps> = () => {
  return (
    <div className="special_offer w-full relative h-[564px] md:h-full">
      <Image src={Logo} alt="logo" className="pt-8" />
      <p className="text-white font-normal mt-10 text-2xl text-right absolute top-1 md:right-20 md:top-2 right-6">
        تخفیفات ویژه
      </p>
      <div className="flex items-center absolute top-28 right-4 gap-3 md:hidden">
        <div className="bg-white h-[60px] w-[60px] rounded-3xl">
          <p></p>
          <p></p>
        </div>
        <div className="bg-white h-[60px] w-[60px] rounded-3xl">2</div>
        <div className="bg-white h-[60px] w-[60px] rounded-3xl">3</div>
        <div className="bg-white h-[60px] w-[60px] rounded-3xl">4</div>
      </div>
      <div className="w-full flex items-center gap-3 absolute top-0 mt-48 md:mt-32 py-2 px-4  whitespace-nowrap scroll-smooth overflow-x-scroll scrollbar-none md:justify-center">
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
      </div>
      <div className="flex justify-center mt-80 md:mt-60 md:pb-10 md:justify-end md:ml-24">
        <button className="bg-white text-center text-[#f02d3c] text-xs font-extrabold h-9 w-[350px] md:w-[196px] rounded-3xl">
          مشاهده محصولات
        </button>
      </div>
    </div>
  );
};
export default SpecialOffer;
