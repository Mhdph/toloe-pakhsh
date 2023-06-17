import Image from "next/image";
import React from "react";
import Sohan from "@/assets/tempImages/sohan.png";
import { CloseIcon, StarIcon } from "@/assets/Icons";

function ShoppingCard() {
  return (
    <div className="bg-white shadow-ca rounded-3xl h-[184px] w-full flex items-center">
      <div className="relative">
        <div className="absolute right-4 top-4">
          <CloseIcon />
        </div>
        <Image src={Sohan} alt="product image" className="h-full" />
      </div>
      <div className="flex-1 px-2">
        <div className="flex items-center justify-between">
          <p className="font-black text-xs">آبنبات چوبی قلبی</p>
          <StarIcon />
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
        <hr className=" my-1" />
        <div className="flex items-center justify-between text-[#F6622C]">
          <p className="text-xs">جمع خرید:</p>
          <div className="items-center flex">
            <p className="text-base font-black">۱۳۶٬۰۰۰</p>
            <span className="text-[10px] font-normal text-black-items opacity-60 mr-1">
              تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard;
