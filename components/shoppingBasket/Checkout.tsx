'use client';
import {persianNumeralToNumber} from '@/helpers/PersianToEnglish';
import useGetCart from '@/service/cart/useGetCart';
import usePayment from '@/service/payment/usePayment';
import useDelivery from '@/service/settings/useDelivery';
import useProductStore from '@/store/zustand';
import Cookies from 'js-cookie';
import {useRouter} from 'next/navigation';
import React from 'react';

function Checkout() {
  const router = useRouter();
  // user login or not
  const user = Cookies.get('token');

  //zustand
  const products = useProductStore((state) => state.products);
  //backend
  const {data} = useGetCart();
  const [totalPrice, setTotalPrice] = React.useState<string>('');
  const [off, setOff] = React.useState<string>('۰');

  const token = Cookies.get('token');

  React.useEffect(() => {
    if (user !== undefined) {
      if (data && data.data.length > 0) {
        const sumRows = data.data[0].sumPrice;
        setTotalPrice(sumRows);
        const off = data && data.data[0].sumOff;
        setOff(off);
      }
    } else {
      const totalPriceFromProducts = products.reduce((total, item) => total + Number(item.totalPrice), 0);
      setTotalPrice(totalPriceFromProducts.toString());
      if (data && data.data.length > 0) {
        const off = data && data.data[0].sumOff;

        setOff(off);
      }
    }
  }, [user, products, data]);

  // data backend
  const cartId = data && data.data[0].id;
  const {mutate} = usePayment();

  const payment = () => {
    mutate({
      cartId,
    });
  };

  const totalPriceNum = persianNumeralToNumber(totalPrice);
  const offNum = persianNumeralToNumber(off);
  const {data: deliveryFee} = useDelivery();
  console.log(deliveryFee?.data[0].cost);
  //login
  const pushLogin = () => {
    router.push('/login');
  };

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
            <p className='text-base font-semibold'>{off}</p>
            <span className='mr-1 text-xs font-normal opacity-60'>تومان</span>
          </div>
        </div>
        <hr className=' my-3' />
        <div className='flex items-center justify-between'>
          <p className='text-xs font-semibold  text-black-items'>حمل و نقل:</p>
          <div className='flex items-center'>
            <p className='text-base font-semibold'>{deliveryFee?.data[0].cost}</p>
            <span className='mr-1 text-xs font-normal opacity-60'>تومان</span>
          </div>
        </div>
        <hr className=' my-3' />
        <div className='flex items-center justify-between text-[#F6622C]'>
          <p className='text-base font-semibold '> مجموع کل:</p>
          <div className='flex items-center'>
            <p className='text-base font-semibold'>{(totalPriceNum - offNum + 40000).toLocaleString('fa-ir')}</p>
            <span className='mr-1 text-xs font-normal text-black-items opacity-60'>تومان</span>
          </div>
        </div>
      </div>
      <div className='mt-16 flex justify-center px-4 text-white md:justify-end'>
        {token === undefined ? (
          <button onClick={pushLogin} className='btn_primary h-9 w-full text-xs font-extrabold'>
            <p>وارد شدن</p>
          </button>
        ) : (
          <button onClick={payment} className='btn_primary h-9 w-full text-xs font-extrabold'>
            <p>پرداخت</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default Checkout;
