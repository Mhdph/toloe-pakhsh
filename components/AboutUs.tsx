import Link from 'next/link';
import React from 'react';

function AboutUs() {
  return (
    <div className='mt-10 w-full px-5 text-black-items md:pb-8'>
      <div className='flex flex-col md:items-center'>
        <p className='text-4xl font-semibold text-black-items  md:text-center'>درباره ما</p>
        <hr className='seperator my-4 md:flex md:justify-center' />
        <p className='text-xs font-normal text-black-items md:w-1/2 md:text-center md:text-[14px]'>
          بنکداری آنلاین طلوع پخش با تکیه بر ۲۰ سال سابقه فعالیت در حوزه تولید و پخش مواد غذایی٬اولین بنکداری آنلاین در
          ایران را راه اندازی کرده است تا شما عزیزان بتوانید محصولات با کیفیت را با قیمت عمده تهیه کنید.
        </p>
        <div className='mt-6 flex flex-row-reverse md:hidden'>
          <button className='btn_Primary_small text-xs font-extrabold text-white '>
            <Link href='/aboutus'> ادامه مطلب...</Link>
          </button>
        </div>
      </div>
      <div className='my-2 flex flex-row-reverse md:mt-10 md:items-center md:justify-center'>
        <button className='hidden rounded-3xl border border-black-items bg-white px-10 py-1.5 text-[14px] font-extrabold text-black-items md:inline'>
          <Link href='/aboutus'> ادامه مطلب...</Link>
        </button>
      </div>

      <div className='my-2 flex flex-row-reverse md:items-center md:justify-center'>
        <button className='btn_Primary_small md: hidden text-xs font-extrabold text-white '>ادامه مطلب...</button>
      </div>
      <div>
        <div className='flex flex-col overflow-hidden md:mt-10 md:flex-row md:items-center md:justify-center md:gap-4 md:pb-4'>
          <hr className='seperator my-4 md:hidden' />
          <div className='md:text-center'>
            <p className='mb-3 text-2xl font-normal text-black-items md:font-semibold'>محصولات</p>
            <hr className='seperator my-4 hidden md:flex md:justify-center' />
            <p className='text-xs  font-normal text-black-items'>
              هرروز دسته های جدیدی از محصولات با کیفیت در حال اضافه شدن به سبد خرید محصولات ما می باشد تا بتوانیم به
              زودی تمامی نیاز های خانواده شما را از طریق همین سایت فراهم کنیم.
            </p>
            <div className='my-2 flex flex-row-reverse md:hidden'>
              <button className='btn_Primary_small text-xs font-extrabold text-white '>
                <Link href='/shop'>مشاهده محصولات</Link>
              </button>
            </div>
          </div>
          <hr className='seperator my-6 md:hidden' />
          <div className='md:text-center'>
            <p className='mb-3 text-2xl font-normal text-black-items md:font-semibold '>همکاری</p>
            <hr className='seperator my-4 hidden md:flex md:justify-center' />
            <p className='text-xs  font-normal text-black-items'>
              یکی دیگر از فرصت هایی که بنکداری آنلاین طلوع پخش برای شما فراهم کرده است٬فرصت درآمد زایی تا چند ده میلیون
              تومان در ماه است که برای کسب اطلاعات بیشتر آن می توانید از اینجا اقدام کنید.
            </p>
            <div className='my-2 flex flex-row-reverse md:hidden'>
              <button className='btn_Primary_small text-xs font-extrabold text-white '>
                <Link href='/'> ادامه مطلب...</Link>
              </button>
            </div>
          </div>
          <hr className='seperator my-6 md:hidden' />
          <div className='md:text-center'>
            <p className='mb-3 text-2xl font-normal  text-black-items md:font-semibold '>وبلاگ</p>
            <hr className='seperator my-4 hidden md:flex md:justify-center' />
            <p className='text-xs  font-normal text-black-items'>
              یکی دیگر از فرصت هایی که بنکداری آنلاین طلوع پخش برای شما فراهم کرده است٬فرصت درآمد زایی تا چند ده میلیون
              تومان در ماه است که برای کسب اطلاعات بیشتر آن می توانید از اینجا اقدام کنید.
            </p>
            <div className='my-2 flex flex-row-reverse md:hidden'>
              <button className='btn_Primary_small text-xs font-extrabold text-white '>
                <a href='https://toloupakhsh.ir/mag/'>وبلاگ </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
