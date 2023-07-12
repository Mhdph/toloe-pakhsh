import {AvatarBlackIcon, PhoneBlackIcon} from '@/assets/Icons';
import {Badge} from '../ui/Badge';
import MiddleIcon from '../ui/MiddleIcon';
import ProductImage from '@/assets/tempImages/Product Photo.png';
import shokolat from '@/assets/tempImages/shokolat.png';
import Image from 'next/image';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/Accordion';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/Select';
import ShoppingCard from '../ShoppingCard';
import OrdersItem from './OrdersItem';

function OrdersCard() {
  return (
    <div className='rounded-xl border border-main-red px-6 text-black-items'>
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
        <Accordion type='multiple'>
          <AccordionItem className='border-none' value='item-1'>
            <AccordionTrigger> تومان ۱۰۸,۰۰۰</AccordionTrigger>
            <AccordionContent>
              <OrdersItem />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <hr className='my-4 border-b border-b-black-items border-opacity-10' />

        <div className='grid w-full grid-cols-4'>
          <div className='col-span-1'>
            <button className='bg_primary w-40 rounded-3xl py-2.5 text-xs font-extrabold text-white md:w-48'>
              ثبت
            </button>
          </div>
          <Select>
            <SelectTrigger className='col-span-3 w-full'>
              <SelectValue placeholder='یک کیلو گرم' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Light</SelectItem>
              <SelectItem value='dark'>Dark</SelectItem>
              <SelectItem value='system'>System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default OrdersCard;
