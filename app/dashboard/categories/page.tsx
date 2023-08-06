'use client';
import React from 'react';
import Image from 'next/image';
import {AddCategories} from '@/components/dashboard/AddCategories';
import {EditCategories} from '@/components/dashboard/EditCategories';
import useGetCategoriesAndChilds from '@/service/category/useGetCategoriesandChilds';
import {baseUrl} from '@/lib/config';
import Button from '@/components/ui/Button';
import {AddChildCategories} from '@/components/dashboard/AddChildCategories';
import useDeleteCategory from '@/service/category/useDeleteCategory';

function DashboardCategories() {
  const {data} = useGetCategoriesAndChilds();
  const [selectedCategory, setSelectedCategory] = React.useState<number | null>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const {mutate} = useDeleteCategory();

  const openModal = (id: number) => {
    setShowModal(true);
    setSelectedCategory(id);
  };

  const handleRemove = (id: number | string) => {
    mutate(id);
  };

  return (
    <div>
      <div className='flex h-24 items-center justify-between rounded-t-3xl bg-[#253031] px-4 text-white'>
        <p>لیست دسته بندی ها</p>
        <AddCategories />
        <AddChildCategories />
      </div>
      {data?.data.map((item) => (
        <div key={item.id} className='bg-[#EAEBEB] p-4 text-black-items'>
          <div className='grid grid-cols-3 rounded-3xl border border-black-items border-opacity-20 bg-white'>
            <div className='col-span-1 flex flex-col items-center justify-center py-3'>
              <img src={baseUrl + '/' + item.picture} alt='category photo' />
            </div>
            <div className='col-span-2 flex flex-col px-4 py-4'>
              <p className='mt-2 text-3xl'>{item.name}</p>
              <hr className='my-4 border-b border-b-black-items border-opacity-10' />
              <p className='mb-4 text-xl font-semibold'>زیر مجموعه ها</p>
              <div className='flex flex-wrap items-center gap-x-2 gap-y-6 text-sm font-extrabold'>
                {item.chailds.map((item) => (
                  <div key={item.id} className='w-2/5 rounded-lg border-b'>
                    {item.name}
                  </div>
                ))}
              </div>
              <div className='mt-6 flex justify-end'>
                <Button onClick={() => handleRemove(item.id)}>پاک کردن</Button>

                <Button onClick={() => openModal(item.id)}>ویرایش</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {selectedCategory !== null && (
        <EditCategories showModal={showModal} closeModal={setSelectedCategory} id={selectedCategory} />
      )}
    </div>
  );
}

export default DashboardCategories;
