'use client';
import StarSvg from '@/assets/Icons/StarIcon';
import Image from 'next/image';
import React from 'react';
import MiddleIcon from '@/components/ui/MiddleIcon';
import {FavouriteIcon, MiniBucketIcon, MinusIcon, PlusIcon, ShareIcon} from '@/assets/Icons';
import useProduct from '@/service/product/useProduct';

function ProductDetails() {
  const {id} = useParams()
  const {data} = useProduct(id);
  return (
      <div className='md:mt-7 md:grid md:grid-cols-3 md:px-10'>
          <div className='md:col-span-1'>
            <Image
              src={baseUrl + data.data?.picture}
              alt={data.data?.name!}
              width={390}
              height={200}
              className='h-[200px]'
            />
          </div>
          <div className='flex flex-col px-4 font-semibold md:col-span-2 md:rounded-3xl md:bg-white md:p-4 md:shadow-2xl'>
            <div className='flex items-center justify-between'>
              <p className=' text-4xl md:text-5xl '>{data.data?.name}</p>
              <StarSvg />
            </div>
            <p className='mt-3 text-base md:text-xl'>{data.data?.description}</p>
            <hr className='my-2' />
            <div className='flex items-center justify-between'>
              <p className='text-base'>برند:</p>
              <p className='text-xs font-normal text-black-items'>{data.data?.brand}</p>
            </div>
            <hr className='my-2' />
            <div className='flex items-center justify-between'>
              <p className='text-base md:text-xl'>قیمت:</p>
              <div className='flex items-center'>
                <p className='text-xs font-black md:text-ca'>{data.data?.price}</p>
                <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>تومان</span>
              </div>
            </div>
            <hr className='my-2' />

            <div className='flex items-center justify-between'>
              <p className='text-base md:text-xl'>تعداد:</p>
              <div className='flex items-center gap-2'>
                <MiddleIcon>
                  <MinusIcon />
                </MiddleIcon>
                <div className='numberItemBg flex h-9 w-[74px] items-center justify-center '>1</div>
                <MiddleIcon>
                  <PlusIcon />
                </MiddleIcon>
              </div>
            </div>
            <hr className='my-2' />
            <div className='flex items-center justify-center gap-2 md:justify-start'>
              <MiddleIcon>
                <ShareIcon />
              </MiddleIcon>
              <MiddleIcon>
                <FavouriteIcon />
              </MiddleIcon>
              <MiddleIcon>
                <MiniBucketIcon />
              </MiddleIcon>
            </div>
          </div>
        </div>
  );
}

export default ProductDetails;
