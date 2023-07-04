import LoginLeftBg from '@/assets/svg/LoginLeftBg';
import LoginRightBg from '@/assets/svg/LoginRightBg';
import ContactUs from '@/components/ContactUs';
import React from 'react';

function FullDetails() {
  return (
    <div>
      <div className='h-[200px] bg-gray-200 md:hidden'></div>
      <div className='mt-14 flex flex-col text-black-items md:flex-row md:items-center md:justify-center '>
        <div className='relative right-80 hidden md:inline'>
          <LoginRightBg />
        </div>
        <div className='z-50 bg-white md:mb-4 md:h-[500px] md:min-w-[412px] md:rounded-3xl md:border md:border-[#F34535]'>
          <div>
            <p className='text-center text-4xl font-semibold  md:mt-28 md:text-[32px]'>اطلاعات حساب</p>
            <p className='mt-4 text-center text-xs md:text-sm'>
              برای تکمیل اطلاعات حساب کاربری لطفا نام و آدرس خود را وارد کنید
            </p>
            <div className='mt-12 flex flex-col px-4'>
              <label className='mb-1 text-xs font-black md:text-sm' htmlFor=''>
                نام و نام خانوادگی*
              </label>
              <input className='w-full rounded border border-gray-300 py-1.5  outline-none' type='text' />
              <label className='mb-1 mt-4 text-xs font-black md:text-sm' htmlFor=''>
                آدرس*
              </label>
              <input className='w-full rounded border border-gray-300 py-1.5 outline-none' type='text' />
              <div className='mt-6 flex items-center gap-1'>
                <input type='checkbox' className='rounded-2xl border-black' />
                <p className='text-xs font-normal'>مرا به خاطر بسپار</p>
              </div>

              <div className='md:flex md:items-end md:justify-between'>
                <div className='hidden md:inline'></div>
                <button className='btn_primary mt-8 w-full py-3 text-xs font-extrabold text-white md:mt-3 md:w-40 md:px-6'>
                  ادامه
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='relative left-80 hidden md:inline'>
          <LoginLeftBg />
        </div>
      </div>
      <div className='mt-16 hidden md:inline'>
        <ContactUs />
      </div>
    </div>
  );
}

export default FullDetails;
