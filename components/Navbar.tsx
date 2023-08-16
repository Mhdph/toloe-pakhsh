'use client';
import {
  MenuIcon,
  LogoIcon,
  StoreActiveIcon,
  BucketIcon,
  AccoutIcon,
  ProfileActiveIcon,
  StoreIcon,
  BucketBlackIcon,
  HomeIcon,
  HomeActiveIcon,
} from '@/assets/Icons';
import SearchBarSvg from '@/assets/svg/SearchBarSvg';
import DesktopLogo from '@/assets/svg/LogoSvg';
import {usePathname} from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import {cn} from '@/lib/cn';
import {SearchIcon} from 'lucide-react';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const pathName = usePathname();
  return (
    <div>
      <div className='navbar_shadow fixed z-50 flex h-[72px] w-full items-center justify-between bg-white pb-2 lg:hidden'>
        <div className='navbar_bg_right flex items-center justify-center'>
          <div className='cursor-pointer'>
            <MenuIcon />
          </div>
        </div>
        <Link href='/' className='mt-8 cursor-pointer'>
          <LogoIcon />
        </Link>
        <Link href='/store' className='navbar_bg_left flex items-center justify-center'>
          <div className='cursor-pointer'>
            <StoreActiveIcon />
          </div>
        </Link>
      </div>
      <div className='hidden lg:inline'>
        <div className='flex items-center  justify-between px-12 py-6'>
          <Link href='/' className='cursor-pointer'>
            <DesktopLogo />
          </Link>
          <div className='flex items-center justify-between gap-16 text-[14px]'>
            <Link href='/blog'>وبلاگ</Link>
            <Link href='/aboutus'>درباره ما</Link>
            <Link href='/'>سیستم کسب درامد</Link>
          </div>
          <div className='flex items-center gap-4'>
            <div className='relative  '>
              <input
                type='text'
                id='voice-search'
                className='w-[352px] rounded-[18px] bg-gray-200 py-1.5 pr-10 outline-none'
                placeholder='جستجو'
              />
              <div className='pointer-events-none absolute inset-y-0  right-0 flex items-center pr-3'>
                <SearchBarSvg />
              </div>
            </div>
            <div className='contact_us flex h-10 w-10 items-center justify-center rounded-full bg-red-700'>
              <Link href='/shopingbasket'>
                <BucketIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex h-10 w-full flex-row-reverse justify-between bg-[#E9EAEA] px-12'>
          <Link
            href='/profile'
            className={cn(
              pathName === '/profile'
                ? 'rounded-t-3xl border-t  border-t-[#F6622C] bg-white text-[#F6622C]'
                : 'text-black-items',
              'flex items-center gap-3 px-24 text-[14px] font-extrabold',
            )}
          >
            {pathName == '/profile' ? <ProfileActiveIcon /> : <AccoutIcon />}
            <span className='py-2 text-center text-xs font-black'>حساب کاربری</span>
          </Link>

          <Link
            href='/store'
            className={cn(
              pathName === '/store'
                ? 'rounded-t-3xl border-t  border-t-[#F6622C] bg-white text-[#F6622C]'
                : 'text-black-items',
              'flex items-center gap-3 px-24 text-[14px] font-extrabold',
            )}
          >
            {pathName == '/store' ? <StoreIcon /> : <BucketBlackIcon />}
            <span className='py-2 text-xs font-black'>فروشگاه</span>
          </Link>
          <Link
            href='/search'
            className={cn(
              pathName === '/search'
                ? 'rounded-t-3xl border-t  border-t-[#F6622C] bg-white text-[#F6622C]'
                : 'text-black-items',
              'flex items-center gap-3 px-24 text-[14px] font-extrabold',
            )}
          >
            {pathName == '/search' ? <SearchIcon /> : <SearchBarSvg />}
            <span className='py-2 text-center text-xs font-black'>جست و جو</span>
          </Link>
          <Link
            href='/'
            className={cn(
              pathName === '/'
                ? 'rounded-t-3xl border-t  border-t-[#F6622C] bg-white text-[#F6622C]'
                : 'text-black-items',
              'flex items-center gap-3 px-24 text-[14px] font-extrabold',
            )}
          >
            {pathName == '/' ? <HomeActiveIcon /> : <HomeIcon />}

            <span className='py-2 text-xs font-black'>خانه</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
