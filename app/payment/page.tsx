'use client';
import {baseUrl} from '@/lib/config';
import axios from 'axios';
import React from 'react';
import {useSearchParams} from 'next/navigation';

function Payment() {
  const [data, setData] = React.useState<any>('');
  const searchParams = useSearchParams();
  const authority = searchParams.get('Authority');
  const check = () => {
    axios
      .get(`${baseUrl}/pay/check?authority=${authority}`)
      .then((response) => {
        const responseData = response.data;
        setData(responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  React.useEffect(() => {
    check();
  }, []);
  return (
    <div className='flex  items-center justify-center pt-28 md:pt-0'>
      {data.status ? (
        <div className='flex h-20 w-60 items-center items-center justify-center rounded-md bg-green-400 text-white md:mt-3'>
          <p className='px-2'>پرداخت شما با موفقیت انجام شد</p>
        </div>
      ) : (
        <div className='flex h-20 w-60 items-center justify-center rounded-md bg-red-400 text-center text-white md:mt-3'>
          <p className='px-2'>عملیات پرداخت شما انجام نشد لطفا در صورت کسر مبلغ از حساب شما با پیشتیانی تماس بگیرید</p>
        </div>
      )}
    </div>
  );
}

export default Payment;
