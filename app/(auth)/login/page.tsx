'use client';
import LoginLeftBg from '@/assets/svg/LoginLeftBg';
import LoginRightBg from '@/assets/svg/LoginRightBg';
import ContactUs from '@/components/ContactUs';
import Button from '@/components/ui/Button';
import {persianNumeralToNumber} from '@/helpers/PersianToEnglish';
import {baseUrl} from '@/lib/config';
import {LoginFn} from '@/service/auth';
import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {toast} from 'react-hot-toast';
import {z} from 'zod';
import {digitsFaToEn} from '@persian-tools/persian-tools';
const formSchema = z.object({
  phone: z.string().refine((value) => value.length === 11, {
    message: 'شماره تماس باید ۱۱ رقم باشد',
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    setIsLoading(true);
    const phone = digitsFaToEn(data.phone);
    try {
      axios.post(`${baseUrl}/one-code/add`, {phone});
      Cookies.set('phoneNumber', phone);
      router.push('/confirm-code');
      setIsLoading(false);
    } catch (error) {
      toast.error('مشکلی پیش امده دوباره امتحان کنید');
      setIsLoading(false);
    }
    console.log('0' + persianNumeralToNumber(data.phone));
  };
  return (
    <div>
      <div className='h-[200px] bg-gray-200 md:hidden'></div>
      <div className='mt-14 flex flex-col text-black-items md:flex-row md:items-center md:justify-center '>
        <div className='relative right-80 hidden md:inline'>
          <LoginRightBg />
        </div>
        <div className='z-50 bg-white md:mb-4 md:h-[580px] md:min-w-[412px] md:rounded-3xl md:border md:border-[#F34535]'>
          <div>
            <p className='text-center text-4xl font-semibold md:mt-28 md:text-[32px]'>ورود به حساب</p>
            <p className='mt-4 text-center text-xs md:text-sm'>لطفا شماره موبایل خود را وارد کنید.</p>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-12 flex flex-col px-4'>
              <label className='mb-1 text-xs font-black md:text-sm' htmlFor=''>
                شماره تلفن
              </label>
              <input
                className='w-full rounded border border-gray-300 py-1.5 text-center outline-none'
                type='text'
                placeholder='-- -- --- --۰۹'
                {...register('phone')}
              />
              {errors.phone && <span className='mt-2 block text-red-800'>{errors.phone?.message}</span>}
              <div className='mt-6 flex items-center gap-1'>
                <input type='checkbox' className='rounded-2xl border-black' />
                <p className='text-xs font-normal md:text-sm'>مرا به خاطر بسپار</p>
              </div>
              <div className='hidden  md:flex md:items-end md:justify-between'>
                <div className='hidden md:inline'></div>
                <Button isLoading={isLoading}>ارسال کد تایید</Button>
              </div>
              <Button className='mt-3 md:hidden' isLoading={isLoading}>
                ارسال کد تایید
              </Button>
            </form>
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
