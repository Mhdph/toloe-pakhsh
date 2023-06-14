"use client";
import React from "react";
import shablon from "@/assets/images/shablon.png";
import shablondesktop from "@/assets/images/shablondesktop.png";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

function OfferHero() {
  const isMobile = useMediaQuery("(max-width: 648px)");

  return (
    <div className="offer_300 w-full h-[152px] text-center flex flex-col gap-3 items-center justify-center text-white mt-4">
      <div className="absolute">
        <Image src={isMobile ? shablon : shablondesktop} alt="bg-takhfif" />
      </div>
      <p className="text-4xl mt-2 font-semibold md:text-5xl md:mb-2">
        پیشنهاد ویژه
      </p>
      <p className="font-black text-xs md:text-[14px]">
        برای خرید های بالای ۳۰۰ هزار تومان
      </p>
      <button className="bg-white px-4 py-1.5 rounded-3xl text-xs md:text-[14px] font-extrabold text-[#F02D3C]">
        مشاهده محصولات
      </button>
    </div>
  );
}

export default OfferHero;
