import React from "react";

function Checkout() {
  return (
    <div className="h-[412px]">
      <p className="font-semibold mt-12 text-center text-4xl"> صورت حساب </p>

      <div className="px-5 mt-8">
        <hr className=" my-3" />
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-black-items">
            مجموع محصولات:
          </p>
          <div className="items-center flex">
            <p className="text-base font-semibold">۱۳۸,۰۰۰</p>
            <span className="text-xs font-normal opacity-60 mr-1">تومان</span>
          </div>
        </div>{" "}
        <hr className=" my-3" />
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold  text-black-items">تخفیف:</p>
          <div className="items-center flex">
            <p className="text-base font-semibold">۱</p>
            <span className="text-xs font-normal opacity-60 mr-1">بسته</span>
          </div>
        </div>
        <hr className=" my-3" />
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold  text-black-items">حمل و نقل:</p>
          <div className="items-center flex">
            <p className="text-base font-semibold">۱۳۸,۰۰۰</p>
            <span className="text-xs font-normal opacity-60 mr-1">تومان</span>
          </div>
        </div>
        <hr className=" my-3" />
        <div className="flex items-center justify-between text-[#F6622C]">
          <p className="text-base font-semibold "> مجموع کل:</p>
          <div className="items-center flex">
            <p className="text-base font-semibold">۱۳۶٬۰۰۰</p>
            <span className="text-xs font-normal text-black-items opacity-60 mr-1">
              تومان
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-4 mt-16 md:justify-end text-white">
        <button className="btn_primary h-9 w-full text-xs font-extrabold">
          پرداخت
        </button>
      </div>
    </div>
  );
}

export default Checkout;
