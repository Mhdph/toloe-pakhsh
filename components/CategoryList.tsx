/* eslint-disable @next/next/no-img-element */
import {CategoryandChilds} from '@/entities/category';
import {baseUrl} from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CategoryListProps {
  data: CategoryandChilds[] | undefined;
}

const CategoryList: React.FC<CategoryListProps> = ({data}) => {
  return (
    <div className='mt-4 flex flex-col items-center justify-center'>
      <p className='mb-1 text-2xl font-normal text-black-items lg:mb-3'>دسته بندی محصولات</p>
      <div className='flex  flex-wrap items-center justify-center gap-2'>
        {data?.map((item) => (
          <div key={item.name} className='category_card h-[142px] w-[110px]  md:h-[244px] md:w-[196px] '>
            <Link href={`/product-category/${item.name}`}>
              <img
                src={baseUrl + item.picture}
                className='md:min-[196px] max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px] rounded-t-3xl md:max-h-[196px] md:min-w-[196px] md:max-w-[196px] '
                alt={item.name}
              />
              <p className='mt-2 text-center text-xs font-extrabold text-black-items md:mt-3'>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryList;
