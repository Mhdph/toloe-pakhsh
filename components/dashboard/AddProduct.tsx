'use client';
import useAddProduct from '@/service/product/useAddProduct';
import {zodResolver} from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';
import {Plus, Trash2} from 'lucide-react';
import {SubmitHandler, useFieldArray, useForm} from 'react-hook-form';
import {z} from 'zod';
import Button from '../ui/Button';
import {Input} from '../ui/Input';
import {Label} from '../ui/Label';
import Image from 'next/image';
import React from 'react';
import axios from 'axios';
import {baseUrl} from '@/lib/config';
import {toast} from 'react-hot-toast';
import useGetCategoriesAndChilds from '@/service/category/useGetCategoriesandChilds';
import useGetCategories from '@/service/category/useGetCategories';
import useCategoryStore from '@/store/category';

export const propertySchema = z.object({
  key: z.string(),
  value: z.string(),
});

export const formDataSchema = z.object({
  name: z.string(),
  description: z.string(),
  unit: z.string(),
  unitCount: z.string(),
  price: z.string(),
  brand: z.string(),
  off: z.number().optional(),
  categoryId: z.string(),
  properties: z
    .object({
      key: z.string(),
      value: z.string(),
    })
    .array()
    .optional(),
});

const defaultValues = {
  properties: [
    {
      key: '',
      value: '',
    },
  ],
  off: 0,
};

type formDataSchema = z.infer<typeof formDataSchema>;

function AddProduct() {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const {setTake} = useCategoryStore();

  React.useEffect(() => {
    setTake(100);
  }, []);
  const {data} = useGetCategories();

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
        Cookies.set('p-picture', res.data.data.imagePath);
      } catch (err: any) {
        toast.error(err.message);
      }
    }
  };
  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<formDataSchema>({
    resolver: zodResolver(formDataSchema),
    defaultValues,
  });
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'properties',
  });

  const {mutate} = useAddProduct();

  const onSubmit: SubmitHandler<formDataSchema> = (data) => {
    mutate({
      brand: data.brand,
      description: data.description,
      exist: true,
      name: data.name,
      picture: Cookies.get('p-picture')!,
      price: +data.price,
      unit: data.unit,
      unitCount: data.unitCount,
      properties: data.properties,
      categoryId: +data.categoryId,
    });
  };
  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
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
      <div>
        <Label>نام:</Label>
        <Input type='text' {...register('name', {required: true})} />
        {errors.name && <p>This field is required</p>}
      </div>
      <div>
        <Label>توضیحات:</Label>
        <Input type='text' {...register('description', {required: true})} />
        {errors.description && <p>This field is required</p>}
      </div>
      <div>
        <Label>واحد:</Label>
        <Input type='text' {...register('unit', {required: true})} />
        {errors.unit && <p>This field is required</p>}
      </div>
      <div>
        <Label>تعداد واحد:</Label>
        <Input type='number' {...register('unitCount', {required: true})} />
        {errors.unitCount && <p>This field is required</p>}
      </div>
      <div>
        <Label>قیمت:</Label>
        <Input type='number' {...register('price', {required: true})} />
        {errors.price && <p>This field is required</p>}
      </div>
      <div>
        <Label>تخفیف:</Label>
        <Input type='number' {...register('off', {required: true})} />
        {errors.off && <p>This field is required</p>}
      </div>
      <div>
        <Label>برند:</Label>
        <Input type='text' {...register('brand', {required: true})} />
        {errors.brand && <p>This field is required</p>}
      </div>
      <div className='flex flex-col gap-1'>
        <Label>دسته بندی:</Label>
        <select
          className='h-10 w-full rounded-md border border-input bg-transparent '
          {...register('categoryId', {required: true})}
        >
          {data?.data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        {errors.categoryId && <p>This field is required</p>}
      </div>
      <Label> ویژگی:</Label>

      {fields.map((field, index) => {
        return (
          <div key={field.id} className='flex w-full  gap-4 rounded-md border  p-4 shadow-md'>
            <Input placeholder='عنوان' {...register(`properties.${index}.key`)} name={`properties.${index}.key`} />
            <Input
              placeholder='توضیحات'
              {...register(`properties.${index}.value`)}
              name={`properties.${index}.value`}
            />
            {fields.length - 1 !== 0 ? (
              <Button type='button' onClick={() => remove(index)}>
                <Trash2 className='h-4 w-4' />
              </Button>
            ) : null}
          </div>
        );
      })}
      <Button variant='outline' type='button' onClick={() => append(defaultValues.properties[0])}>
        <Plus />
        اضافه کردن
      </Button>
      <Button className='mt-2' type='submit'>
        ثبت محصول
      </Button>
    </form>
  );
}

export default AddProduct;
