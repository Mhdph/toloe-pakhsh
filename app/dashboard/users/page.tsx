import Image from 'next/image';
import React from 'react';
import Sohan from '@/assets/tempImages/sohan.png';
import {CloseIcon, MinusIcon, PlusIcon, StarIcon} from '@/assets/Icons';

function page() {
  return (
    <div className='flex h-[184px] w-full items-center rounded-3xl border border-black-items border-opacity-40 bg-white md:h-[148px]'>
      <Image src={Sohan} alt='product image' className='h-full md:pr-2' />
      <div className='flex-1 justify-center border-l-black-items  border-opacity-10 md:flex md:flex-col md:gap-y-3 md:border-l md:py-4 md:pl-3'>
        <p className='mt-1 text-[10px] font-black md:text-sm'>طرح سگ ۲۴ عددی</p>
        <hr className=' my-1' />
        <p className='text-[10px] font-black md:text-sm'>۰۹۴۶ ۲۳ ۸۷</p>
      </div>
      <div className='h-full flex-[2] px-2 pt-6 md:pt-0'>
        <div className='md:flex md:flex-col md:gap-y-3 md:px-3 md:py-3'>
          <hr className=' my-1 md:hidden' />
          <div className='flex items-center justify-between'>
            <p className='text-xs text-black-items md:text-sm'>ایمیل</p>
            <p className='text-xs font-normal md:text-sm'>ahmadAZZ@gmail.com</p>
          </div>
          <hr className=' my-1' />
          <div className='flex items-center justify-between'>
            <p className='text-xs text-black-items md:text-sm'>کد ملی</p>
            <p className='text-xs font-normal md:text-sm'>۰۸۴۷۶۳۵۲۱</p>
          </div>
          <hr className=' my-1' />
          <div className='flex items-center justify-between text-[#F6622C]'>
            <p className='text-xs'>تاریخ تولد</p>
            <p className='text-xs font-normal md:text-sm'>۱۳۶۵/۰۱/۱۸</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
