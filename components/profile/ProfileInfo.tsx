'use client';
import {AvatarIcon} from '@/assets/Icons';
import useUser from '@/service/user/useUser';
import Cookies from 'js-cookie';
import React from 'react';

function ProfileInfo() {
  const id = Cookies.get('userId')!;
  const {data} = useUser(id);

  return (
    <div className='pt-[72px] md:pt-8 '>
      <div className='serach_bar flex h-full items-center gap-4 rounded-t-3xl px-5 py-4 md:flex-col'>
        <AvatarIcon />
        <div className='flex-1 text-xs font-normal text-white md:text-center'>
          <p className='font-black'>{data?.firstName + ' ' + data?.lastName}</p>
          <hr className='borde my-1 border-solid border-white opacity-20' />
          <p>{data?.phone}</p>
          <hr className='borde my-1 border-solid border-white opacity-20' />
          <p>{data?.address}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
