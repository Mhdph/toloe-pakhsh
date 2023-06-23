import React from "react";

function register() {
  return (
    <div>
      <div className="h-[200px] bg-gray-200"></div>
      <div className="flex text-black-items flex-col mt-14 ">
        <p className="text-4xl text-center font-semibold"> ثبت نام </p>
        <p className="text-xs text-center mt-4">
          لطفا شماره موبایل خود را وارد کنید.
        </p>
        <div className="flex flex-col px-4 mt-12">
          <label className="font-black mb-1 text-xs" htmlFor="">
            شماره تلفن
          </label>
          <input
            className="rounded py-1.5 text-center outline-none w-full border border-gray-300"
            type="text"
            placeholder="-- -- --- --۰۹"
          />
          <div className="flex gap-1 mt-6 items-center">
            <input type="checkbox" className="rounded-2xl border-black" />
            <p className="font-normal text-xs"> با شرایط طلوع پخش موافقم </p>
          </div>
          <button className="btn_primary font-extrabold text-xs mt-8 text-white">
            ارسال کد تایید
          </button>
        </div>
        <hr className="border-[0.5px] border-solid mt-14 mb-6" />
        <div className="flex items-center flex-col gap-4">
          <p className="text-base font-semibold text-center">
            آیا ثبت نام کرده اید؟
          </p>
          <button className="border-[#F6622C] text-xs font-extrabold text-[#F02D3C] h-9 w-[350px] rounded-3xl border-2 border-opacity-70 ">
            ورود
          </button>
        </div>
      </div>
    </div>
  );
}

export default register;
