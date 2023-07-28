'use client';
import {HeartIcon, StarIcon, StoreActiveIcon} from '@/assets/Icons';
import {baseUrl} from '@/lib/config';
import useProductStore from '@/store/zustand';
import Image from 'next/image';
import Link from 'next/link';
import useAddCart from '@/service/cart/useAddCart';
import Cookies from 'js-cookie';
import {number} from 'zod';
interface dataItem {
  data: {
    id: number;
    name: string;
    unit: string;
    unitCount: string;
    price: number;
    picture: string;
    brand: string;
    exist: boolean;
    off: number;
  };
}
export interface ProductProps {
  name: string;
  id: number;
  quantity: number;
  brand: string;
  unit: string;
  unitCount: string;
  price: number;
  picture: string;
}
function ListCard({data: {brand, picture, name, unitCount, unit, price, id, off}}: dataItem) {
  const addProduct = useProductStore((state) => state.addProduct);
  // const user = Cookies.get('token');
  const user = undefined;
  const quantity = 1;
  const {mutate, isLoading} = useAddCart();
  const handleAddToCart = () => {
    const product: ProductProps = {
      name,
      id,
      quantity,
      unit,
      unitCount,
      brand,
      price,
      picture,
    };
    console.log(product);
    addProduct(product);
  };
  const addCardRow = () => {
    mutate({
      price,
      productId: id,
      count: quantity,
    });
  };

  return (
    <div className='h-[264px] min-w-[170px] max-w-[170px] rounded-3xl border border-black-items border-opacity-40 bg-white md:h-[300px] md:min-w-[196px] md:max-w-[196px]'>
      <Link href={`/store/${id}`} className=' flex justify-center'>
        <div className='relative'>
          {off !== 0 ? (
            <div className='absolute left-2 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-red-500 p-2 text-sm font-extrabold  text-white'>
              {off}%
            </div>
          ) : null}
          <Image
            src={baseUrl + picture}
            alt='product image'
            className='h-[120px] w-[170px] rounded-t-3xl border-b md:w-[223px]'
            width={170}
            height={120}
          />
        </div>
      </Link>

      <div className='mt-2 px-2'>
        <Link href={`/store/${id}`}>
          <div className='flex items-center justify-between '>
            <p className='w-1/2 truncate text-xs font-black md:text-ca'>{name}</p>
            <StarIcon />
          </div>
          <p className='mt-1 text-[10px] font-normal md:mt-2 md:text-xs'>{brand}</p>
          <hr className=' my-1 md:my-2' />
          <div className='flex items-center justify-between'>
            <p className='text-xs text-black-items md:text-ca'>واحد:</p>
            <div className='flex items-center'>
              <p className='text-xs font-black md:text-ca'>{unitCount}</p>
              <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>{unit}</span>
            </div>
          </div>
          <hr className=' my-1 md:my-2' />
          <div className='flex items-center justify-between'>
            <p className='text-xs text-black-items md:text-ca'>قیمت:</p>
            <div className='flex items-center'>
              <p className='text-xs font-black md:text-ca'>{price}</p>
              <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>تومان</span>
            </div>
          </div>
        </Link>
        <div className='mt-2 flex items-center gap-2 md:mt-3 md:justify-center'>
          <div className='flex h-9 w-9 items-center justify-center rounded-full border border-[#F6602D] md:h-10 md:w-10'>
            <div className=''>
              <HeartIcon />
            </div>
          </div>
          <button
            onClick={user === undefined ? handleAddToCart : addCardRow}
            disabled={isLoading}
            className='btn_primary flex w-[110px] items-center justify-around rounded-[18px] py-1 text-xs font-extrabold text-white md:w-[157px] md:py-2'
          >
            افزودن
            <StoreActiveIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
