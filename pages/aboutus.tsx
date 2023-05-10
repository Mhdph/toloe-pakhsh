import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/Logo.png";
import Player from "@/assets/tempImages/Video Player.png";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

function AboutUs() {
  return (
    <div className="mb-20">
      <Navbar />
      <div className="pt-[74px]">
        <div className="serach_bar w-full h-[128px] rounded-b-3xl">
          <div className="relative">
            <Image src={Logo} alt="logo" className="pt-8 pr-9" />
            <div className="absolute text-center bottom-11 right-[122px] text-white">
              <p className="font-semibold text-4xl">درباره ما</p>
              <p className="font-normal text-xs mt-4">
                درباره طلوع پخش بیشتر بدانید ...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mt-6">
        <Image src={Player} alt="video player " />
        <p className="text-xs font-normal text-black-items mt-4 ">
          بنکداری آنلاین طلوع پخش با تکیه بر ۲۰ سال سابقه فعالیت در حوزه تولید و
          پخش مواد غذایی٬اولین بنکداری آنلاین در ایران را راه اندازی کرده است تا
          شما عزیزان بتوانید محصولات با کیفیت را با قیمت عمده تهیه کنید.
        </p>
        <div className="flex flex-col md:justify-center md:gap-4 md:mt-10 md:flex-row md:items-center">
          <hr className="seperator my-6 md:hidden" />
          <div className="md:text-center">
            <p className="text-2xl font-normal text-black-items mb-3 md:font-semibold  ">
              محصولات
            </p>
            <hr className="seperator my-4 hidden md:flex md:justify-center" />
            <p className="text-xs md:text-[14px] text-black-items font-normal">
              هرروز دسته های جدیدی از محصولات با کیفیت در حال اضافه شدن به سبد
              خرید محصولات ما می باشد تا بتوانیم به زودی تمامی نیاز های خانواده
              شما را از طریق همین سایت فراهم کنیم.
            </p>
            <div className="flex flex-row-reverse my-2 md:hidden">
              <button className="btn_Primary_small text-white text-xs font-extrabold ">
                مشاهده محصولات
              </button>
            </div>
          </div>
          <hr className="seperator my-6 md:hidden" />
          <div className="md:text-center">
            <p className="text-2xl font-normal md:font-semibold text-black-items mb-3 ">
              همکاری
            </p>
            <hr className="seperator my-4 hidden md:flex md:justify-center" />
            <p className="text-xs md:text-[14px] text-black-items font-normal">
              یکی دیگر از فرصت هایی که بنکداری آنلاین طلوع پخش برای شما فراهم
              کرده است٬فرصت درآمد زایی تا چند ده میلیون تومان در ماه است که برای
              کسب اطلاعات بیشتر آن می توانید از اینجا اقدام کنید.
            </p>
            <div className="flex flex-row-reverse my-2 md:hidden">
              <button className="btn_Primary_small text-white text-xs font-extrabold ">
                ادامه مطلب...
              </button>
            </div>
          </div>
          <hr className="seperator my-6 md:hidden" />
          <div className="md:text-center">
            <p className="text-2xl font-normal md:font-semibold  text-black-items mb-3 ">
              وبلاگ
            </p>
            <hr className="seperator my-4 hidden md:flex md:justify-center" />
            <p className="text-xs md:text-[14px] text-black-items font-normal">
              یکی دیگر از فرصت هایی که بنکداری آنلاین طلوع پخش برای شما فراهم
              کرده است٬فرصت درآمد زایی تا چند ده میلیون تومان در ماه است که برای
              کسب اطلاعات بیشتر آن می توانید از اینجا اقدام کنید.
            </p>
            <div className="flex flex-row-reverse my-2 md:hidden">
              <button className="btn_Primary_small text-white text-xs font-extrabold ">
                وبلاگ
              </button>
            </div>
          </div>
        </div>
        <hr className="seperator mt-4 mb-10 md:hidden" />

        <div className="flex flex-col gap-2">
          <label className="font-black mb-1 text-xs" htmlFor="">
            شماره تلفن
          </label>
          <input
            className="rounded py-1.5 text-right outline-none w-full border border-gray-300 placeholder:pr-1"
            type="text"
            placeholder="نام و نام خانوادگی"
          />
          <label className="font-black mb-1 text-xs" htmlFor="">
            شماره تلفن
          </label>
          <input
            className="rounded py-1.5 text-right outline-none w-full border border-gray-300 placeholder:pr-1"
            type="text"
            placeholder="-- -- --- --۰۹"
          />
          <label className="font-black mb-1 text-xs" htmlFor="">
            شماره تلفن
          </label>
          <textarea className="rounded py-10 text-right outline-none w-full border border-gray-300" />
        </div>
        <button className="bg_primary w-full text-white font-extrabold text-xs py-2 my-4 rounded-3xl">
          ثبت تماس
        </button>
      </div>
      <ContactUs />
    </div>
  );
}

export default AboutUs;
