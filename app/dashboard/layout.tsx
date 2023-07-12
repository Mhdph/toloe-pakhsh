import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

function ProfileLayout({children}: ProfileLayoutProps) {
  return (
    <div>
      <div className='flex w-full flex-col md:grid md:grid-cols-4 md:gap-6 md:rounded-3xl md:px-10'>
        <div className='col-span-1 hidden md:inline'>
          <Sidebar />
        </div>
        <div className='mt-4 flex flex-col md:col-span-3'>{children}</div>
      </div>
    </div>
  );
}

export default ProfileLayout;
