'use client';
import Button from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import {Label} from '@/components/ui/Label';
import Image from 'next/image';
import React, {SetStateAction} from 'react';
import useGetCategory from '@/service/category/useGetCategory';
import {baseUrl} from '@/lib/config';
import {CloseIcon} from '@/assets/Icons';

interface EditCategoriesProps {
  id: number;
  showModal: boolean;
  closeModal: React.Dispatch<SetStateAction<number | null>>;
}

export function EditCategories({id, showModal, closeModal}: EditCategoriesProps) {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };
  const {data} = useGetCategory(id);
  return (
    <div>
      <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
        <div className='relative mx-auto my-6 w-auto max-w-3xl rounded-md bg-white p-6'>
          <div className='cursor-pointer' onClick={() => closeModal(null)}>
            <CloseIcon />
          </div>
          <p className='mt-2 text-base font-semibold text-main-red'>ویرایش دسته بندی </p>
          <div className='grid gap-4 bg-white py-4'>
            <div className='flex flex-col items-center justify-center gap-3'>
              {selectedFile ? (
                <div>
                  <Image
                    src={selectedFile === null ? baseUrl + data?.picture : URL.createObjectURL(selectedFile)}
                    alt='Uploaded'
                    width={300}
                    height={300}
                    className='rounded-md'
                  />
                </div>
              ) : (
                <div className='h-[300px] w-[300px] rounded-md bg-gray-300'></div>
              )}
              <div className='relative mt-1'>
                <input onChange={handleFileChange} type='file' id='file-upload' className='hidden' />
                <label
                  htmlFor='file-upload'
                  className='z-20 h-full w-full cursor-pointer flex-col-reverse items-center justify-center'
                >
                  <p className='cursor-pointer rounded-3xl border border-main-red px-4 py-2 text-sm text-main-red'>
                    بارگذاری تصویر
                  </p>
                </label>
              </div>
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                نام دسته بندی
              </Label>
              <Input id='name' placeholder='نام' className='col-span-3' />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Button type='submit'>ذخیره تغییرات</Button>
          </div>
        </div>
      </div>

      <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
    </div>
  );
}
