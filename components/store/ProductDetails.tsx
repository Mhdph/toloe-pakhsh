/* eslint-disable @next/next/no-img-element */
'use client';
import StarSvg from '@/assets/Icons/StarIcon';
import React, {useState} from 'react';
import MiddleIcon from '@/components/ui/MiddleIcon';
import {FavouriteIcon, MiniBucketIcon, MinusIcon, PlusIcon, ShareIcon} from '@/assets/Icons';
import {useParams} from 'next/navigation';
import {baseUrl} from '@/lib/config';
import useAddCart from '@/service/cart/useAddCart';
import useProductStore from '@/store/zustand';
import useAddFavouriteProduct from '@/service/product/useAddFavouriteProduct';
import Cookies from 'js-cookie';
import Loading from '../ui/Loading';

import ReactStars from 'react-stars';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {addCommas, digitsEnToFa} from '@persian-tools/persian-tools';
import {toast} from 'react-hot-toast';
import Button from '../ui/Button';
import Head from 'next/head';

function ProductDetails() {
  const [count, setCount] = useState(1);
  const user = Cookies.get('token');
  const {id} = useParams();

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

  const addProduct = useProductStore((state) => state.addProduct);
  const {mutate: addtoFavourite} = useAddFavouriteProduct();
  const {mutate, isLoading} = useAddCart();
  const handleAddToCart = () => {
    const product = {
      name: data?.name ?? 'Default Name',
      id: data?.id ?? 0,
      quantity: count,
      unit: data?.unit ?? 'Default Unit',
      unitCount: data?.unitCount ?? '0',
      brand: data?.brand ?? 'Default Brand',
      price: data?.price ?? 0,
      off: data?.off ?? 0,
      picture: data?.picture ?? 'default-picture.jpg',
    };
    addProduct(product);
    toast.success('محصول با موفقیت به سبد اضافه شد');
  };
  const addCardRow = () => {
    mutate({
      price: data?.price ?? 0,
      productId: +id,
      count,
    });
  };
  const addFavourite = () => {
    addtoFavourite({
      favorite: [+id],
    });
  };

  const increaseCount = () => {
    setCount((count) => count + 1);
  };
  const decreaseCount = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };
  if (loading) return <Loading />;
  return (
    <div>
      <Head>
        <meta name='product_id' content={id} />
        <meta name='product_name' content={data.name} />
        <meta property='og:image' content={baseUrl + data.picture} />
        <meta name='product_price' content={data.FaPrice} />
        <meta name='availability' content={data.off ? 'instock' : 'outofstock'} />
      </Head>
      <div className='md:mt-7 md:grid md:grid-cols-3 md:px-10'>
        <div className='flex items-center justify-center md:col-span-1'>
          <div className='relative'>
            {data.off !== 0 ? (
              <div className='absolute right-24 top-20 flex h-9 w-9 items-center justify-center rounded-full bg-red-500 p-2 text-sm font-extrabold text-white md:left-2  md:top-1'>
                {digitsEnToFa(data.off)}%
              </div>
            ) : null}
            <img
              src={baseUrl + data.picture}
              alt={data.name}
              className='h-[300px] w-[250px] pt-20 md:h-[300px] md:w-[300px] md:pt-0'
            />
          </div>
        </div>
        <div className='flex flex-col px-4 font-semibold md:col-span-2 md:rounded-3xl md:bg-white md:p-4 md:shadow-2xl'>
          <div className='flex items-center justify-between'>
            <p className=' text-3xl md:text-5xl '>{data.name}</p>
            <ReactStars value={data.star} size={20} color2={'#F34834'} />
          </div>
          <p className='mt-3 text-base md:text-xl'>{data.description}</p>
          <hr className='my-2' />
          <div className='flex items-center justify-between'>
            <p className='text-base'>برند:</p>
            <p className='text-xs font-normal text-black-items'>{data.brand}</p>
          </div>
          <hr className='my-2' />
          <div className='flex items-center justify-between'>
            <p className='text-base md:text-xl'>قیمت:</p>
            <div className='flex items-center'>
              <p className='text-xs font-black md:text-ca'>{digitsEnToFa(addCommas(data.FaPrice))}</p>
              <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>تومان</span>
            </div>
          </div>
          <hr className='my-2' />
          <div className='flex items-center justify-between'>
            <p className='text-base md:text-xl'>تعداد:</p>
            <div className='flex items-center gap-2'>
              <div onClick={() => decreaseCount()}>
                <MiddleIcon>
                  <MinusIcon />
                </MiddleIcon>
              </div>
              <div className='numberItemBg flex h-9 w-[74px] items-center justify-center '>{digitsEnToFa(count)}</div>
              <div onClick={() => increaseCount()}>
                <MiddleIcon>
                  <PlusIcon />
                </MiddleIcon>
              </div>
            </div>
          </div>
          <hr className='my-2' />
          <div className='flex items-center justify-center gap-2 md:justify-start'>
            <MiddleIcon>
              <ShareIcon />
            </MiddleIcon>
            <MiddleIcon>
              <div onClick={addFavourite}>
                <FavouriteIcon />
              </div>
            </MiddleIcon>
            <Button onClick={user === undefined ? handleAddToCart : addCardRow} className='flex items-center gap-2'>
              افزودن به سبد خرید <MiniBucketIcon />
            </Button>
          </div>
        </div>
        H
      </div>
    </div>
  );
}

export default ProductDetails;
