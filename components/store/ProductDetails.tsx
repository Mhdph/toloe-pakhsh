/* eslint-disable @next/next/no-img-element */
'use client';
import StarSvg from '@/assets/Icons/StarIcon';
import React, {useState} from 'react';
import MiddleIcon from '@/components/ui/MiddleIcon';
import {FavouriteIcon, MiniBucketIcon, MinusIcon, PlusIcon, ShareIcon} from '@/assets/Icons';
import useProduct from '@/service/product/useProduct';
import {useParams} from 'next/navigation';
import {baseUrl} from '@/lib/config';
import useAddCart from '@/service/cart/useAddCart';
import useProductStore from '@/store/zustand';
import useAddFavouriteProduct from '@/service/product/useAddFavouriteProduct';
import Cookies from 'js-cookie';
import Loading from '../ui/Loading';
import Image from 'next/image';
import page from '@/app/dashboard/orders/page';
import ReactStars from 'react-stars';

function ProductDetails() {
  const [count, setCount] = useState(1);
  const user = Cookies.get('token');
  const {id} = useParams();
  const {data, isLoading: loading} = useProduct(+id);
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
      picture: data?.picture ?? 'default-picture.jpg',
    };
    addProduct(product);
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
    setCount((count) => count - 1);
  };

  if (loading) return <Loading />;
  return (
    <div>
      {data && (
        <div className='md:mt-7 md:grid md:grid-cols-3 md:px-10'>
          <div className='flex items-center justify-center md:col-span-1'>
            <img src={baseUrl + data.picture} alt={data?.name!} className='h-[200px] pt-20 md:pt-0' />
          </div>
          <div className='flex flex-col px-4 font-semibold md:col-span-2 md:rounded-3xl md:bg-white md:p-4 md:shadow-2xl'>
            <div className='flex items-center justify-between'>
              <p className=' text-4xl md:text-5xl '>{data?.name}</p>
              <ReactStars value={data.star} size={20} color2={'#F34834'} />
            </div>
            <p className='mt-3 text-base md:text-xl'>{data?.description}</p>
            <hr className='my-2' />
            <div className='flex items-center justify-between'>
              <p className='text-base'>برند:</p>
              <p className='text-xs font-normal text-black-items'>{data?.brand}</p>
            </div>
            <hr className='my-2' />
            <div className='flex items-center justify-between'>
              <p className='text-base md:text-xl'>قیمت:</p>
              <div className='flex items-center'>
                <p className='text-xs font-black md:text-ca'>{data?.price}</p>
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
                <div className='numberItemBg flex h-9 w-[74px] items-center justify-center '>{count}</div>
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
              <MiddleIcon>
                <div onClick={user === undefined ? handleAddToCart : addCardRow}>
                  <MiniBucketIcon />
                </div>
              </MiddleIcon>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
