/* eslint-disable @next/next/no-img-element */
'use client';
import {CloseIcon} from '@/assets/Icons';
import Button from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import {Label} from '@/components/ui/Label';
import {baseUrl} from '@/lib/config';
import useGetCategory from '@/service/category/useGetCategory';
import useUpdateCategory from '@/service/category/useUpdateCategory';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, {SetStateAction} from 'react';
import {toast} from 'react-hot-toast';

interface EditCategoriesProps {
  id: number;
  showModal: boolean;
  closeModal: React.Dispatch<SetStateAction<number | null>>;
}

export interface UpdateCategory {
  name: string;
  picture?: string;
  englishName: string;
}

export function EditCategories({id, showModal, closeModal}: EditCategoriesProps) {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [name, setName] = React.useState('');
  const [englishName, setenglishName] = React.useState('');

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    if (file) {
      const token = Cookies.get('token');
      const formData = new FormData();
      formData.append('file', file);
      try {
        const res = await axios.post(`${baseUrl}/upload`, formData, {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        Cookies.set('picture', res.data.data.imagePath);
      } catch (err: any) {
        toast.error(err.message);
      }
    }
  };
  const {data} = useGetCategory(id);

  const {mutate} = useUpdateCategory();

  const updateCategory = () => {
    if (selectedFile === null) {
      const updateCat: UpdateCategory = {
        name,
        englishName,
      };
      mutate({
        id,
        data: updateCat,
      });
    } else {
      const updateCat: UpdateCategory = {
        picture: Cookies.get('picture')!,
        name,
        englishName,
      };
      mutate({
        id,
        data: updateCat,
      });
    }
  };
  console.log(data?.data.picture);

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
                  <img
                    src={selectedFile === null ? baseUrl + data?.data.picture : URL.createObjectURL(selectedFile)}
                    alt='Uploaded'
                    className='h-[300px] w-[300px] rounded-md'
                  />
                </div>
              ) : (
                <img src={baseUrl + data?.data.picture} alt='Uploaded' className='h-[300px] w-[300px] rounded-md' />
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
            <div className='flex flex-col gap-2'>
              <Label htmlFor='name' className='text-right'>
                نام دسته بندی
              </Label>
              <Input id='name' onChange={(e) => setName(e.target.value)} className='col-span-3' />
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='name' className='text-right'>
                نام انگلیسی دسته بندی
              </Label>
              <Input id='name' onChange={(e) => setenglishName(e.target.value)} className='col-span-3' />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Button onClick={updateCategory} type='submit'>
              ذخیره تغییرات
            </Button>
          </div>
        </div>
      </div>

      <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
    </div>
  );
}
