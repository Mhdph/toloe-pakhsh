'use client';

import {ArrowOrangeIcon} from '@/assets/Icons';
import {ProfileLinkListItem} from '@/constant/List';
import Link from 'next/link';
import React from 'react';
import Cookies from 'js-cookie';

function ProfilePageList() {
  const logOut = () => {
    Cookies.remove('token');
  };

  return (
    <div className='mt-8'>
      {ProfileLinkListItem.map((item) => (
        <div key={item.url}>
          <div className='flex items-center justify-between px-3'>
            <Link className='text-base font-semibold text-black-items' href={item.url}>
              {item.name}
            </Link>
            <ArrowOrangeIcon />
          </div>
          <hr className='my-4 border border-solid border-[#F6602D] opacity-50' />
        </div>
      ))}
      <div onClick={() => logOut()} className='flex items-center justify-between px-3'>
        <p className='text-base font-semibold text-black-items'>خروج </p>
        <ArrowOrangeIcon />
      </div>
      <hr className='my-4 border border-solid border-[#F6602D] opacity-50' />
    </div>
  );
}

export default ProfilePageList;
