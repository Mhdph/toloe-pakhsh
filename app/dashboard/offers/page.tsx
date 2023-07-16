'use client';
import {Button} from '@/components/ui/Button';
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
function Offers() {
  let [date, setDate] = React.useState<any>();

  return (
    <div>
      <div className='flex h-24 items-center justify-between rounded-t-3xl bg-[#253031] px-4 text-white'>
        <p className='text-[32px]'>لیست تخفیف های فعال</p>
        <AddOff />
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
              <Select>
                <SelectTrigger className='h-10 w-[220px] rounded-md'>
                  <SelectValue placeholder='انتخاب دسته بندی' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='apple'>Apple</SelectItem>
                    <SelectItem value='banana'>Banana</SelectItem>
                    <SelectItem value='blueberry'>Blueberry</SelectItem>
                    <SelectItem value='grapes'>Grapes</SelectItem>
                    <SelectItem value='pineapple'>Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='flex flex-col gap-y-2'>
              <Label>تاریخ انقضا</Label>
              <DatePicker
                className='font-Yekan'
                inputClass='bg-background flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                calendar={persian}
                onChange={setDate}
                locale={persian_fa}
              />
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

export default Offers;
