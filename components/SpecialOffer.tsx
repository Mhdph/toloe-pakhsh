import React from "react";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";

type SpecialOfferProps = {};

const SpecialOffer: React.FC<SpecialOfferProps> = () => {
  return (
    <div className="special_offer relative">
      <Image src={Logo} alt="logo" className="mt-8" />
      <p className="text-white font-normal mt-10 text-2xl text-right absolute top-3 right-6">
        تخفیفات ویژه
      </p>
      <div className="flex items-center absolute top-28 right-4 gap-3">
        <div className="bg-white h-[60px] w-[60px] rounded-3xl">1</div>
        <div className="bg-white h-[60px] w-[60px] rounded-3xl">2</div>
        <div className="bg-white h-[60px] w-[60px] rounded-3xl">3</div>
        <div className="bg-white h-[60px] w-[60px] rounded-3xl">4</div>
      </div>
      <div className="w-full flex items-center gap-3 absolute top-0 mt-48 py-2 px-4  whitespace-nowrap scroll-smooth overflow-x-scroll scrollbar-none">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
      </div>
      <div className="flex justify-center mt-72">
        <button className="bg-white text-center text-[#f02d3c] text-xs font-extrabold h-9 w-[350px] rounded-3xl">
          مشاهده محصولات
        </button>
      </div>
    </div>
  );
};
export default SpecialOffer;
