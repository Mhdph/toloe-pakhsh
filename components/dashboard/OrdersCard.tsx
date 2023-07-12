import {AvatarBlackIcon, PhoneBlackIcon} from '@/assets/Icons';
import {Badge} from '../ui/Badge';
import MiddleIcon from '../ui/MiddleIcon';
import ProductImage from '@/assets/tempImages/Product Photo.png';
import shokolat from '@/assets/tempImages/shokolat.png';
import Image from 'next/image';

function OrdersCard() {
  return (
    <div className='rounded-xl border-2 border-main-red px-6 text-black-items'>
      <div className='py-4'>
        <div className='flex items-center justify-between'>
          <p>۱۴۰۲ / ۰۱ / ۲۷</p>
          <div className='flex items-center gap-1'>
            <p>۱۴۸۴۴۳۸۰۲</p>
            <p>:کد سفارش</p>
          </div>
          <Badge className='bg-[#FBF2C0] text-black'>Badge</Badge>
        </div>
        <hr className='my-4 border-b border-b-black-items border-opacity-10' />
        <div className='flex flex-row-reverse justify-between'>
          <div className='flex items-center gap-2'>
            <p className='text-sm'>نام و نام خانوادگی</p>
            <MiddleIcon>
              <AvatarBlackIcon />
            </MiddleIcon>
          </div>
          <div className='flex items-center gap-2'>
            <PhoneBlackIcon />
            <p className='text-sm font-normal'> +۹۸ ۹۲۳ ۲۵۳ ۲۹ ۱۳ </p>
          </div>
        </div>
        <hr className='my-4 border-b border-b-black-items border-opacity-10' />
        <div className='flex flex-row-reverse items-center gap-2'>
          <Image src={shokolat} className='h-20 w-20' alt='product photo' />
          <Image src={ProductImage} className='h-20 w-20' alt='product photo' />
        </div>
        <hr className='my-4 border-b border-b-black-items border-opacity-10' />
      </div>
    </div>
  );
}

export default OrdersCard;
