'use client';
import React from 'react';
import returned from '@/assets/images/returned.webp';
import sending from '@/assets/images/sending.webp';
import caceled from '@/assets/images/caceled.webp';
import delivered from '@/assets/images/delivered.webp';

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
        <Link href='/history' className='flex cursor-pointer flex-col items-center gap-3'>
          <Image src={sending} alt='incoming' className='md:h-[80px] md:w-[211px]' />
          <p className='text-xs font-extrabold'>جاری</p>
        </Link>
        <Link href='/history' className='flex cursor-pointer  flex-col items-center gap-3'>
          <Image src={delivered} alt='incoming' className='md:h-[80px] md:w-[211px]' />
          <p className='text-xs font-extrabold'>تحویل شده</p>
        </Link>
        <Link href='/history' className='flex cursor-pointer  flex-col items-center gap-3'>
          <Image src={caceled} alt='incoming' className='md:h-[80px] md:w-[211px]' />
          <p className='text-xs font-extrabold'>لفو شده</p>
        </Link>
        <Link href='/history' className='flex cursor-pointer  flex-col items-center gap-3'>
          <Image src={returned} alt='incoming' className='md:h-[80px] md:w-[211px]' />
          <p className='text-xs font-extrabold'>مرجوع شده</p>
        </Link>
      </div>
    </div>
  );
}

export default MyOrder;
