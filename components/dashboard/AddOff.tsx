'use client';
import Button from '@/components/ui/Button';
import {Dialog, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/Dialog';
import {Input} from '@/components/ui/Input';
import {Label} from '@/components/ui/Label';
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/Select';
import useAddDiscount from '@/service/discount/useAddDiscount';
import {AddOffSchema} from '@/validation/off';
import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import {SubmitHandler, useForm} from 'react-hook-form';
import DatePicker from 'react-multi-date-picker';
import {z} from 'zod';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '../ui/Form';
import useGetCategories from '@/service/category/useGetCategories';

type OffSchema = z.infer<typeof AddOffSchema>;

export function AddOff() {
  let [date, setDate] = React.useState<any>();
  const form = useForm<OffSchema>({
    resolver: zodResolver(AddOffSchema),
  });
  const {data} = useGetCategories();

  const {mutate, isLoading} = useAddDiscount();

  const addDiscount: SubmitHandler<OffSchema> = (data) => {
    mutate(data, date);
  };

  console.log(data);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive'> افزودن تخفیف</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] '>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(addDiscount)}>
            <div className='flex flex-col gap-3 pt-4'>
              <FormField
                control={form.control}
                name='name'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>کد تخفیف</FormLabel>
                    <FormControl>
                      <Input placeholder='کد' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='percentage'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>درصد تخفیف</FormLabel>
                    <FormControl>
                      <Input type='number' placeholder='20' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='category'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>دسته بندی</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='انتخاب دسته بندی' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          {data?.data.map((item) => (
                            <SelectItem key={item.id} value={item.name}>
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
            </div>
            <DialogFooter className='mt-4'>
              <Button type='submit'>ذخیره تغییرات</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
