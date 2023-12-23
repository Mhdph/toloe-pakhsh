'use client';
import {CloseWhiteIcon, UpDownIcon} from '@/assets/Icons';
import SearchBarSvg from '@/assets/svg/SearchBarSvg';
import {Product} from '@/entities/product';
import useDebounce from '@/hooks/useDebounce';
import {baseUrl} from '@/lib/config';
import useProductQueryStore from '@/store/search';
import {Combobox, Transition} from '@headlessui/react';
import axios from 'axios';
import Link from 'next/link';
import React, {Fragment, useCallback} from 'react';
import SearchPopOver from './search/SearchPopOver';
import {usePathname, useSearchParams, useRouter} from 'next/navigation';

interface SearchBarProps {
  count: number | undefined;
  onChangePage: number | undefined;
}

function SearchBar({count, onChangePage}: SearchBarProps) {
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState('');
  const path = usePathname();
  const useSearch = useSearchParams();
  const page = onChangePage || 1;
  const gameQuery = useProductQueryStore((s) => s.productQuery);
  const {
    setEndPrice,
    setOff,
    setExist,
    setStartPrice,
    setCategoryName,
    setSortName,
    setSkip,
    setDirection,
    setBrand,
    setKeyWord,
    setQuery,
  } = useProductQueryStore();
  const debouncedValue = useDebounce(name, 1000);
  const getProduct = async () => {
    try {
      const res = await axios.get(`${baseUrl}/product?productName=${name}`);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  }, []);

  React.useEffect(() => {
    getProduct();
  }, [debouncedValue]);
  return (
    <div className='pt-16 md:hidden'>
      <div className='serach_bar h-[162px] w-full rounded-b-3xl px-4'>
        <div className='relative w-full pt-4'>
          <Combobox>
            <div className='relative mt-1'>
              <div className='relative  '>
                <Combobox.Input
                  className='w-[352px] rounded-[12px] bg-gray-200 py-1.5 pr-20 outline-none'
                  displayValue={() => name}
                  onChange={(event) => setName(() => event.target.value)}
                  placeholder='جستجو'
                />
                <div
                  className={
                    name.length === 0
                      ? 'pointer-events-none absolute inset-y-0  right-0  flex items-center    pr-3'
                      : ''
                  }
                >
                  {name.length === 0 ? (
                    <SearchBarSvg />
                  ) : (
                    <Link
                      className=' search_btn_mob  absolute inset-y-0 z-40 items-center   px-2 py-1.5 text-white'
                      href={
                        `${path}` +
                        '?' +
                        createQueryString('productName', name || '') +
                        '&' +
                        createQueryString('page', page.toString())
                      }
                      onClick={() => {
                        setQuery(name, page);
                      }}
                    >
                      جستجو
                    </Link>
                  )}
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
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <SearchPopOver />
          {/* <p className='text-xs font-normal tracking-widest text-white'>نمایش ۱ - ۱۶ از {count} نتیجه</p> */}
          <div className='flex items-center gap-2 rounded-[14px] bg-white px-3 py-1.5'>
            <UpDownIcon />
          </div>
        </div>
        <hr className='mb-2 mt-3   opacity-25' />
        {/* <div className='filter_background flex w-[90px] items-center gap-2  rounded-xl px-2 py-1'>
          <p className='text-[10px]  font-normal text-white'>موجود در انبار</p>
          <CloseWhiteIcon />
        </div> */}

        <div className='flex items-center gap-2'>
          {gameQuery.categoryName !== undefined && gameQuery.categoryName !== '' ? (
            <div
              onClick={() => setCategoryName('')}
              className='filter_background flex w-[90px] items-center gap-2  rounded-xl px-2 py-1'
            >
              <p className='text-[10px]  font-normal text-white'> {gameQuery.categoryName}</p>
              <CloseWhiteIcon />
            </div>
          ) : null}

          {gameQuery.brand !== undefined && gameQuery.brand !== '' ? (
            <div
              onClick={() => setBrand('')}
              className='filter_background flex w-[90px] items-center gap-2  rounded-xl px-2 py-1'
            >
              <p className='text-[10px]  font-normal text-white'> {gameQuery.brand}</p>
              <CloseWhiteIcon />
            </div>
          ) : null}
          {gameQuery.exist ? (
            <div
              onClick={() => setExist(false)}
              className='filter_background flex w-[90px] items-center gap-2  rounded-xl px-2 py-1'
            >
              <p className='text-[10px]  font-normal text-white'> موجود در انبار</p>
              <CloseWhiteIcon />
            </div>
          ) : null}
          {gameQuery.off ? (
            <div
              onClick={() => setOff(false)}
              className='filter_background flex w-[90px] items-center gap-2  rounded-xl px-2 py-1'
            >
              <p className='text-[10px]  font-normal text-white'>دارای تخفیف</p>
              <CloseWhiteIcon />
            </div>
          ) : null}
          {gameQuery.startPrice !== undefined && gameQuery.startPrice !== '' ? (
            <div
              onClick={() => setStartPrice('')}
              className='filter_background flex w-[90px] items-center gap-2  rounded-xl px-2 py-1'
            >
              <p className='text-[10px]  font-normal text-white'>قیمت ابتدایی</p>
              <CloseWhiteIcon />
            </div>
          ) : null}
          {gameQuery.endPrice !== undefined && gameQuery.endPrice !== '' ? (
            <div
              onClick={() => setEndPrice('')}
              className='filter_background flex w-[90px] items-center gap-2  rounded-xl px-2 py-1'
            >
              <p className='text-[10px]  font-normal text-white'>قیمت نهایی</p>
              <CloseWhiteIcon />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
