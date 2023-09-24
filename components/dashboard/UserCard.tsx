'use client';
import Image from 'next/image';
import React from 'react';
import User from '@/assets/images/User profile.png';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/Accordion';
import {Badge} from '../ui/Badge';
import useUsers from '@/service/user/useUsers';
import {PaginationList} from '../ui/Pagination';
import useUserSerachStore from '@/store/userSerach';

function UserCard() {
  const {data} = useUsers();
  const {setSkip} = useUserSerachStore();

  const [page, setPage] = React.useState(1);

  const onPageChange = (page: number) => {
    setPage(page);
    const calculate = page - 1;
    setSkip(calculate * 10);
  };
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-2'>
        {data?.data.map((item) => (
          <div
            key={item.id}
            className='flex w-full flex-col  rounded-3xl border border-black-items border-opacity-40 bg-white'
          >
            <div className='flex w-full'>
              <Image src={User} alt='product image' className='ml-3 h-[148px] rounded-tr-3xl' />
              <div className='flex-1 justify-center border-l-black-items  border-opacity-10 md:flex md:flex-col md:gap-y-3 md:border-l md:pl-3'>
                <p className='mt-1 text-[10px] font-black md:text-sm'> {item.firstName + ' ' + item.lastName} </p>
                <hr className=' my-1' />
                <p className='text-right text-[10px] font-black md:text-sm'>{item.phone}</p>
              </div>
              <div className='h-full flex-[2] px-2 pt-6 md:pt-0'>
                <div className='md:flex md:flex-col md:gap-y-3 md:px-3 md:py-3'>
                  <hr className=' my-1 md:hidden' />
                  <div className='flex items-center justify-between'>
                    <p className='text-xs text-black-items md:text-sm'>ایمیل</p>
                    <p className='text-xs font-normal md:text-sm'>{item.email}</p>
                  </div>
                  <hr className=' my-1' />
                  <div className='flex items-center justify-between'>
                    <p className='text-xs text-black-items md:text-sm'>کد ملی</p>
                    <p className='text-xs font-normal md:text-sm'>{item.nationalCode}</p>
                  </div>
                  <hr className=' my-1' />
                  <div className='flex items-center justify-between text-[#F6622C]'>
                    <p className='text-xs'>تاریخ تولد</p>
                    <p className='text-xs font-normal md:text-sm'>{item.faBirthDate}</p>
                  </div>
                </div>
              </div>
            </div>
            <Accordion type='multiple' className='px-3'>
              <AccordionItem className='border-nonem' value='item-1'>
                <AccordionTrigger>اطلاعات بیشنر</AccordionTrigger>
                <AccordionContent className='flex w-full flex-col text-center text-sm '>
                  <p className=' font-bold'>آدرس</p>
                  <hr className='my-3 border border-black-items opacity-20' />
                  <p className=''>{item.address}</p>
                  {/* <p className=' mt-6 font-bold'>سابقه سفارشات</p>
                  <hr className='my-3 border border-black-items opacity-30' />
                  <div className='flex items-center justify-between'>
                    <Badge>درحال ارسال</Badge>
                    <p> کد سفارش:۱۴۸۴۴۳۸۰۲</p>
                    <p>۱۴۰۲ / ۰۱ / ۲۷</p>
                  </div> */}
                  <hr className='my-3 border border-black-items opacity-20' />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
      <div className='mt-2 flex flex-row-reverse justify-center'>
        <PaginationList onPageChange={onPageChange} page={page} pageCount={data?.count} />
      </div>
    </div>
  );
}

export default UserCard;
