import React from "react";

function ConfirmCode() {
  return (
    <div>
      <div className="h-[200px] bg-gray-200"></div>
      <div className="flex text-black-items flex-col mt-14 ">
        <p className="text-4xl text-center font-semibold">
          کد تایید را وارد کنید
        </p>
        <p className="text-xs text-center mt-4">
          کد ۶ رقمی برای شما ارسال گردید
        </p>
        <div className="flex flex-col px-4 mt-12">
          <label className="font-black mb-1 text-xs" htmlFor="">
            کد تایید
          </label>
          <input
            className="rounded py-1.5 text-center outline-none w-full border border-gray-300"
            type="text"
            placeholder="-----"
          />
          <div className="flex gap-1 mt-6 items-center">
            <input type="checkbox" className="rounded-2xl border-black" />
            <p className="font-normal text-xs">مرا به خاطر بسپار</p>
          </div>
          <p className="my-4 font-normal text-xs">
            ۵۵ : ۰۲مانده تا دریافت مجدد کد
          </p>
          <button className="btn_primary font-extrabold text-xs mt-8 text-white">
            ادامه
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCode;
