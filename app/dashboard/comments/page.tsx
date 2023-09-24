'use client';
import Image from 'next/image';
import React from 'react';
import User from '@/assets/images/User profile.png';
import Button from '@/components/ui/Button';
import {StarIcon} from '@/assets/Icons';
import Sohan from '@/assets/tempImages/sohan.png';
import AdminComment from '@/components/dashboard/AdminComment';
import useConfirmComments from '@/service/comment/useConfirmComments';
import UseGetComments from '@/service/comment/UseGetComments';
import {baseUrl} from '@/lib/config';
import ReactStars from 'react-stars';
import {PaginationList} from '@/components/ui/Pagination';
import useCommentStore from '@/store/comment';

interface ConfirmComments {
  verify: boolean;
}

function Comments() {
  const [page, setPage] = React.useState(1);

  const {mutate, isLoading} = useConfirmComments();
  const {data} = UseGetComments();
  const {setSkip} = useCommentStore();

  const confirmComment = (id: number) => {
    const updatedComments: ConfirmComments = {
      verify: true,
    };
    mutate({
      id,
      data: updatedComments,
    });
  };

  const onPageChange = (page: number) => {
    setPage(page);
    const calculate = page - 1;
    setSkip(calculate * 10);
  };

  return (
    <div className='flex flex-col gap-4'>
      {data?.data.map((item) => (
        <div
          key={item.id}
          className='grid grid-cols-7 rounded-3xl border border-main-red border-opacity-40 text-black-items'
        >
          <div className='col-span-4 flex flex-col gap-4 bg-[#E9EAEA] p-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Image src={User} alt='user profile' className='h-9 w-9 rounded-full' />
                <p className='text-xl font-semibold'>{item.userFirstName + ' ' + item.userLastName}</p>
              </div>
              <ReactStars count={item.star} value={item.star} size={20} color2={'#F34834'} />
            </div>
            <p className='text-sm font-normal'>{item.text}</p>

            <div className='flex justify-end'>
              <p>{item.faDate}</p>
            </div>
            <hr className='border border-gray-500' />
            {item.replay !== '' ? <p className='text-lg font-semibold text-red-500'>پاسخ ادمین</p> : null}

            <p className='text-sm font-normal'>{item.replay}</p>
          </div>
          <div className='col-span-2 flex flex-col items-center justify-center gap-2 border-x border-x-main-red border-opacity-40 text-center'>
            <img src={baseUrl + item.productPicture} className='h-20 w-20' alt='' />
            <p className='text-sm font-black'>{item.productName}</p>
            <p className='pb-2 text-sm font-normal'>{item.productDescription}</p>
          </div>
          <div className='col-span-1 flex flex-col items-center justify-between py-3'>
            {item.verify ? null : (
              <Button isLoading={isLoading} onClick={() => confirmComment(item.id)} className='w-28'>
                تایید دیدگاه
              </Button>
            )}
            <AdminComment id={item.id} />
          </div>
        </div>
      ))}
      <div className='mt-2 flex flex-row-reverse justify-center'>
        <PaginationList onPageChange={onPageChange} page={page} pageCount={data?.count} />
      </div>
    </div>
  );
}

export default Comments;
