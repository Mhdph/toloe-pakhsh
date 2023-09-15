/* eslint-disable @next/next/no-img-element */
'use client';
import {CloseIcon, MinusIcon, PlusIcon, StarIcon} from '@/assets/Icons';
import {Cart, UpdateCart} from '@/entities/Cart';
import {baseUrl} from '@/lib/config';
import useGetCart from '@/service/cart/useGetCart';
import useUpdateCart from '@/service/cart/useUpdateCart';
import useProductStore from '@/store/zustand';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import Cookies from 'js-cookie';
import Image from 'next/image';
import MiddleIcon from './ui/MiddleIcon';
import {Loader2} from 'lucide-react';
import useDeleteCartRow from '@/service/cart/useDeleteCartRow';
import Loading from './ui/Loading';
import axios from 'axios';
import {CACHE_KEY_CART} from '@/service/constants';
import {digitsEnToFa, addCommas, digitsFaToEn} from '@persian-tools/persian-tools';

function ShoppingCard() {
  // user login or not
  const user = Cookies.get('token');

  // zustand

  const products = useProductStore((state) => state.products);
  const {updateProductQuantity, removeProduct} = useProductStore();
  const handleIncrease = (quantity: number, id: number) => {
    const newQuantity = quantity + 1;
    console.log('new', newQuantity);
    updateProductQuantity(id, newQuantity);
  };

  const handleDecrease = (quantity: number, id: number) => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      updateProductQuantity(id, newQuantity);
    } else if (quantity == 1) {
      removeProduct(id);
    }
  };

  const queryClient = useQueryClient();
  const {mutate, isLoading} = useUpdateCart();

  // data backend

  // const getCardFn = async () => {
  //   const response = await axios.get(`${baseUrl}/cart/listUserCart?state=OPEN`, {
  //     headers: {
  //       authorization: 'Bearer ' + `${user}`,
  //     },
  //   });
  //   return response.data;
  // };

  // const {data, isLoading: dataLoading} = useQuery({
  //   queryKey: [CACHE_KEY_CART],
  //   queryFn: getCardFn,
  // });

  const {data, isLoading: dataLoading} = useGetCart();

  const handleIncreaseData = (quantity: string, id: number) => {
    const numericQuantity = digitsFaToEn(quantity);
    const updatedCart: UpdateCart = {
      count: +numericQuantity + 1,
    };

    mutate({id, data: updatedCart});
  };

  const handleDecreaseData = (quantity: string, id: number) => {
    const numericQuantity = digitsFaToEn(quantity);

    if (+numericQuantity > 1) {
      const updatedCart: UpdateCart = {
        count: +numericQuantity - 1,
      };

      mutate({id, data: updatedCart});
    } else {
      deleteRow(id);
    }
  };

  const {mutate: deleteRow} = useDeleteCartRow();

  const deleteCardRow = (id: string | number) => {
    deleteRow(id);
  };

  if (dataLoading) return <Loading />;

  console.log(user);

  return (
    <>
      {user !== undefined && data ? (
        <>
          {data?.data.map((cartItem: Cart) => {
            return cartItem.cartRows.map((item) => (
              <div
                key={item.cartRowId}
                className='flex h-[184px] w-full items-center rounded-3xl border border-black-items border-opacity-40 bg-white md:h-[148px]'
              >
                <div className='relative'>
                  <div
                    onClick={() => deleteCardRow(item.cartRowId)}
                    className='absolute right-4 top-4 z-50 cursor-pointer md:top-6'
                  >
                    <CloseIcon />
                  </div>
                  <div className='relative'>
                    {item.productOff !== 0 ? (
                      <div className='absolute left-2 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-red-500 p-2 text-sm font-extrabold  text-white'>
                        {digitsEnToFa(item.productOff / 100)}%
                      </div>
                    ) : null}
                    <div className='flex h-[184px] w-[140px] items-center justify-center '>
                      <img src={baseUrl + item.productPicture} alt='product image' className=' md:pr-2' />
                    </div>
                  </div>
                </div>
                <div className='h-full flex-1 px-2 pt-6 md:grid md:grid-cols-2 md:pt-0'>
                  <div className='border-l-black-items border-opacity-10  md:flex md:flex-col md:gap-y-3 md:border-l md:py-4 md:pl-3'>
                    <div className='flex items-center justify-between'>
                      <p className='text-xs font-black md:text-sm'>{item.productName}</p>
                      <StarIcon />
                    </div>
                    {/* <p className='mt-1 text-[10px] font-normal md:text-xs'>{item.}</p> */}
                    <div className='hidden items-center justify-between md:mt-4 md:flex md:justify-center'>
                      <div className='flex items-center justify-center gap-2'>
                        <div onClick={() => handleDecreaseData(item.count, item.cartRowId)}>
                          <MiddleIcon>
                            <MinusIcon />
                          </MiddleIcon>
                        </div>
                        <div className='numberItemBg flex h-9 w-[74px] items-center justify-center '>
                          {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : digitsEnToFa(item.count)}
                        </div>
                        <div onClick={() => handleIncreaseData(item.count, item.cartRowId)}>
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
                        <p className='text-xs font-black md:text-sm'>۱</p>
                        <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>{item.productUnit}</span>
                      </div>
                    </div>
                    <hr className=' my-1' />
                    <div className='flex items-center justify-between'>
                      <p className='text-xs text-black-items md:text-sm'>قیمت:</p>
                      <div className='flex items-center'>
                        <p className='text-xs font-black md:text-sm'>{digitsEnToFa(addCommas(item.faPrice))}</p>
                        <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>تومان</span>
                      </div>
                    </div>
                    <hr className=' my-1' />
                    <div className='flex items-center justify-between text-[#F6622C]'>
                      <p className='text-xs'>جمع خرید:</p>
                      <div className='flex items-center'>
                        <p className='text-base font-black'>{digitsEnToFa(addCommas(item.sumRow))}</p>
                        <span className='mr-1 text-[10px] font-normal text-black-items opacity-60'>تومان</span>
                      </div>
                    </div>

                    <div className='mt-3 items-center justify-between   md:hidden md:justify-center'>
                      <div className='flex items-center justify-center gap-2'>
                        <div onClick={() => handleIncreaseData(item.count, item.cartRowId)}>
                          <MiddleIcon>
                            <PlusIcon />
                          </MiddleIcon>
                        </div>
                        <div className='numberItemBg flex h-9 w-[74px] items-center justify-center '>
                          {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : digitsEnToFa(item.count)}
                        </div>
                        <div onClick={() => handleDecreaseData(item.count, item.cartRowId)}>
                          <MiddleIcon>
                            <MinusIcon />
                          </MiddleIcon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ));
          })}
        </>
      ) : (
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
                <img src={baseUrl + item.picture} alt='product image' className=' h-[140px] w-[100px] md:pr-2' />
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
                      <div className='numberItemBg flex h-9 w-[74px] items-center justify-center '>
                        {digitsEnToFa(item.quantity)}
                      </div>
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
                      <p className='text-xs font-black md:text-sm'>{digitsEnToFa(addCommas(item.price))}</p>
                      <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>تومان</span>
                    </div>
                  </div>
                  <hr className=' my-1' />
                  <div className='flex items-center justify-between text-[#F6622C]'>
                    <p className='text-xs'>جمع خرید:</p>
                    <div className='flex items-center'>
                      <p className='text-base font-black'>{digitsEnToFa(addCommas(item.totalPrice!))}</p>
                      <span className='mr-1 text-[10px] font-normal text-black-items opacity-60'>تومان</span>
                    </div>
                  </div>
                  <div className='mt-3 items-center justify-between   md:hidden md:justify-center'>
                    <div className='flex items-center justify-center gap-2'>
                      <div onClick={() => handleDecrease(item.quantity, item.id)}>
                        <MiddleIcon>
                          <PlusIcon />
                        </MiddleIcon>
                      </div>
                      <div className='numberItemBg flex h-9 w-[74px] items-center justify-center '>
                        {digitsEnToFa(item.quantity)}
                      </div>
                      <div onClick={() => handleIncrease(item.quantity, item.id)}>
                        <MiddleIcon>
                          <MinusIcon />
                        </MiddleIcon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default ShoppingCard;
