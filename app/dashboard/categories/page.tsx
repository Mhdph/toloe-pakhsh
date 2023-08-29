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
import DeleteModal from '@/components/dashboard/DeleteModal';
import useDeleteChildCategory from '@/service/category/useDeleteChildCategory';
import {CloseIcon} from '@/assets/Icons';

function DashboardCategories() {
  const {data} = useGetCategoriesAndChilds();
  const [selectedCategory, setSelectedCategory] = React.useState<number | null>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const {mutate} = useDeleteCategory();
  const {mutate: deleteChild} = useDeleteChildCategory();
  const openModal = (id: number) => {
    setShowModal(true);
    setSelectedCategory(id);
  };

  const handleRemove = (id: number | string) => {
    mutate(id);
  };

  const handleRemoveChild = (id: number, parentId: number) => {
    deleteChild({
      chaildCategoryId: id,
      parentCategoryId: parentId,
    });
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
              <img src={baseUrl + item.picture} alt='category photo' className='h-[220px] w-[220px]' />
            </div>
            <div className='col-span-2 flex flex-col px-4 py-4'>
              <p className='mt-2 text-3xl'>{item.name}</p>
              <hr className='my-4 border-b border-b-black-items border-opacity-10' />
              <p className='mb-4 text-xl font-semibold'>زیر مجموعه ها</p>
              <div className='flex flex-wrap items-center gap-x-2 gap-y-6 text-sm font-extrabold'>
                {item.chailds.map((child) => (
                  <div key={child.id} className='flex w-2/5 items-center gap-1 rounded-lg border-b'>
                    {child.name}
                    {/* <DeleteModal deleteFn={() => handleRemoveChild(child.id, item.id)} /> */}
                    <div onClick={() => handleRemoveChild(child.id, item.id)}>
                      <CloseIcon />
                    </div>
                  </div>
                ))}
              </div>
              <div className='mt-6 flex justify-end gap-3'>
                <DeleteModal deleteFn={() => handleRemove(item.id)} />
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
