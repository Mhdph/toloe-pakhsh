import React from 'react';
import Button from '../ui/Button';

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
            <p className='text-xs font-black md:text-ca'>{price}</p>
            <span className='mr-1 text-[10px] font-normal opacity-60 md:text-xs'>تومان</span>
          </div>
        </div>
        <div className='mt-2 flex items-center gap-2 md:mt-3 md:justify-center'>
          <Button>ویرایش</Button>
        </div>
      </div>
    </div>
  );
}

export default DashboardProductCard;
