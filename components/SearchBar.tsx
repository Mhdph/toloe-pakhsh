'use client';
import {UpDownIcon} from '@/assets/Icons';
import SearchBarSvg from '@/assets/svg/SearchBarSvg';
import SearchPopOver from './search/SearchPopOver';
import React from 'react';
import axios from 'axios';
import {baseUrl} from '@/lib/config';
import useDebounce from '@/hooks/useDebounce';
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from '@/components/ui/Command';
import {Product} from '@/entities/product';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
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
          <Command>
            <CommandInput onValueChange={(e) => setName(e)} />
            <CommandList>
              <CommandGroup>
                {name !== '' ? (
                  <>
                    {data.slice(0, 5).map((item: Product) => (
                      <CommandItem onClick={() => router.push(`/product/${item.id}`)} key={item.id}>
                        <Link onClick={() => setName('')} href={`/product/${item.id}`}>
                          {item.name}
                        </Link>{' '}
                      </CommandItem>
                    ))}
                  </>
                ) : null}
              </CommandGroup>
            </CommandList>
          </Command>
          {/* <input type='text' id='voice-search' className='bg-whit w-full rounded-[18px] py-1.5 pr-10 outline-none' /> */}
          {/* <div className='pointer-events-none absolute inset-y-0 right-3 mt-3 flex items-center pr-4'>
            <SearchBarSvg />
          </div> */}
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
