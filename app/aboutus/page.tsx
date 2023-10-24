import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/images/Logo.png';
import Player from '@/assets/tempImages/Video Player.png';
import Footer from '@/components/Footer';
import ContactUs from '@/components/ContactUs';
import {baseUrl} from '@/lib/config';

function AboutUs() {
  const videoUrl = baseUrl + '/tizer.mp4';
  return (
    <div className=''>
      <div className='pt-[74px] md:hidden'>
        <div className='serach_bar h-[128px] w-full rounded-b-3xl'>
          <div className='relative'>
            <Image src={Logo} alt='logo' className='pr-9 pt-8' />
            <div className='absolute bottom-11 right-[122px] text-center text-white'>
              <p className='text-4xl font-semibold'>درباره ما</p>
              <p className='mt-4 text-xs font-normal'>درباره طلوع پخش بیشتر بدانید ...</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6 px-4'>
        <div className='flex items-center justify-center'>
          <video controls className='mb-6 w-full md:h-[600px] md:w-[1276px]'>
            <source src={videoUrl} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='flex flex-col md:items-center'>
          <p className='hidden text-4xl font-semibold text-black-items md:inline  md:text-center'>درباره ما</p>
          <hr className='seperator my-4 hidden  md:flex md:justify-center' />
          <p className='text-xs font-normal text-black-items md:w-1/2 md:text-center md:text-[14px]'>
            نکداری آنلاین طلوع پخش با تکیه بر ۲۰ سال سابقه فعالیت در حوزه تولید و پخش مواد غذایی٬اولین بنکداری آنلاین در
            ایران را راه اندازی کرده است تا شما عزیزان بتوانید محصولات با کیفیت را با قیمت عمده تهیه کنید. هرروز دسته
            های جدیدی از محصولات با کیفیت در حال اضافه شدن به سبد خرید محصولات ما می باشد تا بتوانیم به زودی تمامی نیاز
            های خانواده شما را از طریق همین سایت فراهم کنیم.
          </p>
        </div>
        <div className='md:pb-5'>
          <div className='flex flex-col overflow-hidden md:mt-10 md:flex-row md:items-center md:justify-center md:gap-4 md:pb-4'>
            <hr className='seperator my-4 md:hidden' />
            <div className='md:text-center'>
              <p className='mb-3 text-2xl font-normal text-black-items md:font-semibold'>محصولات</p>
              <hr className=' my-4 hidden w-full md:flex md:justify-center' />
              <p className='text-xs  font-normal text-black-items'>
                هرروز دسته های جدیدی از محصولات با کیفیت در حال اضافه شدن به سبد خرید محصولات ما می باشد تا بتوانیم به
                زودی تمامی نیاز های خانواده شما را از طریق همین سایت فراهم کنیم.
              </p>
            </div>
            <hr className='seperator my-6 md:hidden' />
            <div className='md:text-center'>
              <p className='mb-3 text-2xl font-normal text-black-items md:font-semibold '>همکاری</p>
              <hr className=' my-4 hidden md:flex md:justify-center' />
              <p className='text-xs  font-normal text-black-items'>
                یکی دیگر از فرصت هایی که بنکداری آنلاین طلوع پخش برای شما فراهم کرده است٬فرصت درآمد زایی تا چند ده
                میلیون تومان در ماه است که برای کسب اطلاعات بیشتر آن می توانید از اینجا اقدام کنید.
              </p>
            </div>
            <hr className='seperator my-6 md:hidden' />
            <div className='md:text-center'>
              <p className='mb-3 text-2xl font-normal  text-black-items md:font-semibold '>وبلاگ</p>
              <hr className=' my-4 hidden md:flex md:justify-center' />
              <p className='text-xs  font-normal text-black-items'>
                یکی دیگر از فرصت هایی که بنکداری آنلاین طلوع پخش برای شما فراهم کرده است٬فرصت درآمد زایی تا چند ده
                میلیون تومان در ماه است که برای کسب اطلاعات بیشتر آن می توانید از اینجا اقدام کنید.
              </p>
            </div>
          </div>
        </div>
        <hr className='seperator mb-10 mt-4 md:hidden' />

        <div className='flex flex-col gap-2 md:hidden'>
          <label className='mb-1 text-xs font-black' htmlFor=''>
            شماره تلفن
          </label>
          <input
            className='w-full rounded border border-gray-300 py-1.5 text-right outline-none placeholder:pr-1'
            type='text'
            placeholder='نام و نام خانوادگی'
          />
          <label className='mb-1 text-xs font-black' htmlFor=''>
            شماره تلفن
          </label>
          <input
            className='w-full rounded border border-gray-300 py-1.5 text-right outline-none placeholder:pr-1'
            type='text'
            placeholder='-- -- --- --۰۹'
          />
          <label className='mb-1 text-xs font-black' htmlFor=''>
            شماره تلفن
          </label>
          <textarea className='w-full rounded border border-gray-300 py-10 text-right outline-none' />
        </div>
        <button className='bg_primary my-4 w-full rounded-3xl py-2 text-xs font-extrabold text-white md:hidden'>
          ثبت تماس
        </button>
      </div>
      <ContactUs />
    </div>
  );
}

export default AboutUs;
