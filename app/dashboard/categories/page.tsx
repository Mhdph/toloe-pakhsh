import React from 'react';

function page() {
  return (
    <div>
      <div className='flex h-24 items-center justify-between rounded-t-3xl bg-[#253031] px-4 text-white'>
        <p>لیست دسته بندی ها</p>
        <p>افزودن دسته بندی</p>
      </div>
      <div className='bg-[#EAEBEB] text-black-items'>
        <div className='grid grid-cols-3 rounded-3xl border border-black-items border-opacity-20  bg-white'>
          <div className='col-span-1'></div>{' '}
          <div className='col-span-2 flex flex-col px-4'>
            <p className='text-3xl'>سوهان</p>
            <hr className='my-4 border-b border-b-black-items border-opacity-10' />
            <p className='text-xl'>سوهان</p>
            <div className='flex items-center'>
              <div className='w-1/2 text-sm'>برچسب</div>
              <div className='w-1/2 text-sm'>برچسب</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
