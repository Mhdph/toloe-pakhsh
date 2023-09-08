'use client';
import {UpDownIcon} from '@/assets/Icons';
import SearchBarSvg from '@/assets/svg/SearchBarSvg';
import SearchPopOver from './search/SearchPopOver';
import React, {Fragment} from 'react';
import axios from 'axios';
import {baseUrl} from '@/lib/config';
import useDebounce from '@/hooks/useDebounce';
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from '@/components/ui/Command';
import {Product} from '@/entities/product';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import {Combobox, Transition} from '@headlessui/react';
interface SearchBarProps {
  count: number | undefined;
}

function SearchBar({count}: SearchBarProps) {
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState('');
  const router = useRouter();
  const debouncedValue = useDebounce(name, 3000);
  const getProduct = async () => {
    try {
      const res = await axios.get(`${baseUrl}/product?productName=${name}`);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getProduct();
  }, [debouncedValue]);
  return (
    <div className='pt-16 md:hidden'>
      <div className='serach_bar h-[142px] w-full rounded-b-3xl px-4'>
        <div className='relative w-full pt-4'>
          <Combobox>
            <div className='relative mt-1'>
              <div className='relative  '>
                <Combobox.Input
                  className='w-[352px] rounded-[12px] bg-gray-200 py-1.5 pr-10 outline-none'
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
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <SearchPopOver />
          {/* <p className='text-xs font-normal tracking-widest text-white'>نمایش ۱ - ۱۶ از {count} نتیجه</p> */}
          <div className='flex items-center gap-2 rounded-[14px] bg-white px-3 py-1.5'>
            <UpDownIcon />
          </div>
        </div>
        {/* <hr className='mb-2 mt-3   opacity-25' />
        <div className='filter_background flex w-[90px] items-center gap-2  rounded-xl px-2 py-1'>
          <p className='text-[10px]  font-normal text-white'>موجود در انبار</p>
          <CloseWhiteIcon />
        </div> */}
      </div>
    </div>
  );
}

export default SearchBar;
