import {ShareIcon} from '@/assets/Icons';
import {Button} from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import {Label} from '@/components/ui/Label';
import MiddleIcon from '@/components/ui/MiddleIcon';
import React from 'react';

function page() {
  return (
    <div>
      <div className='flex h-24 items-center justify-between rounded-t-3xl bg-[#253031] px-4 text-white'>
        <p className='text-[32px]'>لیست تخفیف های فعال</p>
        <Button className='w-40' variant='destructive'>
          <p>افزودن تخفیف </p>
        </Button>
      </div>
      <div className='bg-[#EAEBEB] p-4 text-black-items'>
        <div className='rounded-3xl border border-black-items border-opacity-20 bg-white px-8 py-4'>
          <p className='text-[32px]'>اولین خرید</p>
          <div className='mt-6 flex items-center justify-between'>
            <div className='flex flex-col gap-y-2'>
              <Label>کد تخفیف</Label>
              <Input />
            </div>
            <div className='flex flex-col gap-y-2'>
              <Label>درصد تخفیف</Label>
              <Input />
            </div>
            <div className='flex flex-col gap-y-2'>
              <Label>دسته بندی</Label>
              <Input />
            </div>
            <div className='flex flex-col gap-y-2'>
              <Label>تاریخ انقضا</Label>
              <Input />
            </div>
          </div>
          <div className='mt-6 flex items-center justify-end gap-2'>
            <MiddleIcon>
              <ShareIcon />
            </MiddleIcon>
            <Button className='w-40'>ویرایش</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
