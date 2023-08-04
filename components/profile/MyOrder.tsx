'use client';
import React from 'react';
import Rectangl from '@/assets/tempImages/Rectangl.png';
import RectanglDesktop from '@/assets/images/Rectangle 44.png';
import Image from 'next/image';
import {ArrowBlackLeftIcon} from '@/assets/Icons';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';
function MyOrder() {
  const isMobile = useMediaQuery('(max-width: 648px)');

  return (
    <div className='mt-8 px-4'>
      <div className='flex items-center justify-between text-base'>
        <p className='font-semibold'>سفارش های من</p>
        <div className='flex items-center gap-1'>
          <Link href='/history' className='text-xs font-extrabold'>
            مشاهده همه
          </Link>
          <ArrowBlackLeftIcon />
        </div>
      </div>
      <div className='mt-4 flex items-center justify-center gap-3 2xl:gap-8'>
        <Link href='/history' className='flex flex-col items-center gap-3'>
          <Image src={isMobile ? Rectangl : RectanglDesktop} alt='incoming' className='md:h-[80px] md:w-[211px]' />
          <p className='text-xs font-extrabold'>جاری</p>
        </Link>
        <Link href='/history' className='flex flex-col items-center gap-3'>
          <Image src={isMobile ? Rectangl : RectanglDesktop} alt='incoming' className='md:h-[80px] md:w-[211px]' />
          <p className='text-xs font-extrabold'>تحویل شده</p>
        </Link>
        <Link href='/history' className='flex flex-col items-center gap-3'>
          <Image src={isMobile ? Rectangl : RectanglDesktop} alt='incoming' className='md:h-[80px] md:w-[211px]' />
          <p className='text-xs font-extrabold'>لفو شده</p>
        </Link>
        <Link href='/history' className='flex flex-col items-center gap-3'>
          <Image src={isMobile ? Rectangl : RectanglDesktop} alt='incoming' className='md:h-[80px] md:w-[211px]' />
          <p className='text-xs font-extrabold'>مرجوع شده</p>
        </Link>
      </div>
    </div>
  );
}

export default MyOrder;
