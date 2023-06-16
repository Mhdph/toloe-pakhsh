import Link from "next/link";
import React from "react";

function AboutUs() {
  return (
    <div className="w-full mt-10 px-5 text-black-items md:pb-8">
      <div className="flex flex-col md:items-center">
        <p className="text-4xl font-semibold text-black-items  md:text-center">
          درباره ما
        </p>
        <hr className="seperator my-4 md:flex md:justify-center" />
        <p className="text-xs text-black-items md:w-1/2 font-normal md:text-center md:text-[14px]">
          بنکداری آنلاین طلوع پخش با تکیه بر ۲۰ سال سابقه فعالیت در حوزه تولید و
          پخش مواد غذایی٬اولین بنکداری آنلاین در ایران را راه اندازی کرده است تا
          شما عزیزان بتوانید محصولات با کیفیت را با قیمت عمده تهیه کنید.
        </p>
        <div className="flex flex-row-reverse mt-6 md:hidden">
          <button className="btn_Primary_small text-white text-xs font-extrabold ">
            <Link href="/"> ادامه مطلب...</Link>
          </button>
        </div>
      </div>
      <div className="flex md:items-center md:justify-center flex-row-reverse my-2 md:mt-10">
        <button className="border-black-items border bg-white text-black-items font-extrabold text-[14px] hidden md:inline rounded-3xl px-10 py-1.5">
          <Link href="/"> ادامه مطلب...</Link>
        </button>
      </div>

      <div className="flex md:items-center md:justify-center flex-row-reverse my-2">
        <button className="btn_Primary_small md: hidden text-white text-xs font-extrabold ">
          ادامه مطلب...
        </button>
      </div>
      <div>
        <div className="flex flex-col md:justify-center md:gap-4 md:mt-10 md:pb-4 md:flex-row md:items-center overflow-hidden">
          <hr className="seperator my-4 md:hidden" />
          <div className="md:text-center">
            <p className="text-2xl font-normal text-black-items mb-3 md:font-semibold">
              محصولات
            </p>
            <hr className="seperator my-4 hidden md:flex md:justify-center" />
            <p className="text-xs  text-black-items font-normal">
              هرروز دسته های جدیدی از محصولات با کیفیت در حال اضافه شدن به سبد
              خرید محصولات ما می باشد تا بتوانیم به زودی تمامی نیاز های خانواده
              شما را از طریق همین سایت فراهم کنیم.
            </p>
            <div className="flex flex-row-reverse my-2 md:hidden">
              <button className="btn_Primary_small text-white text-xs font-extrabold ">
                <Link href="/store">مشاهده محصولات</Link>
              </button>
            </div>
          </div>
          <hr className="seperator my-6 md:hidden" />
          <div className="md:text-center">
            <p className="text-2xl font-normal md:font-semibold text-black-items mb-3 ">
              همکاری
            </p>
            <hr className="seperator my-4 hidden md:flex md:justify-center" />
            <p className="text-xs  text-black-items font-normal">
              یکی دیگر از فرصت هایی که بنکداری آنلاین طلوع پخش برای شما فراهم
              کرده است٬فرصت درآمد زایی تا چند ده میلیون تومان در ماه است که برای
              کسب اطلاعات بیشتر آن می توانید از اینجا اقدام کنید.
            </p>
            <div className="flex flex-row-reverse my-2 md:hidden">
              <button className="btn_Primary_small text-white text-xs font-extrabold ">
                <Link href="/"> ادامه مطلب...</Link>
              </button>
            </div>
          </div>
          <hr className="seperator my-6 md:hidden" />
          <div className="md:text-center">
            <p className="text-2xl font-normal md:font-semibold  text-black-items mb-3 ">
              وبلاگ
            </p>
            <hr className="seperator my-4 hidden md:flex md:justify-center" />
            <p className="text-xs  text-black-items font-normal">
              یکی دیگر از فرصت هایی که بنکداری آنلاین طلوع پخش برای شما فراهم
              کرده است٬فرصت درآمد زایی تا چند ده میلیون تومان در ماه است که برای
              کسب اطلاعات بیشتر آن می توانید از اینجا اقدام کنید.
            </p>
            <div className="flex flex-row-reverse my-2 md:hidden">
              <button className="btn_Primary_small text-white text-xs font-extrabold ">
                <Link href="/blog">وبلاگ </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
