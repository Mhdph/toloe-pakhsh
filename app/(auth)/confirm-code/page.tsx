'use client';
import LoginLeftBg from '@/assets/svg/LoginLeftBg';
import LoginRightBg from '@/assets/svg/LoginRightBg';
import ContactUs from '@/components/ContactUs';
import Button from '@/components/ui/Button';
import {ConfirmCodeFn, LoginFn} from '@/service/auth';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {useRouter} from 'next/navigation';
import {toast} from 'react-hot-toast';
import {useProductStore} from '@/store/zustand';
import useAddCartList from '@/service/cart/useAddCartList';
import axios from 'axios';
import {baseUrl} from '@/lib/config';
import {digitsFaToEn} from '@persian-tools/persian-tools';

interface token {
  userId: string;
  role: string;
}

function ConfirmCode() {
  const [isEmailSent, setIsEmailSent] = React.useState(true);
  const [resendCountdown, setResendCountdown] = React.useState(120);
  const [code, setCode] = React.useState('');
  const phone = Cookies.get('phoneNumber')!;
  const router = useRouter();
  const products = useProductStore((state) => state.products);
  const {mutate: addList} = useAddCartList();
  const nextYear = Date.now() + 360 * 24 * 60 * 60 * 1000;
  const expireTime = new Date(nextYear);
  const cartDataToSend = products.map((item) => ({
    productId: item.id,
    count: item.quantity,
  }));
  const {mutate, isLoading, error} = useMutation(() => ConfirmCodeFn({code: digitsFaToEn(code), phone}), {
    onSuccess: (data) => {
      Cookies.set('token', data.token, {expires: expireTime});
      const decoded: token = jwt_decode(data.token);
      Cookies.set('userId', decoded.userId, {expires: expireTime});
      Cookies.set('role', decoded.role, {expires: expireTime});
      if (products.length > 0) {
        try {
          axios.post(`${baseUrl}/cart-row/addList/`, cartDataToSend, {
            headers: {
              authorization: 'Bearer ' + `${data.token}`,
            },
          });
          window.location.href = '/profile';
        } catch (error) {
          console.log(error);
        }
      } else {
        window.location.href = '/full-details';
      }
    },
  });

  const {mutate: loginMutate, isLoading: Loginloading} = useMutation(() => LoginFn({phone}), {
    onSuccess: () => {
      toast.success('کد با موفقیت ارسال شد');
      // Set the email sent state to true
      setIsEmailSent(true);
      // Reset the resend countdown to 60 seconds
      setResendCountdown(120);
    },
  });
  const handleResendCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    loginMutate();
  };
  const sendCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutate();
  };

  React.useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isEmailSent) {
      timer = setTimeout(() => {
        setIsEmailSent(false);
      }, resendCountdown * 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isEmailSent, resendCountdown]);

  React.useEffect(() => {
    let countdownInterval: NodeJS.Timeout | null = null;

    if (isEmailSent) {
      countdownInterval = setInterval(() => {
        setResendCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    };
  }, [isEmailSent]);

  return (
    <div>
      <div className='h-[200px] bg-gray-200 md:hidden'></div>
      <div className='mt-14 flex flex-col text-black-items md:flex-row md:items-center md:justify-center '>
        <div className='relative right-80 hidden md:inline'>
          <LoginRightBg />
        </div>
        <div className='z-50 bg-white md:mb-4 md:h-[500px] md:min-w-[412px] md:rounded-3xl md:border md:border-[#F34535]'>
          <div>
            <p className='text-center text-4xl font-semibold  md:mt-28 md:text-[32px]'>کد تایید را وارد کنید</p>
            <p className='mt-4 text-center text-xs md:text-sm'>کد ۶ رقمی برای شما ارسال گردید</p>
            <div className='mt-12 flex flex-col px-4'>
              <label className='mb-1 text-xs font-black md:text-sm' htmlFor=''>
                کد تایید
              </label>
              <input
                className='w-full rounded border border-gray-300 py-1.5 text-center outline-none'
                type='text'
                placeholder='-----'
                onChange={(e) => setCode(e.target.value)}
              />
              <div className='mt-6 flex items-center gap-1'>
                <input type='checkbox' className='rounded-2xl border-black' />
                <p className='text-xs font-normal'>مرا به خاطر بسپار</p>
              </div>

              <div className='hidden  md:flex md:items-end md:justify-between'>
                <div className='hidden md:inline'></div>
                <Button onClick={sendCode} isLoading={isLoading}>
                  ادامه{' '}
                </Button>
              </div>
              <Button className='my-3 md:hidden' onClick={sendCode} isLoading={isLoading}>
                ادامه{' '}
              </Button>
              <p className='text-center text-base font-semibold text-red-500'>
                {error && error instanceof Error && axios.isAxiosError(error) ? error.response?.data.message : null}
              </p>
            </div>

            {isEmailSent ? (
              <p className='my-6 text-center text-xs font-normal'>{resendCountdown} ثانیه تا دریافت مجدد کد</p>
            ) : (
              <div className='flex justify-center'>
                <Button variant='outline' isLoading={Loginloading} onClick={handleResendCode}>
                  ارسال مجدد
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className='relative left-80 hidden md:inline'>
          <LoginLeftBg />
        </div>
      </div>
      <div className='mt-10 hidden md:inline'>
        <ContactUs />
      </div>
    </div>
  );
}

export default ConfirmCode;
