import { ArrowDownSvg } from "@/assets/svg";
import React from "react";

type Color = "primary" | "delivered" | "canceled" | "returned";

type Props = {
  color: Color;
  className?: string;
};

function HistoryCard({ color = "primary", className, ...rest }: Props) {
  const colors = {
    primary: "bg-[#FBF2C0] ",
    delivered: "bg-[#C0DFFB] text-[#213664]",
    canceled: "bg-[#C0FBD4] text-[#0F2E1A]",
    returned: "bg-[#FCC0C0] text-[#7E0707]",
  };
  const bgColor = colors[color] ?? colors.primary;
  const classes = `px-5 rounded-xl py-1 ${bgColor} ${className}`;

  return (
    <div className="shadow-ca rounded-3xl bg-white h-[152px] px-4">
      <div className="flex pt-2 items-center justify-between">
        <p className={classes}>درحال ارسال</p>
        <p className="font-normal  tracking-wider text-[10px] text-black-items">
          ۱۵ / ۱۲ / ۱۴۰۱
        </p>
      </div>
      <hr className=" my-2" />
      <div className="flex pt-2 items-center justify-between">
        <p className="font-normal text-xs text-black-items">
          کد سفارش:۱۴۸۴۴۳۸۰۲
        </p>
        <p className="font-semibold  text-base text-black-items">
          ۲۸۵٬۰۰۰<span className="text-xs font-normal mr-1">تومان</span>
        </p>
      </div>
      <hr className=" my-2" />
      <div className="flex items-center justify-between">
        <div className="bg-white h-9 w-9 flex items-center justify-center shadow-ca rounded-full">
          <div className="">
            <ArrowDownSvg />
          </div>
        </div>
        <button className="btn_primary text-white px-12 py-1.5 text-xs font-extrabold">
          تکرار خرید
        </button>
      </div>
    </div>
  );
}

export default HistoryCard;
