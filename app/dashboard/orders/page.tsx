'use client';
import SearchBarSvg from '@/assets/svg/SearchBarSvg';
import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/Tabs';
import OrdersCard from '@/components/dashboard/OrdersCard';
import useDebounce from '@/hooks/useDebounce';

function Order() {
  const [keyWord, setKeyWord] = React.useState('');
  const debouncedKeyWord = useDebounce(keyWord, 3000);

  return (
    <div className='mt-4'>
      <div className='flex items-center gap-3'>
        <div className='relative w-full '>
          <input
            type='text'
            id='voice-search'
            className='w-full rounded-[18px] bg-gray-200 py-1.5 pr-10 outline-none'
            placeholder='کد سفارش'
            onChange={(e) => setKeyWord(e.target.value)}
          />
          <div className='pointer-events-none absolute inset-y-0  right-0 flex items-center pr-3'>
            <SearchBarSvg />
          </div>
        </div>
      </div>
      <Tabs defaultValue='sending' className='mt-4'>
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
        </TabsList>

        <TabsContent value='sending'>
          <OrdersCard keyWord={debouncedKeyWord} color='primary' label='در حال ارسال' state='sending' />
          <hr className='my-2 md:hidden' />
        </TabsContent>
        <TabsContent value='Posted'>
          <OrdersCard keyWord={debouncedKeyWord} color='delivered' label='ارسال شده' state='posted' />
          <hr className='my-2 md:hidden' />
        </TabsContent>
        <TabsContent value='delivered'>
          <OrdersCard keyWord={debouncedKeyWord} color='delivered' label='تحویل شده' state='delivered' />
          <hr className='my-2 md:hidden' />
        </TabsContent>
        <TabsContent value='canceled'>
          <OrdersCard keyWord={debouncedKeyWord} color='canceled' label='کنسل شده' state='canceled' />
          <hr className='my-2 md:hidden' />
        </TabsContent>
        <TabsContent value='returned'>
          <OrdersCard keyWord={debouncedKeyWord} color='returned' label='مرجوع شده' state='returned' />
          <hr className='my-2 md:hidden' />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Order;
