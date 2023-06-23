import LoginLeftBg from "@/assets/svg/LoginLeftBg";
import LoginRightBg from "@/assets/svg/LoginRightBg";
import ContactUs from "@/components/ContactUs";
import React from "react";

function login() {
  return (
    <div>
      <div className="h-[200px] bg-gray-200 md:hidden"></div>
      <div className="flex text-black-items flex-col md:flex-row mt-14 md:justify-center md:items-center ">
        <div className="hidden md:inline relative right-80">
          <LoginRightBg />
        </div>
        <div className="md:border md:rounded-3xl z-50 bg-white md:h-[600px] md:min-w-[412px] md:border-[#F34535] md:mb-4">
          <div>
            <p className="text-4xl md:text-[32px] text-center font-semibold md:mt-28">
              ورود به حساب
            </p>
            <p className="text-xs md:text-sm text-center mt-4">
              لطفا شماره موبایل خود را وارد کنید.
            </p>
            <div className="flex flex-col px-4 mt-12">
              <label className="font-black mb-1 text-xs md:text-sm" htmlFor="">
                شماره تلفن
              </label>
              <input
                className="rounded py-1.5 text-center outline-none w-full border border-gray-300"
                type="text"
                placeholder="-- -- --- --۰۹"
              />
              <div className="flex gap-1 mt-6 items-center">
                <input type="checkbox" className="rounded-2xl border-black" />
                <p className="font-normal text-xs md:text-sm">
                  مرا به خاطر بسپار
                </p>
              </div>
              <div className="md:flex md:items-end md:justify-between">
                <div className="hidden md:inline"></div>
                <button className="btn_primary py-3 w-full md:w-40 font-extrabold text-xs mt-8 md:mt-3 md:px-6 text-white">
                  ارسال کد تایید
                </button>
              </div>
            </div>
            <hr className="border-[0.5px] border-solid mt-14 mb-6 md:hidden" />
            <div className="flex bg-gradient-to-r special_offer items-center flex-col gap-4 md:mt-20 md:py-6 md:rounded-b-3xl">
              <p className="text-base font-semibold text-center md:text-white">
                آیا حساب کاربری ندارید؟
              </p>
              <button className="border-[#F6622C] text-xs font-extrabold text-[#F02D3C] md:bg-white h-9 w-full md:w-40 md:bg-32 rounded-3xl border-2 border-opacity-70 ">
                ثبت نام
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:inline relative left-80">
          <LoginLeftBg />
        </div>
      </div>
      <div className="hidden md:inline">
        <ContactUs />
      </div>
    </div>
  );
}

export default login;
