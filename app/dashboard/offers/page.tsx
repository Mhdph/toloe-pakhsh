'use client';
import Button from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import {Label} from '@/components/ui/Label';
import MiddleIcon from '@/components/ui/MiddleIcon';
import React from 'react';
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/Select';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import {ShareIcon} from '@/assets/Icons';
import {AddOff} from '@/components/dashboard/AddOff';
import useDiscount from '@/service/discount/useDiscount';
import useDeleteDiscount from '@/service/discount/useDeleteDiscount';
import DeleteModal from '@/components/dashboard/DeleteModal';
function Offers() {
  const {mutate} = useDeleteDiscount();

  const deleteDiscount = (id: string | number) => {
    mutate(id);
  };

  const {data} = useDiscount();
  console.log(data);
  return (
    <div>
      <div className='flex h-24 items-center justify-between rounded-t-3xl bg-[#253031] px-4 text-white'>
        <p className='text-[32px]'>لیست تخفیف های فعال</p>
        <AddOff />
      </div>
      {data?.data.map((item) => (
        <div key={item.id} className='bg-[#EAEBEB] p-4 text-black-items'>
          <div className='rounded-3xl border border-black-items border-opacity-20 bg-white px-8 py-4'>
            <p className='text-[32px]'>{item.name}</p>
            <div className='mt-6 flex items-center justify-between gap-1'>
              <div className='flex flex-col gap-y-2'>
                <Label>کد تخفیف</Label>
                <div className='flex h-10 w-48 items-center justify-center rounded-md border border-input'>
                  {item.code}
                </div>
              </div>
              <div className='flex flex-col gap-y-2'>
                <Label>درصد تخفیف</Label>
                <div className='flex h-10 w-48 items-center justify-center rounded-md border border-input'>
                  {item.percentage}
                </div>
              </div>
              <div className='flex flex-col gap-y-2'>
                <Label>دسته بندی</Label>
                <div className='flex h-10 w-48 items-center justify-center rounded-md border border-input'>
                  {item.categoryId}
                </div>
              </div>
              <div className='flex flex-col gap-y-2'>
                <Label>تاریخ انقضا</Label>
                <div className='flex h-10 w-48 items-center justify-center rounded-md border border-input'>
                  {item.expireTime.substring(0, 10)}
                </div>
              </div>
            </div>
            <div className='mt-6 flex items-center justify-end gap-2'>
              <MiddleIcon>
                <ShareIcon />
              </MiddleIcon>
              <DeleteModal deleteFn={() => deleteDiscount(item.id)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offers;
