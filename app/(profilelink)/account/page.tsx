import {ProfilePicSvg} from '@/assets/svg';
import BackgroundTitle from '@/components/ui/BackgroundTitle';
import ProfileInput from '@/components/ui/ProfileInput';
import React from 'react';

function Account() {
  return (
    <div className='mb-20'>
      <BackgroundTitle name='اطلاعات حساب کاربری' />
      <div className='mt-10 flex items-center justify-center md:hidden'>
        <ProfilePicSvg />
      </div>
      <div className='mt-7 flex flex-col gap-6 px-4'>
        <div className='flex flex-col gap-6 md:flex-row md:gap-12'>
          <ProfileInput label='نام*' placeholder='محمد حسین' />
          <ProfileInput label='نام خانوادگی*' placeholder='بدری' />
          <ProfileInput label='تاریخ تولد*' placeholder='۱۳۷۷/۰۳/۰۹' />
        </div>
        <div className='md:flex md:justify-end'>
          <button className='bg_primary w-full rounded-3xl py-2.5 text-xs font-extrabold text-white md:w-48'>
            ذخیره تغییرات{' '}
          </button>
        </div>
        <hr className='my-6 border opacity-50' />
        <div className='flex flex-col gap-6 md:flex-row md:gap-12'>
          <div className='flex flex-col gap-6 md:flex-row md:gap-12'>
            <div>
              <ProfileInput label=' شماره تلفن' placeholder='۰۹۲۳۲۵۳۲۹۱۳' />
              <p className='mt-1 text-xs'>برای تغییر شماره تلفن ارسال کد اعتبار سنجی الزامی است</p>
            </div>
            <ProfileInput label='کد ملی' placeholder='ـ  ـ  ـ  ـ  ـ  ـ  ـ  ـ  ـ  ـ  ' />
            <ProfileInput label='ایمیل' placeholder='com.----@-----' />
          </div>
        </div>
        <div className='md:flex md:justify-end'>
          <button className='bg_primary w-full rounded-3xl py-2.5 text-xs font-extrabold text-white md:w-48'>
            ذخیره تغییرات{' '}
          </button>
        </div>
        <hr className='my-6 border opacity-50' />
        <p className='text-2xl'>آدرس ۱</p>
        <div className='flex flex-col gap-6 md:flex-row md:gap-12'>
          <ProfileInput label='نام شهر' placeholder='مشهد' />
          <ProfileInput label='  آدرس' placeholder='احمد آباد - پاستور ۱۲ - پلاک ۲۴' />
          <ProfileInput label='نام شهر' placeholder='مشهد' />
        </div>
        <div className='md:flex md:justify-end'>
          <button className='bg_primary w-full rounded-3xl py-2.5 text-xs font-extrabold text-white md:w-48'>
            افزودن آدرس جدید
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
