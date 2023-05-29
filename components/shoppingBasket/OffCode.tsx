import React from 'react';

function OffCode() {
  return (
    <div className='serach_bar mt-6 flex h-[184px]  flex-col text-white md:rounded-3xl'>
      <div className='mt-6 flex flex-col items-center justify-center gap-4 px-4'>
        <p className='text-2xl font-normal'>کد تخفیف خود را وارد کنید</p>
        <input type='text' className='h-10 w-full rounded border border-solid border-gray-300 outline-none' />
        <button className='w-full rounded-3xl bg-white py-1.5 text-[#F6622C]'>اعمال کد</button>
      </div>
    </div>
  );
}

export default OffCode;
