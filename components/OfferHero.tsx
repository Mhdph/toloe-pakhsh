import React from "react";

function OfferHero() {
  return (
    <div className="offer_300 text-center flex flex-col gap-3 items-center justify-center text-white">
      <p className="text-4xl mt-2 font-semibold">پیشنهاد ویژه</p>
      <p className="font-black text-xs">برای خرید های بالای ۳۰۰ هزار تومان</p>
      <button className="bg-white px-4 py-1.5 rounded-3xl text-xs font-extrabold text-[#F02D3C]">
        مشاهده محصولات
      </button>
    </div>
  );
}

export default OfferHero;
