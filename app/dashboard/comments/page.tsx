import Image from 'next/image';
import React from 'react';
import User from '@/assets/images/User profile.png';
import {Button} from '@/components/ui/Button';
import {StarIcon} from '@/assets/Icons';
import Sohan from '@/assets/tempImages/sohan.png';

function page() {
  return (
    <div className='grid grid-cols-7 rounded-3xl border border-main-red border-opacity-40 text-black-items'>
      <div className='col-span-4 flex flex-col gap-4 bg-[#E9EAEA] p-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image src={User} alt='user profile' className='h-9 w-9 rounded-full' />
            <p className='text-xl font-semibold'>مریم</p>
          </div>
          <StarIcon />
        </div>
        <p className='text-sm font-normal'>
          در کل عالیه و از خریدم راضی هستم باتشکر از طلوع پخش. در کل عالیه و از خریدم راضی هستم باتشکر از طلوع پخشدر کل
          عالیه و از خریدم راضی ...
        </p>
        <div className='flex justify-end'>
          <p>۱۴۰۲ / ۰۱ / ۲۷</p>
        </div>
      </div>
      <div className='col-span-2 flex flex-col items-center justify-center gap-2 border-x border-x-main-red border-opacity-40 text-center'>
        <Image src={Sohan} className='h-full w-20' alt='' />
        <p className='text-sm font-black'>تافی</p>
        <p className='pb-2 text-sm font-normal'>تافی رز پنج ستاره دلبوث 3 کیلویی</p>
      </div>
      <div className='col-span-1 flex flex-col justify-between p-3'>
        <Button className='w-28'>تایید دیدگاه</Button>
        <Button className='w-28' variant='outline'>
          پاسخ
        </Button>
      </div>
    </div>
  );
}

export default page;
