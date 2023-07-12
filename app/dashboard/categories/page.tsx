import React from 'react';
import sohanOrder from '@/assets/tempImages/sohanOrder.png';
import Image from 'next/image';

function page() {
  return (
    <div>
      <div className='flex h-24 items-center justify-between rounded-t-3xl bg-[#253031] px-4 text-white'>
        <p>لیست دسته بندی ها</p>
        <p>افزودن دسته بندی</p>
      </div>
      <div className='bg-[#EAEBEB] p-4 text-black-items'>
        <div className='grid grid-cols-3 rounded-3xl border border-black-items border-opacity-20 bg-white'>
          <div className='col-span-1 flex flex-col items-center justify-center py-3'>
            <Image src={sohanOrder} alt='category photo' height={300} width={300} />
            <button className='mt-4 w-60 rounded-3xl border border-main-red py-2.5 text-xs font-extrabold text-main-red md:w-48'>
              بارگذاری تصویر
            </button>
          </div>
          <div className='col-span-2 flex flex-col px-4 py-4'>
            <p className='mt-2 text-3xl'>سوهان</p>
            <hr className='my-4 border-b border-b-black-items border-opacity-10' />
            <p className='mb-4 text-xl font-semibold'>زیر مجموعه ها</p>
            <div className='flex flex-wrap items-center gap-x-2 gap-y-6 text-sm font-extrabold'>
              <div className='w-2/5 rounded-lg border-b'>برچسب</div>
              <div className='w-2/5 rounded-lg border-b'>برچسب</div>
              <div className='w-2/5 rounded-lg border-b'>برچسب</div>
              <div className='w-2/5 rounded-lg border-b'>برچسب</div>
              <div className='w-2/5 rounded-lg border-b'>برچسب</div>
              <div className='w-2/5 rounded-lg border-b'>برچسب</div>
            </div>
            <div className='mt-6 flex justify-end'>
              <button className='bg_primary w-40 rounded-3xl py-2.5 text-xs font-extrabold text-white md:w-48'>
                ویرایش
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
