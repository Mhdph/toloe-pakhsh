'use client';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/Tabs';
import BackgroundTitle from '@/components/ui/BackgroundTitle';
import React from 'react';
import HistoryCard from '@/components/ui/HistoryCard';

function History() {
  return (
    <div>
      <BackgroundTitle name='تاریخچه سفارشات' />
      <Tabs defaultValue='sending' className='mt-4'>
        <TabsList className=' flex justify-between gap-2 border-b-2 border-black-items border-opacity-50'>
          <TabsTrigger value='returned'> مرجوع شده</TabsTrigger>
          <TabsTrigger value='canceled'> لغو شده</TabsTrigger>
          <TabsTrigger value='delivered'> تحویل شده</TabsTrigger>
          <TabsTrigger value='sending'>در حال ارسال</TabsTrigger>
        </TabsList>
        <TabsContent value='sending'>
          <HistoryCard color='primary' state='SENDING' label='در حال ارسال' />
        </TabsContent>
        <TabsContent value='delivered'>
          <HistoryCard color='delivered' state='CLOSE' label='تحویل شده' />
        </TabsContent>
        <TabsContent value='canceled'>
          <HistoryCard color='canceled' state='DECLINE' label='لغو شده' />
        </TabsContent>
        <TabsContent value='returned'>
          <HistoryCard color='returned' state='REJECT' label='مرجوع شده' />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default History;
