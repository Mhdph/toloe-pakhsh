import React from 'react';

function ConfirmCode() {
  return (
    <div>
      <div className='h-[200px] bg-gray-200'></div>
      <div className='mt-14 flex flex-col text-black-items '>
        <p className='text-center text-4xl font-semibold'>کد تایید را وارد کنید</p>
        <p className='mt-4 text-center text-xs'>کد ۶ رقمی برای شما ارسال گردید</p>
        <div className='mt-12 flex flex-col px-4'>
          <label className='mb-1 text-xs font-black' htmlFor=''>
            کد تایید
          </label>
          <input
            className='w-full rounded border border-gray-300 py-1.5 text-center outline-none'
            type='text'
            placeholder='-----'
          />
          <div className='mt-6 flex items-center gap-1'>
            <input type='checkbox' className='rounded-2xl border-black' />
            <p className='text-xs font-normal'>مرا به خاطر بسپار</p>
          </div>
          <p className='my-4 text-xs font-normal'>۵۵ : ۰۲مانده تا دریافت مجدد کد</p>
          <button className='btn_primary mt-8 text-xs font-extrabold text-white'>ادامه</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCode;
