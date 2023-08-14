'use client';
import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/Tabs';
import Comments from '@/components/Comments';

function ProductTabs() {

  return (
    <div>
        <Tabs defaultValue='product details' className='mt-4 md:px-10'>
          <TabsList className='flex justify-end gap-2'>
            <TabsTrigger value='compare'>مقایسه</TabsTrigger>
            <hr className='h-6 border-l border-black-items border-opacity-25' />
            <TabsTrigger value='comment'>نظر خریداران</TabsTrigger>
            <hr className='h-6 border-l border-black-items border-opacity-25' />
            <TabsTrigger value='product details'>مشخصات محصول</TabsTrigger>
          </TabsList>
          <TabsContent className='justify-start md:flex md:flex-row md:justify-between' value='product details'>
            <div className='flex items-center justify-between md:flex-col-reverse'>
              <p className='text-xs font-normal text-black-items opacity-60 md:text-sm'>توضیحات</p>
              <p className='text-base md:text-xl'>:عنوان</p>
            </div>
            <hr className='my-2' />
            <div className='flex items-center justify-between md:flex-col-reverse'>
              <p className='text-xs font-normal text-black-items opacity-60 md:text-sm'>توضیحات</p>
              <p className='text-base md:text-xl'>:عنوان</p>
            </div>
            <hr className='my-2' />
            <div className='flex items-center justify-between md:flex-col-reverse'>
              <p className='text-xs font-normal text-black-items opacity-60 md:text-sm'>توضیحات</p>
              <p className='text-base md:text-xl'>:عنوان</p>
            </div>
            <hr className='my-2 md:hidden' />
          </TabsContent>
          <TabsContent value='comment'>
            <Comments />
          </TabsContent>
          <TabsContent value='compare'></TabsContent>
        </Tabs>
      </div>
   
  );
}

export default ProductTabs;
