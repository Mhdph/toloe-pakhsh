import ArrowBlackLeft from "@/assets/svg/ArrowBlackLeft";
import React from "react";
import Rectangl from "@/assets/tempImages/Rectangl.png";
import Image from "next/image";
function Myorder() {
  return (
    <div className="mt-8 px-4">
      <div className="flex items-center justify-between text-base">
        <p className="font-semibold">سفارش های من</p>
        <div className="flex items-center gap-1">
          <p className="font-extrabold text-xs">مشاهده همه</p>
          <ArrowBlackLeft />
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4 justify-center">
        <div className="flex items-center flex-col gap-3">
          <Image src={Rectangl} alt="incoming" />
          <p className="text-xs font-extrabold">جاری</p>
        </div>
        <div className="flex items-center flex-col gap-3">
          <Image src={Rectangl} alt="incoming" />
          <p className="text-xs font-extrabold">تحویل شده</p>
        </div>
        <div className="flex items-center flex-col gap-3">
          <Image src={Rectangl} alt="incoming" />
          <p className="text-xs font-extrabold">لفو شده</p>
        </div>
        <div className="flex items-center flex-col gap-3">
          <Image src={Rectangl} alt="incoming" />
          <p className="text-xs font-extrabold">مرجوع شده</p>
        </div>
      </div>
    </div>
  );
}

export default Myorder;
