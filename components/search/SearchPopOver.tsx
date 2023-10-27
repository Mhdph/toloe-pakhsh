'use client';
import React, {useState} from 'react';
import Button from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import {Label} from '@/components/ui/Label';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/PopOver';
import {FilterIcon} from '@/assets/Icons';
import SearchAccordion from './SearchAccordion';
import SearchBrand from './SearchBrand';
import {Switch} from '../ui/Switch';
import useProductQueryStore from '@/store/search';
function SearchPopOver() {
  const {setEndPrice, setOff, setExist, setStartPrice, setSortName} = useProductQueryStore();

  const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartPrice(event.target.value);
  };
  const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndPrice(event.target.value);
  };
  const handleOnSaleChange = (checked: boolean) => {
    setOff(checked);
  };
  const handleOnExistChange = (checked: boolean) => {
    setExist(checked);
  };

  return (
    <Popover>
      <PopoverTrigger className='p-0' asChild>
        <Button variant='ghost'>
          <div className='flex items-center gap-2 rounded-[14px] bg-white px-3 py-1.5'>
            <FilterIcon />
            <p className='text-xs font-extrabold '>فیلترها</p>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='flex w-full items-center justify-center'>
        <div className='grid gap-4'>
          <div className='space-y-2'>
            <h4 className='font-medium leading-none'> فیلتر ها</h4>
          </div>
          <div className='grid gap-2'>
            <SearchAccordion />
            <div className='flex items-center justify-between'>
              <p className='text-sm font-black text-[#F13739]'>محدوده قیمت</p>
            </div>
            <div className='flex items-center gap-1'>
              <p className='text-base font-bold text-[#ACACAC]'>از</p>
              <input
                className='w-full rounded border border-[#ACACAC] py-1.5 text-right outline-none  placeholder:pr-1'
                type='text'
                onChange={handleStartChange}
              />
              <p className='text-base font-bold text-[#ACACAC]'>تومان</p>
            </div>
            <div className='flex items-center gap-1'>
              <p className='text-base font-bold text-[#ACACAC]'>تا</p>
              <input
                className='w-full rounded border border-[#ACACAC] py-1.5 text-right outline-none  placeholder:pr-1'
                type='text'
                onChange={handleEndChange}
              />
              <p className='text-base font-bold text-[#ACACAC]'>تومان</p>
            </div>
            <SearchBrand />
            <div className='flex items-center justify-between'>
              <p className='text-sm font-black text-[#F13739]'> موجود در انبار</p>
              <Switch onCheckedChange={handleOnExistChange} />
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-sm font-black text-[#F13739]'> دارای تخفیف</p>
              <Switch onCheckedChange={handleOnSaleChange} />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default SearchPopOver;
