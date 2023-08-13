'use client';
import {persianNumeralToNumber} from '@/helpers/PersianToEnglish';
import useGetCart from '@/service/cart/useGetCart';
import useProductStore from '@/store/zustand';
import Cookies from 'js-cookie';
import React from 'react';

function Checkout() {
  // user login or not
  const user = Cookies.get('token');

  //zustand
  const products = useProductStore((state) => state.products);
  //backend
  const {data} = useGetCart();
  const [totalPrice, setTotalPrice] = React.useState<string | undefined>('');
  const token = Cookies.get('token');

  React.useEffect(() => {
    if (user !== undefined) {
      if (data && data.data.length > 0) {
        const sumRows = data.data[0].cartRows.map((cartItem) => persianNumeralToNumber(cartItem.sumRow));
        const totalSum = sumRows.reduce((total, sumRow) => total + sumRow, 0);
        setTotalPrice(totalSum.toLocaleString('fa-IR'));
      }
    } else {
      const totalPriceFromProducts = products.reduce((total, item) => total + Number(item.totalPrice), 0);
      setTotalPrice(totalPriceFromProducts.toString());
    }
  }, [user, products, data]);

  // data backend

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
        {token === undefined ? (
          <button className='btn_primary h-9 w-full text-xs font-extrabold'>
            <p>رای تکمیل خرید خود لطفا وارد شویب</p>د
          </button>
        ) : (
          <button className='btn_primary h-9 w-full text-xs font-extrabold'>
            <p>پرداخت</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default Checkout;
