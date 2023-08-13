'use client';
import LoginLeftBg from '@/assets/svg/LoginLeftBg';
import LoginRightBg from '@/assets/svg/LoginRightBg';
import ContactUs from '@/components/ContactUs';
import {LoginFn} from '@/service/auth';
import {useMutation} from '@tanstack/react-query';
import Link from 'next/link';
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import Cookies from 'js-cookie';
import Button from '@/components/ui/Button';

function Login() {
  const [phone, setPhone] = useState('');
  const router = useRouter();
  const {mutate, isLoading} = useMutation(() => LoginFn({phone}), {
    onSuccess: () => {
      Cookies.set('phoneNumber', phone);
      router.push('/confirm-code');
    },
  });
  const loginForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div>
      <div className='h-[200px] bg-gray-200 md:hidden'></div>
      <div className='mt-14 flex flex-col text-black-items md:flex-row md:items-center md:justify-center '>
        <div className='relative right-80 hidden md:inline'>
          <LoginRightBg />
        </div>
        <div className='z-50 bg-white md:mb-4 md:h-[600px] md:min-w-[412px] md:rounded-3xl md:border md:border-[#F34535]'>
          <div>
            <p className='text-center text-4xl font-semibold md:mt-28 md:text-[32px]'>ورود به حساب</p>
            <p className='mt-4 text-center text-xs md:text-sm'>لطفا شماره موبایل خود را وارد کنید.</p>
            <div className='mt-12 flex flex-col px-4'>
              <label className='mb-1 text-xs font-black md:text-sm' htmlFor=''>
                شماره تلفن
              </label>
              <input
                className='w-full rounded border border-gray-300 py-1.5 text-center outline-none'
                type='text'
                placeholder='-- -- --- --۰۹'
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className='mt-6 flex items-center gap-1'>
                <input type='checkbox' className='rounded-2xl border-black' />
                <p className='text-xs font-normal md:text-sm'>مرا به خاطر بسپار</p>
              </div>
              <div className='md:flex md:items-end md:justify-between'>
                <div className='hidden md:inline'></div>
                <Button onClick={loginForm} isLoading={isLoading}>
                  ارسال کد تایید
                </Button>
              </div>
            </div>
            <hr className='mb-6 mt-14 border-[0.5px] border-solid md:hidden' />
            <div className='login_bg flex flex-col items-center gap-4 bg-gradient-to-r md:mt-20 md:rounded-b-3xl md:py-6'>
              <p className='text-center text-base font-semibold md:text-white'>آیا حساب کاربری ندارید؟</p>
              <Link href='/register' className='w-full px-4 md:w-40'>
                <button className='h-9 w-full rounded-3xl border-2 border-[#F6622C] border-opacity-70  text-xs font-extrabold text-[#F02D3C] md:w-40 md:bg-white '>
                  ثبت نام
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='relative left-80 hidden md:inline'>
          <LoginLeftBg />
        </div>
      </div>
      <div className='hidden md:inline'>
        <ContactUs />
      </div>
    </div>
  );
}

export default Login;
