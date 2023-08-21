'use client';
import {StarIcon} from '@/assets/Icons';
import {CartRow} from '@/entities/Cart';
import {baseUrl} from '@/lib/config';

function OrdersItem({data}: any) {
  return (
    <div>
      {data.cartRows.map((data: CartRow) => (
        <div
          key={data.cartRowId}
          className='flex h-[184px] w-full flex-row-reverse items-center rounded-3xl  bg-white md:h-[148px]'
        >
          <div>
            <img src={baseUrl + data.productPicture} alt='product image' className='h-24 w-24 md:pr-2' />
          </div>
          <div className='h-full flex-1 px-2 pt-6 md:grid md:grid-cols-2 md:pt-0'>
            <div className='md:flex md:flex-col md:gap-y-3 md:py-3 md:pr-3'>
              <hr className=' my-1 md:hidden' />
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <p className='text-xs font-black md:text-sm'>{data.count}</p>
                </div>
                <p className='text-xs text-black-items md:text-sm'>:تعداد</p>
              </div>
              <hr className=' my-1' />
              <div className='flex  items-center justify-between'>
                <div className='flex items-center'>
                  <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>تومان</span>
                  <p className='text-xs font-black md:text-sm'>{data.price}</p>
                </div>
                <p className='text-xs text-black-items md:text-sm'>:قیمت</p>
              </div>
              <hr className=' my-1' />
              <div className='flex items-center justify-between text-[#F6622C]'>
                <div className='flex items-center'>
                  <span className='mr-1 text-[10px] font-normal text-black-items opacity-60'>تومان</span>
                  <p className='text-base font-black'>{data.sumRow}</p>
                </div>
                <p className='text-xs'>:جمع خرید</p>
              </div>
            </div>
            <div className='border-l-black-items border-opacity-10  md:flex md:flex-col md:gap-y-3 md:border-l md:py-4 md:pl-3'>
              <div className='flex items-center justify-between'>
                <StarIcon />
                <p className='text-xs font-black md:text-sm'>{data.productName}</p>
              </div>
              <div className='flex items-center justify-between'>
                <div></div>
                <p className='mt-1 text-[10px] font-normal md:text-xs'>{data.productDescription}</p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>{data.productUnitCount}</span>
                  <p className='text-xs font-black md:text-sm'>{data.productUnit}</p>
                </div>
                <p className='text-xs text-black-items md:text-sm'>:واحد</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrdersItem;
