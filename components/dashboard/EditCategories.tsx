'use client';
import {Button} from '@/components/ui/Button';
import {Dialog, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/Dialog';
import {Input} from '@/components/ui/Input';
import {Label} from '@/components/ui/Label';
import {DialogTitle} from '@radix-ui/react-dialog';
import Image from 'next/image';
import React from 'react';
import DeleteModal from './DeleteModal';

export function AddCategories() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null); // Provide a default value of null if file is undefined
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-40'> ویرایش </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogTitle className='mt-2 text-base font-semibold text-main-red'>ویرایش دسته بندی </DialogTitle>
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
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              نام دسته بندی
            </Label>
            <Input id='name' placeholder='نام' className='col-span-3' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>ذخیره تغییرات</Button>
          <DeleteModal handleRemove={() => console.log('hi')} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
