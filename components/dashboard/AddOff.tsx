'use client';
import {Button} from '@/components/ui/Button';
import {Dialog, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/Dialog';
import {Input} from '@/components/ui/Input';
import {Label} from '@/components/ui/Label';
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/Select';
import React from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
export function AddOff() {
  let [date, setDate] = React.useState<any>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive'> افزودن تخفیف</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] '>
        <div className='flex flex-col gap-3 pt-4'>
          <div className='flex flex-col gap-3'>
            <Label htmlFor='name' className='text-right'>
              کد تخفیف
            </Label>
            <Input id='name' placeholder='کد' />
          </div>
          <div className='flex flex-col gap-1'>
            <Label htmlFor='name' className='text-right'>
              درصد تخفیف
            </Label>
            <Input id='name' placeholder='20' />
          </div>
          <div className='flex flex-col gap-1'>
            <Label>دسته بندی</Label>
            <Select>
              <SelectTrigger className='h-10  rounded-md'>
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
          <div className='flex flex-col gap-1'>
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
        <DialogFooter>
          <Button type='submit'>ذخیره تغییرات</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
