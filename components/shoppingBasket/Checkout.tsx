'use client';
import useProductStore from '@/store/zustand';
import React from 'react';

function Checkout() {
  const products = useProductStore((state) => state.products);
  const [totalPrice, setTotalPrice] = React.useState(0);
  React.useEffect(() => {
    setTotalPrice(products.reduce((total: number, item: any) => total + Number(item.totalPrice), 0));
  }, [products]);
  return (
    <div className='h-[412px] md:rounded-3xl md:border md:border-red-500'>
      <p className='mt-12 text-center text-4xl font-semibold'> صورت حساب </p>

      <div className='mt-8 px-5'>
        <hr className=' my-3' />
        <div className='flex items-center justify-between'>
          <p className='text-xs font-semibold text-black-items'>مجموع محصولات:</p>
          <div className='flex items-center'>
            <p className='text-base font-semibold'>{totalPrice}</p>
            <span className='mr-1 text-xs font-normal opacity-60'>تومان</span>
          </div>
        </div>{' '}
        <hr className=' my-3' />
        <div className='flex items-center justify-between'>
          <p className='text-xs font-semibold  text-black-items'>تخفیف:</p>
          <div className='flex items-center'>
            <p className='text-base font-semibold'>۱</p>
            <span className='mr-1 text-xs font-normal opacity-60'>بسته</span>
          </div>
        </div>
        <hr className=' my-3' />
        <div className='flex items-center justify-between'>
          <p className='text-xs font-semibold  text-black-items'>حمل و نقل:</p>
          <div className='flex items-center'>
            <p className='text-base font-semibold'>۱۳۸,۰۰۰</p>
            <span className='mr-1 text-xs font-normal opacity-60'>تومان</span>
          </div>
        </div>
        <hr className=' my-3' />
        <div className='flex items-center justify-between text-[#F6622C]'>
          <p className='text-base font-semibold '> مجموع کل:</p>
          <div className='flex items-center'>
            <p className='text-base font-semibold'>۱۳۶٬۰۰۰</p>
            <span className='mr-1 text-xs font-normal text-black-items opacity-60'>تومان</span>
          </div>
        </div>
      </div>
      <div className='mt-16 flex justify-center px-4 text-white md:justify-end'>
        <button className='btn_primary h-9 w-full text-xs font-extrabold'>پرداخت</button>
      </div>
    </div>
  );
}

export default Checkout;
