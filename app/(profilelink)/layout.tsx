'use client';
import MyOrder from '@/components/profile/MyOrder';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfilePageList from '@/components/profile/ProfilePageList';
import {cn} from '@/lib/cn';
import Cookies from 'js-cookie';
import React from 'react';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

function ProfileLayout({children}: ProfileLayoutProps) {
  const user = Cookies.get('token');
  return (
    <div>
      <div
        className={cn(
          user === undefined ? 'opacity-20' : 'opacity-100',
          'flex w-full flex-col  md:grid md:grid-cols-4 md:gap-6 md:rounded-3xl md:px-10',
        )}
      >
        <div className='col-span-1 hidden md:inline'>
          <ProfileInfo />
          <div className='hidden md:inline'>
            <ProfilePageList />
          </div>
        </div>
        <div className='flex flex-col md:col-span-3'>
          <div className='hidden md:inline'>
            <MyOrder />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ProfileLayout;
