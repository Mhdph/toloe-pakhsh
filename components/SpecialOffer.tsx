import React from 'react';
import Logo from '@/assets/images/Logo.png';
import Image from 'next/image';
import ListCard from './ui/ListCard';
import Link from 'next/link';
import {ProductData} from '@/types';

type SpecialOfferProps = {
  data: ProductData;
};

const SpecialOffer: React.FC<SpecialOfferProps> = ({data}) => {
  return (
    <div className='special_offer relative h-[564px] w-full md:h-full'>
      <Image src={Logo} alt='logo' className='pt-8' />
      <p className='absolute right-6 top-1 mt-10 text-right text-2xl font-normal text-white md:right-20 md:top-2'>
        تخفیفات ویژه
      </p>
      <div className='absolute right-4 top-28 flex items-center gap-3 md:hidden'>
        <div className='flex h-[60px] w-[60px] flex-col items-center justify-center rounded-3xl bg-white text-[#F44D32]'>
          <p className='text-sm font-normal'>ثانیه</p>
          <p className='text-base font-semibold'>۴۳</p>
        </div>
        <div className='flex h-[60px] w-[60px] flex-col items-center justify-center rounded-3xl bg-white text-[#F44D32]'>
          <p className='text-sm font-normal'>دقیقه</p>
          <p className='text-base font-semibold'>۲۴</p>
        </div>
        <div className='flex h-[60px] w-[60px] flex-col items-center justify-center rounded-3xl bg-white text-[#F44D32]'>
          <p className='text-sm font-normal'>ساعت</p>
          <p className='text-base font-semibold'>۰۸</p>
        </div>
        <div className='flex h-[60px] w-[60px] flex-col items-center justify-center rounded-3xl bg-white text-[#F44D32]'>
          <p className='text-sm font-normal'>روز</p>
          <p className='text-base font-semibold'>۰۱</p>
        </div>
      </div>
      <div className='absolute top-0 mt-48 flex w-full items-center gap-3 overflow-x-scroll scroll-smooth whitespace-nowrap px-4 py-2 scrollbar-none md:mt-32 md:justify-center 2xl:gap-8'>
        {data.map((item) => (
          <ListCard key={item.id} data={item} />
        ))}
      </div>
      <div className='mt-36 flex  justify-center md:mt-16 '>
        <div className='w-[1030px] 2xl:w-[1100px]'>
          <div className='flex justify-center text-white md:justify-end'>
            <button className='mb-16 mt-48 h-9 w-[350px] rounded-3xl bg-white text-center text-xs font-extrabold text-[#f02d3c] md:w-[196px]'>
              <Link href='/shop'>مشاهده محصولات</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecialOffer;
