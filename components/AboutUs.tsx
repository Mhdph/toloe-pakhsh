import React from "react";

function AboutUs() {
  return (
    <div className="w-full mt-10 px-5">
      <p className="text-4xl font-semibold text-black-items ">درباره ما</p>
      <hr className="seperator my-4" />
      <p className="text-xs text-black-items font-normal">
        بنکداری آنلاین طلوع پخش با تکیه بر ۲۰ سال سابقه فعالیت در حوزه تولید و
        پخش مواد غذایی٬اولین بنکداری آنلاین در ایران را راه اندازی کرده است تا
        شما عزیزان بتوانید محصولات با کیفیت را با قیمت عمده تهیه کنید.
      </p>
      <div className="flex flex-row-reverse my-2">
        <button className="btn_Primary_small text-white text-xs font-extrabold ">
          ادامه مطلب...
        </button>
      </div>
      <hr className="seperator my-6" />
      <p className="text-2xl font-normal text-black-items mb-3 "> محصولات</p>
      <p className="text-xs text-black-items font-normal">
        هرروز دسته های جدیدی از محصولات با کیفیت در حال اضافه شدن به سبد خرید
        محصولات ما می باشد تا بتوانیم به زودی تمامی نیاز های خانواده شما را از
        طریق همین سایت فراهم کنیم.
      </p>
      <div className="flex flex-row-reverse my-2">
        <button className="btn_Primary_small text-white text-xs font-extrabold ">
          مشاهده محصولات
        </button>
      </div>
      <hr className="seperator my-6" />
      <p className="text-2xl font-normal text-black-items mb-3 "> همکاری</p>
      <p className="text-xs text-black-items font-normal">
        یکی دیگر از فرصت هایی که بنکداری آنلاین طلوع پخش برای شما فراهم کرده
        است٬فرصت درآمد زایی تا چند ده میلیون تومان در ماه است که برای کسب
        اطلاعات بیشتر آن می توانید از اینجا اقدام کنید.
      </p>
      <div className="flex flex-row-reverse my-2">
        <button className="btn_Primary_small text-white text-xs font-extrabold ">
          ادامه مطلب...
        </button>
      </div>
      <hr className="seperator my-4" />
      <p className="text-2xl font-normal text-black-items mb-3 "> وبلاگ</p>
      <p className="text-xs text-black-items font-normal">
        یکی دیگر از فرصت هایی که بنکداری آنلاین طلوع پخش برای شما فراهم کرده
        است٬فرصت درآمد زایی تا چند ده میلیون تومان در ماه است که برای کسب
        اطلاعات بیشتر آن می توانید از اینجا اقدام کنید.
      </p>
      <div className="flex flex-row-reverse my-2">
        <button className="btn_Primary_small text-white text-xs font-extrabold ">
          وبلاگ
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
