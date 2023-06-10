import ArrowBlackLeft from "@/assets/svg/ArrowBlackLeft";
import React from "react";
import Rectangl from "@/assets/tempImages/Rectangl.png";
import Image from "next/image";
function MyOrder() {
  return (
    <div className="mt-8 px-4">
      <div className="flex items-center justify-between text-base">
        <p className="font-semibold">سفارش های من</p>
        <div className="flex items-center gap-1">
          <p className="text-xs font-extrabold">مشاهده همه</p>
          <ArrowBlackLeft />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="flex flex-col items-center gap-3">
          <Image
            src={Rectangl}
            alt="incoming"
            className="md:h-[80px] md:w-[211px]"
          />
          <p className="text-xs font-extrabold">جاری</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            src={Rectangl}
            alt="incoming"
            className="md:h-[80px] md:w-[211px]"
          />
          <p className="text-xs font-extrabold">تحویل شده</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            src={Rectangl}
            alt="incoming"
            className="md:h-[80px] md:w-[211px]"
          />
          <p className="text-xs font-extrabold">لفو شده</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            src={Rectangl}
            alt="incoming"
            className="md:h-[80px] md:w-[211px]"
          />
          <p className="text-xs font-extrabold">مرجوع شده</p>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
