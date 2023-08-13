import SearchBarSvg from '@/assets/svg/SearchBarSvg';
import AddProduct from '@/components/dashboard/AddProduct';
import DashboardProductCard from '@/components/dashboard/DashboardProductCard';
import Button from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import React from 'react';

function page() {
  return (
    <div>
      <div className='flex items-center gap-3'>
        <div className='relative w-full '>
          <Input className='rounded-[18px] bg-gray-200 py-1.5 pr-10' placeholder=' نام یا شماره همراه' />
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 outline-none'>
            <SearchBarSvg />
          </div>
        </div>
        <Button className='w-48'> جست و جو</Button>
      </div>
      <hr className='my-5 border border-main-red opacity-60' />
      <div className='grid grid-cols-4'>
        <div className='col-span-3'>
          <DashboardProductCard />
        </div>
        <div className='col-span-1'>
          <AddProduct />
        </div>
      </div>
    </div>
  );
}

export default page;
