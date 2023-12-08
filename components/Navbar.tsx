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
import {usePathname, useRouter} from 'next/navigation';
import Link from 'next/link';
import {cn} from '@/lib/cn';
import {SearchIcon} from 'lucide-react';
import {Combobox, Transition} from '@headlessui/react';
import React, {Fragment, useEffect} from 'react';
import useDebounce from '@/hooks/useDebounce';
import axios from 'axios';
import {baseUrl} from '@/lib/config';
import {Product} from '@/entities/product';
import {MobileMenu} from './MobileMenu';
import {useProductStore, useCartListCount} from '@/store/zustand';
import {digitsEnToFa} from '@persian-tools/persian-tools';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [data, setData] = React.useState([]);
  const [cartRow, setCartRow] = React.useState(0);
  const [name, setName] = React.useState('');
  const pathName = usePathname();
  const router = useRouter();
  const debouncedValue = useDebounce(name, 3000);
  const unSignCartListCount = useProductStore((state) => state.products).length;
  const signCartListCount = useCartListCount((state) => state.count);

  const getProduct = async () => {
    try {
      const res = await axios.get(`${baseUrl}/product?productName=${name}`);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const cartListCount = () => {
    if (signCartListCount != 0) {
      setCartRow(signCartListCount);
    } else {
      setCartRow(unSignCartListCount);
    }
  };

  React.useEffect(() => {
    getProduct();
    cartListCount();
  }, [debouncedValue, unSignCartListCount, signCartListCount, data]);
  return (
    <div>
      <div className='navbar_shadow fixed z-50 flex h-[72px] w-full items-center justify-between bg-white pb-2 lg:hidden'>
        <div className='navbar_bg_right flex items-center justify-center'>
          <div className='cursor-pointer'>
            <MobileMenu />
          </div>
        </div>{' '}
        <Link href='/' className='mt-8 cursor-pointer'>
          <LogoIcon />
        </Link>
        <Link href='/shopingbasket' className='navbar_bg_left flex items-center justify-center'>
          <div className=' flex h-8 w-16 cursor-pointer flex-row items-center justify-around  '>
            {cartRow != 0 ? (
              <div className=' flex w-6 justify-center rounded-full bg-white  text-red-700'>
                {digitsEnToFa(cartRow)}
              </div>
            ) : (
              <></>
            )}

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
            <a href='https://mag.toloupakhsh.ir/mag/'>وبلاگ</a>
            <Link href='/aboutus'>درباره ما</Link>
            <Link href='/'>سیستم کسب درامد</Link>
          </div>
          <div className='flex items-center gap-4'>
            {/* <div className='relative  '>
              <input  
                type='text'
                id='voice-search'
                className='w-[352px] rounded-[18px] bg-gray-200 py-1.5 pr-10 outline-none'
                placeholder='جستجو'
              />
              <div className='pointer-events-none absolute inset-y-0  right-0 flex items-center pr-3'>
                <SearchBarSvg />
              </div>
            </div> */}
            <Combobox>
              <div className='relative mt-1'>
                <div className='relative  '>
                  <Combobox.Input
                    className='w-[352px] rounded-[18px] bg-gray-200 py-1.5 pr-10 outline-none'
                    displayValue={() => name}
                    onChange={(event) => setName(() => event.target.value)}
                    placeholder='جستجو'
                  />
                  <div className='pointer-events-none absolute inset-y-0  right-0 flex items-center pr-3'>
                    <SearchBarSvg />
                  </div>
                </div>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                  afterLeave={() => setName('')}
                >
                  <Combobox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                    {name !== '' && data.length === 0 ? (
                      <div className='relative cursor-default select-none px-4 py-2 text-gray-700'>
                        در حال یافتن محصول
                      </div>
                    ) : (
                      data.map((item: Product) => (
                        <Combobox.Option
                          key={item.id}
                          className={({active}) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? 'bg-main-red text-white' : 'text-black-items'
                            }`
                          }
                          value={item.name}
                        >
                          {({selected, active}) => (
                            <>
                              <Link
                                onClick={() => setName('')}
                                href={`/product/${item.id}`}
                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                              >
                                <span>{item.name}</span>
                              </Link>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? 'text-white' : 'text-teal-600'
                                  }`}
                                ></span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>

            <Link href='/shopingbasket'>
              <div className='contact_us  flex h-8 w-16 flex-row items-center justify-around rounded-[18px] bg-red-700'>
                {cartRow != 0 ? (
                  <div className=' flex w-6 justify-center rounded-full bg-white  text-red-700'>
                    {digitsEnToFa(cartRow)}
                  </div>
                ) : (
                  <></>
                )}
                <BucketIcon />
              </div>
            </Link>
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
            href='/shop'
            className={cn(
              pathName === '/shop'
                ? 'rounded-t-3xl border-t  border-t-[#F6622C] bg-white text-[#F6622C]'
                : 'text-black-items',
              'flex items-center gap-3 px-24 text-[14px] font-extrabold',
            )}
          >
            {pathName == '/shop' ? <StoreIcon /> : <BucketBlackIcon />}
            <span className='py-2 text-xs font-black'>فروشگاه</span>
          </Link>
          <Link
            href='/search?page=1'
            className={cn(
              pathName === '/search?page=1'
                ? 'rounded-t-3xl border-t  border-t-[#F6622C] bg-white text-[#F6622C]'
                : 'text-black-items',
              'flex items-center gap-3 px-24 text-[14px] font-extrabold',
            )}
          >
            {pathName == '/search?page=1' ? <SearchIcon /> : <SearchBarSvg />}
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
