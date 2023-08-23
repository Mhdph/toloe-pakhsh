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
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {data?.map((item) => (
          <div key={item.name} className='category_card'>
            <Link href={`/product-category/${item.name}`}>
              <Image
                height={110}
                width={110}
                src={baseUrl + item.picture}
                className='max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px] rounded-t-3xl '
                alt={item.name}
              />
              <p className='mt-2 text-center text-xs font-extrabold text-black-items'>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryList;
