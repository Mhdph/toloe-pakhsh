import { ActiveStoreSvg, ArrowDownSvg } from "@/assets/svg";
import StarSvg from "@/assets/svg/StarSvg";
import React from "react";
import Product from "@/assets/tempImages/Product.png";

import Image from "next/image";
import HeartSvg from "@/assets/svg/HeartSvg";
function Card() {
  return (
    <div className="card">
      <Image
        src={Product}
        alt="product image"
        height={120}
        width={170}
        className="border-b"
      />
      <div className="px-2 mt-2">
        <div className="flex items-center justify-between ">
          <p className="font-black text-xs">آبنبات چوبی قلبی</p>
          <StarSvg />
        </div>
        <p className="text-[10px] font-normal mt-1">طرح سگ ۲۴ عددی</p>
        <hr className=" my-1" />
        <div className="flex items-center justify-between">
          <p className="text-xs text-black-items">واحد:</p>
          <div className="items-center flex">
            <p className="text-xs font-black">۱</p>
            <span className="text-[10px] font-normal opacity-60 mr-1">
              بسته
            </span>
          </div>
        </div>
        <hr className=" my-1" />
        <div className="flex items-center justify-between">
          <p className="text-xs text-black-items">قیمت:</p>
          <div className="items-center flex">
            <p className="text-xs font-black">۱۳۸,۰۰۰</p>
            <span className="text-[10px] font-normal opacity-60 mr-1">
              تومان
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          {/* <div className="h-9 w-9 border-[#F6602D] rounded-full justify-center border flex">
            <HeartSvg />
          </div> */}
          <div className="border-[#F6602D] h-9 w-9 flex items-center justify-center border rounded-full">
            <div className="">
              <HeartSvg />
            </div>
          </div>
          <button className="btn_primary w-[110px] py-1 justify-around rounded-[18px] text-white flex items-center text-xs font-extrabold">
            افزودن
            <ActiveStoreSvg />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
