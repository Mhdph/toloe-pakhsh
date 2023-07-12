import {CloseIcon, StarIcon} from '@/assets/Icons';
import Image from 'next/image';
import React from 'react';
import Sohan from '@/assets/tempImages/sohan.png';

function OrdersItem() {
  return (
    <div className='flex h-[184px] w-full flex-row-reverse items-center rounded-3xl  bg-white md:h-[148px]'>
      <div>
        <Image src={Sohan} alt='product image' className='h-full md:pr-2' />
      </div>
      <div className='h-full flex-1 px-2 pt-6 md:grid md:grid-cols-2 md:pt-0'>
        <div className='md:flex md:flex-col md:gap-y-3 md:py-3 md:pr-3'>
          <hr className=' my-1 md:hidden' />
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>بسته</span>
              <p className='text-xs font-black md:text-sm'>۱</p>
            </div>
            <p className='text-xs text-black-items md:text-sm'>:تعداد</p>
          </div>
          <hr className=' my-1' />
          <div className='flex  items-center justify-between'>
            <div className='flex items-center'>
              <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>تومان</span>
              <p className='text-xs font-black md:text-sm'>۱۳۸,۰۰۰</p>
            </div>
            <p className='text-xs text-black-items md:text-sm'>:قیمت</p>
          </div>
          <hr className=' my-1' />
          <div className='flex items-center justify-between text-[#F6622C]'>
            <div className='flex items-center'>
              <span className='mr-1 text-[10px] font-normal text-black-items opacity-60'>تومان</span>
              <p className='text-base font-black'>۱۳۶٬۰۰۰</p>
            </div>
            <p className='text-xs'>:جمع خرید</p>
          </div>
        </div>
        <div className='border-l-black-items border-opacity-10  md:flex md:flex-col md:gap-y-3 md:border-l md:py-4 md:pl-3'>
          <div className='flex items-center justify-between'>
            <StarIcon />
            <p className='text-xs font-black md:text-sm'>آبنبات چوبی قلبی</p>
          </div>
          <div className='flex items-center justify-between'>
            <div></div>
            <p className='mt-1 text-[10px] font-normal md:text-xs'>طرح سگ ۲۴ عددی</p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>بسته</span>
              <p className='text-xs font-black md:text-sm'>۱</p>
            </div>
            <p className='text-xs text-black-items md:text-sm'>:واحد</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersItem;
