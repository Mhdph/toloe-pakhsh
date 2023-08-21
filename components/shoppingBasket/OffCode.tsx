'use client';
import useUserDiscount from '@/service/discount/useUserDiscount';
import React from 'react';
import Button from '../ui/Button';

function OffCode() {
  const [code, setCode] = React.useState('');

  const {mutate, isLoading} = useUserDiscount();

  const addDiscount = () => {
    mutate({
      code,
    });
  };

  return (
    <div className='serach_bar mt-6 flex h-[184px]  flex-col text-white md:rounded-3xl'>
      <div className='mt-6 flex flex-col items-center justify-center gap-4 px-4'>
        <p className='text-2xl font-normal'>کد تخفیف خود را وارد کنید</p>
        <input
          onChange={(e) => setCode(e.target.value)}
          type='text'
          className='h-10 w-full rounded border border-solid border-gray-300 outline-none'
        />
        <Button
          variant='secondary'
          isLoading={isLoading}
          onClick={addDiscount}
          className='w-full rounded-3xl bg-white py-1.5 text-[#F6622C]'
        >
          اعمال کد
        </Button>
      </div>
    </div>
  );
}

export default OffCode;
