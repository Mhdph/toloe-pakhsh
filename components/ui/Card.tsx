import { ActiveStoreSvg } from "@/assets/svg";
import StarSvg from "@/assets/svg/StarSvg";
import React from "react";
import Product from "@/assets/tempImages/Product.png";

import Image from "next/image";
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
        <div className="flex items-center gap-4 mt-2">
          <div className="border opacity-90 relative h-8 w-20 border-[#F6602D] rounded-full p-1">
            <div className="absolute bottom-1 left-0.5">
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3643 3.59873L12 4.23308L12.6357 3.59873L13.7528 2.48401C15.8694 0.371997 19.3018 0.371997 21.4183 2.48401L22.0488 1.85219L21.4183 2.48401L21.5134 2.57887C23.5968 4.65781 23.6329 8.0163 21.5949 10.1394L12.0558 20.0764C12.0256 20.1079 11.9744 20.1079 11.9442 20.0764L2.40512 10.1394C0.367059 8.0163 0.403204 4.65781 2.48661 2.57887L2.58167 2.48401C4.69822 0.371997 8.13062 0.371997 10.2472 2.48401L11.3643 3.59873Z"
                  stroke="url(#paint0_linear_396_13085)"
                  strokeWidth="1.8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_396_13085"
                    x1="24"
                    y1="-6.25849e-07"
                    x2="0"
                    y2="1.91587e-07"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6602D" />
                    <stop offset="1" stopColor="#FA8821" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <button className="btn_primary w-[360px] py-1 justify-around rounded-[18px] text-white flex items-center text-xs font-extrabold">
            افزودن
            <ActiveStoreSvg />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
