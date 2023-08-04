'use client';
import Image from 'next/image';
import React from 'react';
import {CloseIcon, MinusIcon, PlusIcon, StarIcon} from '@/assets/Icons';
import MiddleIcon from './ui/MiddleIcon';
import useProductStore from '@/store/zustand';
import {baseUrl} from '@/lib/config';

function ShoppingCard() {
  const products = useProductStore((state) => state.products);
  const {updateProductQuantity, removeProduct} = useProductStore(); // Destructure the updateProductQuantity function from the store
  const handleIncrease = (quantity: number, id: number) => {
    console.log(quantity, id);
    const newQuantity = quantity + 1;
    console.log('new', newQuantity);
    updateProductQuantity(id, newQuantity); // Call the updateProductQuantity function with the productId and updated quantity
  };

  const handleDecrease = (quantity: number, id: number) => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      updateProductQuantity(id, newQuantity); // Call the updateProductQuantity function with the productId and updated quantity
    } else if (quantity == 1) {
      removeProduct(id);
    }
  };

  console.log(products);
  return (
    <>
      {products.map((item) => (
        <div
          key={item.id}
          className='flex h-[184px] w-full items-center rounded-3xl border border-black-items border-opacity-40 bg-white md:h-[148px]'
        >
          <div className='relative'>
            <div onClick={() => removeProduct(item.id)} className='absolute right-4 top-4 cursor-pointer md:top-6'>
              <CloseIcon />
            </div>
            <Image
              src={baseUrl + item.picture}
              width={100}
              height={140}
              alt='product image'
              className='h-full md:pr-2'
            />
          </div>
          <div className='h-full flex-1 px-2 pt-6 md:grid md:grid-cols-2 md:pt-0'>
            <div className='border-l-black-items border-opacity-10  md:flex md:flex-col md:gap-y-3 md:border-l md:py-4 md:pl-3'>
              <div className='flex items-center justify-between'>
                <p className='text-xs font-black md:text-sm'>{item.name}</p>
                <StarIcon />
              </div>
              <p className='mt-1 text-[10px] font-normal md:text-xs'>{item.brand}</p>
              <div className='hidden items-center justify-between md:mt-4 md:flex md:justify-center'>
                <div className='flex items-center justify-center gap-2'>
                  <div onClick={() => handleDecrease(item.quantity, item.id)}>
                    <MiddleIcon>
                      <MinusIcon />
                    </MiddleIcon>
                  </div>
                  <div className='numberItemBg flex h-9 w-[74px] items-center justify-center '>{item.quantity}</div>
                  <div onClick={() => handleIncrease(item.quantity, item.id)}>
                    <MiddleIcon>
                      <PlusIcon />
                    </MiddleIcon>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:flex md:flex-col md:gap-y-3 md:py-3 md:pr-3'>
              <hr className=' my-1 md:hidden' />
              <div className='flex items-center justify-between'>
                <p className='text-xs text-black-items md:text-sm'>واحد:</p>
                <div className='flex items-center'>
                  <p className='text-xs font-black md:text-sm'>{item.unitCount}</p>
                  <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>{item.unit}</span>
                </div>
              </div>
              <hr className=' my-1' />
              <div className='flex items-center justify-between'>
                <p className='text-xs text-black-items md:text-sm'>قیمت:</p>
                <div className='flex items-center'>
                  <p className='text-xs font-black md:text-sm'>{item.price}</p>
                  <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>تومان</span>
                </div>
              </div>
              <hr className=' my-1' />
              <div className='flex items-center justify-between text-[#F6622C]'>
                <p className='text-xs'>جمع خرید:</p>
                <div className='flex items-center'>
                  <p className='text-base font-black'>{item.totalPrice}</p>
                  <span className='mr-1 text-[10px] font-normal text-black-items opacity-60'>تومان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShoppingCard;
