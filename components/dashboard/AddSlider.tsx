'use client';
import Button from '@/components/ui/Button';
import {Dialog, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/Dialog';
import {Input} from '@/components/ui/Input';
import {baseUrl} from '@/lib/config';
import {DialogTitle} from '@radix-ui/react-dialog';
import axios from 'axios';
import Cookies from 'js-cookie';
import Image from 'next/image';
import React from 'react';
import {toast} from 'react-hot-toast';
import useAddSlider from '@/service/settings/useAddSlider';
import {Label} from '../ui/Label';

export function AddSlider() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [url, setUrl] = React.useState('');
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
        Cookies.set('slider-pic', res.data.data.imagePath);
      } catch (err: any) {
        toast.error(err.message);
      }
    }
  };

  const {mutate, isLoading} = useAddSlider();

  const addCategory = () => {
    mutate({
      url,
      picture: Cookies.get('slider-pic')!,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive'> افزودن اسلایدر</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogTitle className='mt-2 text-base font-semibold text-main-red'>ایجاد دسته بندی جدید</DialogTitle>
        <div className='grid gap-4 py-4'>
          <div className='flex flex-col items-center justify-center gap-3'>
            {selectedFile ? (
              <div>
                <Image
                  src={URL.createObjectURL(selectedFile)}
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
        </div>
        <Label></Label>
        <Input onChange={(e) => setUrl(e.target.value)} />
        <DialogFooter>
          <Button onClick={addCategory} disabled={isLoading} type='submit'>
            ذخیره تغییرات
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
