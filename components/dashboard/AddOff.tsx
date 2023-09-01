'use client';
import Button from '@/components/ui/Button';
import {Dialog, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/Dialog';
import {Input} from '@/components/ui/Input';
import {Label} from '@/components/ui/Label';
import useAddDiscount from '@/service/discount/useAddDiscount';
import {AddOffSchema} from '@/validation/off';
import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import {SubmitHandler, useForm} from 'react-hook-form';
import DatePicker from 'react-multi-date-picker';
import {z} from 'zod';
import useGetCategories from '@/service/category/useGetCategories';
import {persianNumeralToNumber} from '@/helpers/PersianToEnglish';

type OffSchema = z.infer<typeof AddOffSchema>;

export function AddOff() {
  const [open, setOpen] = React.useState(false);
  let [date, setDate] = React.useState<any>();
  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<OffSchema>({
    resolver: zodResolver(AddOffSchema),
  });
  const {data} = useGetCategories();

  const {mutate, isLoading} = useAddDiscount();

  const addDiscount: SubmitHandler<OffSchema> = (data) => {
    mutate({
      categoryId: data.category,
      expireTime: persianNumeralToNumber(date.toString()).toString(),
      name: data.name,
      code: data.password,
      percentage: data.percentage,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='destructive'> افزودن تخفیف</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] '>
        <form className='mt-2 flex flex-col gap-3' onSubmit={handleSubmit(addDiscount)}>
          <div className='flex flex-col gap-1'>
            <Label>نام:</Label>
            <Input type='text' {...register('name')} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className='flex flex-col gap-1'>
            <Label>درصد:</Label>
            <Input type='number' placeholder='20' {...register('percentage', {valueAsNumber: true})} />
            {errors.percentage && <p>{errors.percentage.message}</p>}
          </div>
          <div className='flex flex-col gap-1'>
            <Label>کد تخفیف:</Label>
            <Input type='text' {...register('password')} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className='flex flex-col gap-1'>
            <Label>دسته بندی:</Label>
            <select
              className='flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              {...register('category')}
            >
              <option value='all'>تمام محصولات</option>
              {data?.data.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            {errors.category && <p>{errors.category.message}</p>}
          </div>
          <div className='flex flex-col gap-1'>
            <Label>تاریخ انقضا</Label>
            <DatePicker
              className='font-Yekan'
              inputClass='bg-background flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              calendar={persian}
              onChange={setDate}
              locale={persian_fa}
            />
          </div>
          <DialogFooter className='mt-4'>
            <Button isLoading={isLoading} type='submit'>
              ذخیره تغییرات
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
