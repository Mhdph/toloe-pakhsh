'use client';
import Button from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import {Product} from '@/entities/product';
import {baseUrl} from '@/lib/config';
import APIClient from '@/service/api-client';
import useGetCategoriesAndChilds from '@/service/category/useGetCategoriesandChilds';
import {CACHE_KEY_PRODUCT} from '@/service/constants';
import useUpdateProduct from '@/service/product/useUpdateProduct';
import {zodResolver} from '@hookform/resolvers/zod';
import {Label} from '@radix-ui/react-label';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import {Plus, Trash2} from 'lucide-react';
import Image from 'next/image';
import {useParams} from 'next/navigation';
import React from 'react';
import {SubmitHandler, useFieldArray, useForm} from 'react-hook-form';
import {toast} from 'react-hot-toast';
import {z} from 'zod';
const apiClient = new APIClient<Product>('/product/getbyid');

export const formDataSchema = z.object({
  name: z.string(),
  description: z.string(),
  unit: z.string(),
  unitCount: z.string(),
  price: z.string(),
  brand: z.string(),
  categoryId: z.string(),
  properties: z
    .object({
      key: z.string(),
      value: z.string(),
    })
    .array(),
});

const defaultValues = {
  properties: [
    {
      key: '',
      value: '',
    },
  ],
};

type formDataSchema = z.infer<typeof formDataSchema>;

function SingleProduct() {
  const {id} = useParams();
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const {data: categortData} = useGetCategoriesAndChilds();
  const newId = +id;
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<formDataSchema>({
    resolver: zodResolver(formDataSchema),
    defaultValues,
  });
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'properties',
  });

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

  const useProduct = (slug: number) =>
    useQuery({
      queryKey: [CACHE_KEY_PRODUCT],
      queryFn: () => apiClient.get(slug),
      onSuccess(data) {
        setValue('brand', data.brand);
        setValue('description', data.description);
        setValue('unitCount', data.unitCount);
        setValue('name', data.name);
        setValue('price', data.price.toString());
        setValue('unit', data.unit);
        Cookies.set('p-picture', data.picture);
      },
    });

  const {data} = useProduct(+id);
  const {mutate} = useUpdateProduct();

  const onSubmit: SubmitHandler<formDataSchema> = (data) => {
    const updatedCart: any = {
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
    };
    mutate({id: newId, data: updatedCart});
  };

  return (
    <div className='py-4'>
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
            {categortData?.data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.categoryId && <p>This field is required</p>}
        </div>
        <Label> توضیحات:</Label>

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
    </div>
  );
}

export default SingleProduct;