'use client';
import React from 'react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {cn} from '@/lib/cn';
import {
  HomeActiveIcon,
  HomeWhiteIcon,
  ProfileActiveIcon,
  SearchActiveIcon,
  StoreActiveIcon,
  StoreIcon,
  ProfileIcon,
  SearchIcon,
} from '@/assets/Icons';
type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const pathName = usePathname();

  return (
    <div className='lg:hidden'>
      <div className='fixed bottom-0 left-0 z-50 h-16 w-full bg-white '>
        <div className='mx-auto grid h-full max-w-lg grid-cols-4 pt-1 font-medium'>
          <Link
            href='/profile'
            className={cn(
              pathName === '/profile' ? 'footer_bg border-none' : '',
              'inline-flex flex-col items-center justify-center px-1 text-center',
            )}
          >
            {pathName == '/profile' ? <ProfileActiveIcon /> : <ProfileIcon />}

            <span
              className={cn(
                pathName == '/profile' ? 'text-white' : 'text-red-500',
                'py-2 text-center text-xs font-black ',
              )}
            >
              حساب کاربری
            </span>
          </Link>

          <Link
            href='/shop'
            className={cn(
              pathName === '/shop' ? 'footer_bg border-none' : '',
              'inline-flex flex-col items-center justify-center px-1 text-center',
            )}
          >
            {pathName == '/shop' ? <StoreActiveIcon /> : <StoreIcon />}

            <span
              className={cn(
                pathName == '/shop' ? 'text-white' : 'text-red-500',
                'py-2 text-center text-xs font-black ',
              )}
            >
              فروشگاه
            </span>
          </Link>
          <Link
            href='/search'
            className={cn(
              pathName === '/search' ? 'footer_bg border-none' : '',
              'inline-flex flex-col items-center justify-center px-1 text-center',
            )}
          >
            {pathName == '/search' ? <SearchActiveIcon /> : <SearchIcon />}

            <span
              className={cn(
                pathName == '/search' ? 'text-white' : 'text-red-500',
                'py-2 text-center text-xs font-black ',
              )}
            >
              جست و جو
            </span>
          </Link>
          <Link
            href='/'
            className={cn(
              pathName === '/' ? 'footer_bg border-none' : '',
              'inline-flex flex-col items-center justify-center px-1 text-center',
            )}
          >
            {pathName == '/' ? <HomeWhiteIcon /> : <HomeActiveIcon />}
            <span
              className={cn(pathName == '/' ? 'text-white' : 'text-red-500', 'py-2 text-center text-xs font-black ')}
            >
              خانه
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
