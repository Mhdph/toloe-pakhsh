'use client';
import SearchBarSvg from '@/assets/svg/SearchBarSvg';
import AddProduct from '@/components/dashboard/AddProduct';
import DashboardProductCard from '@/components/dashboard/DashboardProductCard';
import Button from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import {PaginationList} from '@/components/ui/Pagination';
import useProducts from '@/service/product/useProducts';
import useProductQueryStore from '@/store/search';
import React from 'react';

function Products() {
  const {data} = useProducts();
  const [page, setPage] = React.useState(1);
  const {setSkip, setKeyWord} = useProductQueryStore();

  const onPageChange = (page: number) => {
    setPage(page);
    setSkip(page * 10);
  };
  return (
    <div>
      <div className='flex items-center gap-3'>
        <div className='relative w-full '>
          <Input
            onChange={(e) => setKeyWord(e.target.value)}
            className='rounded-[18px] bg-gray-200 py-1.5 pr-10'
            placeholder='جست و جو محصول'
          />
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 outline-none'>
            <SearchBarSvg />
          </div>
        </div>
        <Button className='w-48'> جست و جو</Button>
      </div>
      <hr className='my-5 border border-main-red opacity-60' />
      <div className='grid grid-cols-4'>
        <div className=' col-span-3 flex flex-col items-center'>
          <div className='flex flex-wrap items-center gap-2'>
            {data?.data.map((item) => (
              <div key={item.id}>
                <DashboardProductCard data={item} />
              </div>
            ))}
          </div>
          <div className='mt-2 flex flex-row-reverse justify-center'>
            <PaginationList onPageChange={onPageChange} page={page} pageCount={data?.count} />
          </div>
        </div>
        <div className='col-span-1'>
          <AddProduct />
        </div>
      </div>
    </div>
  );
}

export default Products;
