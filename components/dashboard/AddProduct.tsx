'use client';
import React from 'react';
import {Controller, SubmitHandler, useFieldArray, useForm} from 'react-hook-form';
import {Input} from '../ui/Input';
import {Label} from '../ui/Label';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import Button from '../ui/Button';
import {Trash2} from 'lucide-react';
import {Plus} from 'lucide-react';

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

function AddProduct() {
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

  const onSubmit: SubmitHandler<formDataSchema> = (data) => {
    // Here, you can send the data to the backend
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>Name:</Label>
        <Input type='text' {...register('name', {required: true})} />
        {errors.name && <p>This field is required</p>}
      </div>
      <div>
        <Label>Description:</Label>
        <Input type='text' {...register('description', {required: true})} />
        {errors.description && <p>This field is required</p>}
      </div>
      <div>
        <Label>Unit:</Label>
        <Input type='text' {...register('unit', {required: true})} />
        {errors.unit && <p>This field is required</p>}
      </div>
      <div>
        <Label>Unit Count:</Label>
        <Input type='number' {...register('unitCount', {required: true})} />
        {errors.unitCount && <p>This field is required</p>}
      </div>
      <div>
        <Label>Price:</Label>
        <Input type='number' {...register('price', {required: true})} />
        {errors.price && <p>This field is required</p>}
      </div>
      <div>
        <Label>Brand:</Label>
        <Input type='text' {...register('brand', {required: true})} />
        {errors.brand && <p>This field is required</p>}
      </div>
      <div>
        <Label>Category:</Label>
        <select {...register('categoryId', {required: true})}>
          <option value='1'>Category 1</option>
          <option value='2'>Category 2</option>
          <option value='3'>Category 3</option>
        </select>
        {errors.categoryId && <p>This field is required</p>}
      </div>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className='flex w-full  gap-4 rounded-md border bg-slate-50 p-4 shadow-md'>
            <Input {...register(`properties.${index}.key`)} name={`properties.${index}.key`} />
            <Input {...register(`properties.${index}.value`)} name={`properties.${index}.value`} />
            {fields.length - 1 !== 0 ? (
              <Button type='button' onClick={() => remove(index)}>
                <Trash2 className='h-4 w-4' />
              </Button>
            ) : null}
          </div>
        );
      })}
      <Button type='button' onClick={() => append(defaultValues.properties[0])}>
        <Plus />
        اضافه کردن
      </Button>
      س<button type='submit'>Submit</button>
    </form>
  );
}

export default AddProduct;
