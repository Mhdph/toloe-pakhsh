import { ActiveStoreSvg, ArrowDownSvg } from '@/assets/svg';
import StarSvg from '@/assets/svg/StarSvg';
import React from 'react';
import Product from '@/assets/tempImages/Product.png';

import Image from 'next/image';
import HeartSvg from '@/assets/svg/HeartSvg';
function ListCard() {
  return (
    <div className='h-[264px] min-w-[170px] max-w-[170px] rounded-3xl border border-black-items border-opacity-40 bg-white md:h-[300px] md:min-w-[196px] md:max-w-[196px]'>
      <div className='flex justify-center'>
        <Image src={Product} alt='product image' className='h-[120px] w-[170px] border-b md:w-[223px]' />
      </div>
      <div className='mt-2 px-2'>
        <div className='flex items-center justify-between '>
          <p className='text-xs font-black md:text-ca'>آبنبات چوبی قلبی</p>
          <StarSvg />
        </div>
        <p className='mt-1 text-[10px] font-normal md:mt-2 md:text-xs'>طرح سگ ۲۴ عددی</p>
        <hr className=' my-1 md:my-2' />
        <div className='flex items-center justify-between'>
          <p className='text-xs text-black-items md:text-ca'>واحد:</p>
          <div className='flex items-center'>
            <p className='text-xs font-black md:text-ca'>۱</p>
            <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>بسته</span>
          </div>
        </div>
        <hr className=' my-1 md:my-2' />
        <div className='flex items-center justify-between'>
          <p className='text-xs text-black-items md:text-ca'>قیمت:</p>
          <div className='flex items-center'>
            <p className='text-xs font-black md:text-ca'>۱۳۸,۰۰۰</p>
            <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>تومان</span>
          </div>
        </div>
        <div className='mt-2 flex items-center gap-2 md:mt-3 md:justify-center'>
          <div className='flex h-9 w-9 items-center justify-center rounded-full border border-[#F6602D] md:h-10 md:w-10'>
            <div className=''>
              <HeartSvg />
            </div>
          </div>
          <button className='btn_primary flex w-[110px] items-center justify-around rounded-[18px] py-1 text-xs font-extrabold text-white md:w-[157px] md:py-2'>
            افزودن
            <ActiveStoreSvg />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
