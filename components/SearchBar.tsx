import {CloseWhiteIcon, FilterIcon, UpDownIcon} from '@/assets/Icons';
import SearchBarSvg from '@/assets/svg/SearchBarSvg';
import React from 'react';
import SearchPopOver from './search/SearchPopOver';

interface SearchBarProps {
  count: number | undefined;
}

function SearchBar({count}: SearchBarProps) {
  return (
    <div className='pt-16 md:hidden'>
      <div className='serach_bar h-[142px] w-full rounded-b-3xl px-4'>
        <div className='relative w-full pt-4'>
          <input type='text' id='voice-search' className='bg-whit w-full rounded-[18px] py-1.5 pr-10 outline-none' />
          <div className='pointer-events-none absolute inset-y-0 right-3 mt-3 flex items-center pr-4'>
            <SearchBarSvg />
          </div>
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <SearchPopOver />
          {/* <p className='text-xs font-normal tracking-widest text-white'>نمایش ۱ - ۱۶ از {count} نتیجه</p> */}
          <div className='flex items-center gap-2 rounded-[14px] bg-white px-3 py-1.5'>
            <UpDownIcon />
          </div>
        </div>
        {/* <hr className='mb-2 mt-3   opacity-25' />
        <div className='filter_background flex w-[90px] items-center gap-2  rounded-xl px-2 py-1'>
          <p className='text-[10px]  font-normal text-white'>موجود در انبار</p>
          <CloseWhiteIcon />
        </div> */}
      </div>
    </div>
  );
}

export default SearchBar;
