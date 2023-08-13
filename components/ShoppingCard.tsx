'use client';
import {CloseIcon, MinusIcon, PlusIcon, StarIcon} from '@/assets/Icons';
import {UpdateCart} from '@/entities/Cart';
import {baseUrl} from '@/lib/config';
import useGetCart from '@/service/cart/useGetCart';
import useUpdateCart from '@/service/cart/useUpdateCart';
import useProductStore from '@/store/zustand';
import {useQueryClient} from '@tanstack/react-query';
import Cookies from 'js-cookie';
import Image from 'next/image';
import MiddleIcon from './ui/MiddleIcon';
import {persianNumeralToNumber} from '@/helpers/PersianToEnglish';
import {Loader2} from 'lucide-react';

function ShoppingCard() {
  // user login or not
  const user = Cookies.get('token');

  // zustand

  const products = useProductStore((state) => state.products);
  const {updateProductQuantity, removeProduct} = useProductStore(); // Destructure the updateProductQuantity function from the store
  const handleIncrease = (quantity: number, id: number) => {
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

  const queryClient = useQueryClient();
  const {mutate, isLoading} = useUpdateCart();

  // data backend
  const {data} = useGetCart();
  const handleIncreaseData = (quantity: string, id: number) => {
    const numericQuantity = persianNumeralToNumber(quantity);
    const updatedCart: UpdateCart = {
      count: +numericQuantity + 1, // The updated quantity
      // Other properties of UpdateCart if needed
    };

    mutate({id, data: updatedCart});
  };

  const handleDecreaseData = (quantity: string, id: number) => {
    if (+quantity > 1) {
      const updatedCart: UpdateCart = {
        count: +quantity - 1, // The updated quantity
        // Other properties of UpdateCart if needed
      };
      mutate({id, data: updatedCart}); // Call the updateProductQuantity function with the productId and updated quantity
    } else if (+quantity === 1) {
      removeProduct(id);
    }
  };
  console.log(data?.data[0].cartRows.map((item) => console.log(item)));
  return (
    <>
      {user !== undefined ? (
        <>
          {data?.data[0].cartRows.map((cartItem) => (
            <div
              key={cartItem.cartRowId}
              className='flex h-[184px] w-full items-center rounded-3xl border border-black-items border-opacity-40 bg-white md:h-[148px]'
            >
              <div className='relative'>
                <div
                  onClick={() => removeProduct(cartItem.cartRowId)}
                  className='absolute right-4 top-4 cursor-pointer md:top-6'
                >
                  <CloseIcon />
                </div>
                <Image
                  src={baseUrl + cartItem.productPicture}
                  width={100}
                  height={140}
                  alt='product image'
                  className='h-full md:pr-2'
                />
              </div>
              <div className='h-full flex-1 px-2 pt-6 md:grid md:grid-cols-2 md:pt-0'>
                <div className='border-l-black-items border-opacity-10  md:flex md:flex-col md:gap-y-3 md:border-l md:py-4 md:pl-3'>
                  <div className='flex items-center justify-between'>
                    <p className='text-xs font-black md:text-sm'>{cartItem.productName}</p>
                    <StarIcon />
                  </div>
                  {/* <p className='mt-1 text-[10px] font-normal md:text-xs'>{item.}</p> */}
                  <div className='hidden items-center justify-between md:mt-4 md:flex md:justify-center'>
                    <div className='flex items-center justify-center gap-2'>
                      <div onClick={() => handleDecreaseData(cartItem.count, cartItem.cartRowId)}>
                        <MiddleIcon>
                          <MinusIcon />
                        </MiddleIcon>
                      </div>
                      <div className='numberItemBg flex h-9 w-[74px] items-center justify-center '>
                        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : cartItem.count}
                      </div>
                      <div onClick={() => handleIncreaseData(cartItem.count, cartItem.cartRowId)}>
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
                      <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>{cartItem.productUnit}</span>
                    </div>
                  </div>
                  <hr className=' my-1' />
                  <div className='flex items-center justify-between'>
                    <p className='text-xs text-black-items md:text-sm'>قیمت:</p>
                    <div className='flex items-center'>
                      <p className='text-xs font-black md:text-sm'>{cartItem.faPrice}</p>
                      <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>تومان</span>
                    </div>
                  </div>
                  <hr className=' my-1' />
                  <div className='flex items-center justify-between text-[#F6622C]'>
                    <p className='text-xs'>جمع خرید:</p>
                    <div className='flex items-center'>
                      <p className='text-base font-black'>{cartItem.sumRow}</p>
                      <span className='mr-1 text-[10px] font-normal text-black-items opacity-60'>تومان</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      )}
    </>
  );
}

export default ShoppingCard;
