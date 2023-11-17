'use client';
import React from 'react';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/Tabs';
import Comments from '@/components/Comments';
import {useParams} from 'next/navigation';
import axios from 'axios';
import {baseUrl} from '@/lib/config';
import {useQuery} from '@tanstack/react-query';
import {Product} from '@/entities/product';
import Cookies from 'js-cookie';
import Loading from '../ui/Loading';

function ProductTabs() {
  const {id} = useParams();
  const user = Cookies.get('token');

  const getProductDetails = async () => {
    const response = await axios.get(`${baseUrl}/product/getbyid/${id}`, {
      headers: {
        authorization: 'Bearer ' + `${user}`,
      },
    });
    return response.data;
  };
  const getProductDetailsWithoutToken = async () => {
    const response = await axios.get(`${baseUrl}/product/getbyid/${id}`);
    return response.data;
  };
  const {data, isLoading: loading} = useQuery({
    queryKey: ['product-single', id],
    queryFn: user === undefined ? getProductDetailsWithoutToken : getProductDetails,
  });
  if (loading) return <Loading />;
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
        <TabsContent className='justify-start md:flex  md:flex-row-reverse md:justify-between' value='product details'>
          {data.properties !== null
            ? data.properties.map((item: any, index: any) => (
                <div key={index} className='flex  items-center justify-between md:flex-col-reverse'>
                  <p className='text-xs font-normal text-black-items opacity-60 md:text-sm'>{item.value}</p>
                  <p className='text-base md:text-xl'>
                    {item.value !== '' ? ':' : null} {item.key}
                  </p>
                </div>
              ))
            : null}
          <hr className='my-2' />
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
