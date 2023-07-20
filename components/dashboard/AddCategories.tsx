'use client';
import {Button} from '@/components/ui/Button';
import {Dialog, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/Dialog';
import {Input} from '@/components/ui/Input';
import {Label} from '@/components/ui/Label';
import {DialogTitle} from '@radix-ui/react-dialog';
import Image from 'next/image';
import React from 'react';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '../ui/Form';
import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {addCategorySchema} from '@/validation/category';
import useAddCategory from '@/service/category/useAddCategory';
import axios from 'axios';
import {baseUrl} from '@/lib/config';
import {toast} from 'react-hot-toast';
import Cookies from 'js-cookie';

type CategorySchema = z.infer<typeof addCategorySchema>;

export function AddCategories() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
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
        Cookies.set('picture', res.data);
      } catch (err: any) {
        toast.error(err.message);
      }
    }
  };

  const form = useForm<CategorySchema>({
    resolver: zodResolver(addCategorySchema),
  });

  const {mutate, isLoading} = useAddCategory();

  const addCategory: SubmitHandler<CategorySchema> = async (data) => {
    mutate({
      name: data.name,
      picture: Cookies.get('picture')!,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive'> افزودن دسته بندی</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogTitle className='mt-2 text-base font-semibold text-main-red'>ایجاد دسته بندی جدید</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(addCategory)} className='space-y-8'>
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
              <FormField
                control={form.control}
                name='name'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>نام دسته بندی</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button disabled={isLoading} type='submit'>
                ذخیره تغییرات
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
