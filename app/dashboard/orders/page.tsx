import SearchBarSvg from '@/assets/svg/SearchBarSvg';
import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/Tabs';
import OrdersCard from '@/components/dashboard/OrdersCard';

function page() {
  return (
    <div className='mt-4'>
      <div className='flex items-center gap-3'>
        <div className='relative w-full '>
          <input
            type='text'
            id='voice-search'
            className='w-full rounded-[18px] bg-gray-200 py-1.5 pr-10 outline-none'
            placeholder='کد سفارش'
          />
          <div className='pointer-events-none absolute inset-y-0  right-0 flex items-center pr-3'>
            <SearchBarSvg />
          </div>
        </div>
        <button className='bg_primary w-40 rounded-3xl py-2.5 text-xs font-extrabold text-white md:w-48'>
          جست و جو
        </button>
      </div>
      <Tabs defaultValue='all' className='mt-4'>
        <TabsList className=' flex justify-between gap-2 border-t border-main-red border-opacity-70'>
          <TabsTrigger value='returned'> مرجوع شده</TabsTrigger>
          <hr className='h-6 border-l border-main-red border-opacity-40' />
          <TabsTrigger value='canceled'> لغو شده</TabsTrigger>
          <hr className='h-6 border-l border-main-red border-opacity-40' />
          <TabsTrigger value='delivered'> تحویل شده</TabsTrigger>

          <hr className='h-6 border-l border-main-red border-opacity-40' />
          <TabsTrigger value='Posted'> ارسال شده</TabsTrigger>

          <hr className='h-6 border-l border-main-red border-opacity-40' />
          <TabsTrigger value='sending'>در حال ارسال</TabsTrigger>

          <hr className='h-6 border-l border-main-red border-opacity-40' />
          <TabsTrigger value='all'>تمام سفارشات</TabsTrigger>
        </TabsList>
        <TabsContent value='all'>
          <OrdersCard color='primary' state='' label='تمام سفارشات' />
          <hr className='my-2 md:hidden' />
        </TabsContent>
        <TabsContent value='delivered'>
          <OrdersCard color='delivered' label='تحویل شده' state='delivered' />
          <hr className='my-2 md:hidden' />
        </TabsContent>
        <TabsContent value='Posted'>
          <OrdersCard color='delivered' label='در حال ارسال' state='SENDING' />
          <hr className='my-2 md:hidden' />
        </TabsContent>
        <TabsContent value='canceled'>
          <OrdersCard color='canceled' label='کنسل شده' state='REJECT' />
          <hr className='my-2 md:hidden' />
        </TabsContent>
        <TabsContent value='returned'>
          <OrdersCard color='returned' label='مرجوع شده' state='DECLINE' />
          <hr className='my-2 md:hidden' />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default page;
