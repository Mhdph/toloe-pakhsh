'use client';
import React from 'react';
import Button from '../ui/Button';
import {useRouter} from 'next/navigation';
import {addCommas, digitsEnToFa} from '@persian-tools/persian-tools';
import DeleteModal from './DeleteModal';
import axios from 'axios';
import {baseUrl} from '@/lib/config';
import {toast} from 'react-hot-toast';
import {CACHE_KEY_PRODUCT} from '@/service/constants';
import {useQueryClient} from '@tanstack/react-query';
import Cookies from 'js-cookie';

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

function DashboardProductCard({data: {brand, picture, name, unitCount, unit, price, id, off}}: dataItem) {
  const navigate = useRouter();
  const queryClient = useQueryClient();
  const token = Cookies.get('token');

  const push = (id: number) => {
    navigate.push(`/dashboard/products/edit/${id}`);
  };

  const deleteProduct = (id: number) => {
    try {
      axios.delete(`${baseUrl}/product/delete/${id}`, {
        headers: {
          authorization: 'Bearer ' + `${token}`,
        },
      });
      toast.success('محصول با موفقیت حذف شد');
      queryClient.refetchQueries(CACHE_KEY_PRODUCT);
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <div className='  w-48 rounded-xl border border-black-items border-opacity-40'>
      <div className='flex flex-col justify-center p-2'>
        <p className='text-center text-xs font-black md:text-ca'>{name}</p>
        <hr className=' my-1 border border-black-items opacity-10 md:my-2' />
        <p className='text-center text-xs font-normal md:text-ca'>{brand}</p>

        <hr className=' my-1 border border-black-items opacity-10 md:my-2' />
        <div className='flex items-center justify-between'>
          <p className='text-xs text-black-items md:text-ca'>واحد:</p>
          <div className='flex items-center'>
            <p className='text-xs font-black md:text-ca'>{unitCount}</p>
            <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>{unit}</span>
          </div>
        </div>
        <hr className=' my-1 border border-black-items opacity-10 md:my-2' />
        <div className='flex items-center justify-between'>
          <p className='text-xs text-black-items md:text-ca'>قیمت:</p>
          <div className='flex items-center'>
            <p className='text-xs font-black md:text-ca'>{digitsEnToFa(addCommas(price))}</p>
            <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>تومان</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div onClick={() => push(id)} className='mt-2 flex items-center gap-2 md:mt-3 md:justify-center'>
            <Button>ویرایش</Button>
          </div>
          <div className='mt-3'>
            <DeleteModal deleteFn={() => deleteProduct(id)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardProductCard;
