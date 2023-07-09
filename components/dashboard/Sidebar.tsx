'use client';
import {sidebar} from '@/constant/List';
import {cn} from '@/lib/cn';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';

function Sidebar() {
  const pathName = usePathname();

  return (
    <div className='mt-3 flex flex-col rounded-3xl bg-[#EAEBEB]'>
      {sidebar.map((item) => (
        <Link
          className={cn(
            pathName === item.url
              ? 'border-[#F24435] text-[#F24435]'
              : 'border-black-items border-opacity-40 text-black',
            'border-b py-6 text-center text-sm font-black',
          )}
          href={item.url}
          key={item.name}
        >
          {item.name}
        </Link>
      ))}
      <div className=' py-6 text-center text-sm font-black text-black'>خروج </div>
    </div>
  );
}

export default Sidebar;
