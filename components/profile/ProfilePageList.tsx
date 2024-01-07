'use client';

import {ArrowBlackLeftIcon, ArrowOrangeIcon} from '@/assets/Icons';
import {ProfileLinkListItem} from '@/constant/List';
import Link from 'next/link';
import React from 'react';
import Cookies from 'js-cookie';
import {useRouter} from 'next/navigation';

function ProfilePageList() {
  const router = useRouter();
  const token = Cookies.get('token');

  const logOut = () => {
    Cookies.remove('token');
    Cookies.remove('userId');
    Cookies.remove('phoneNumber');
    router.push('/login');
  };

  return (
    <div className='mt-8'>
      {ProfileLinkListItem.map((item) => (
        <div key={item.url}>
          {/* handle deactive history on user not login */}
          {!token && ['/history', '/favourite', '/lastvisit', '/account'].includes(item.url) ? (
            <div className='flex items-center justify-between px-3 text-slate-300'>
              {item.name}
              <ArrowBlackLeftIcon />
            </div>
          ) : (
            <div className='flex items-center justify-between px-3'>
              <Link className='text-base font-semibold text-black-items' href={item.url}>
                {item.name}
              </Link>
              <ArrowOrangeIcon />
            </div>
          )}
          <hr className='my-4 border border-solid border-[#F6602D] opacity-50' />
        </div>
      ))}
      <div onClick={() => logOut()} className='flex cursor-pointer items-center justify-between px-3'>
        {!token ? (
          <p className='text-base font-semibold text-black-items'>ورود </p>
        ) : (
          <p className='text-base font-semibold text-black-items'>خروج </p>
        )}
        <ArrowOrangeIcon />
      </div>
      <hr className='my-4 mt-14 border border-solid border-[#F6602D] opacity-50 md:mt-4' />
    </div>
  );
}

export default ProfilePageList;
