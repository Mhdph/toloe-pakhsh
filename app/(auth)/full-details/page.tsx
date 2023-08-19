'use client';
import LoginLeftBg from '@/assets/svg/LoginLeftBg';
import LoginRightBg from '@/assets/svg/LoginRightBg';
import ContactUs from '@/components/ContactUs';
import {zodResolver} from '@hookform/resolvers/zod';
import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {z} from 'zod';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/Form';
import useFullDetails from '@/service/user/useFullDetails';
import {Input} from '@/components/ui/Input';
import Cookies from 'js-cookie';
import {useQuery} from '@tanstack/react-query';
import {CACHE_KEY_USER} from '@/service/constants';
import APIClient from '@/service/api-client';
import User from '@/entities/user';
import {useRouter} from 'next/navigation';

const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
});

type AdduserSchema = z.infer<typeof userSchema>;
const apiClient = new APIClient<User>('/user/get');

function FullDetails() {
  const id = Cookies.get('userId')!;
  const router = useRouter();
  const form = useForm<AdduserSchema>({
    resolver: zodResolver(userSchema),
  });

  const useUser = (slug: string) =>
    useQuery({
      queryKey: [CACHE_KEY_USER, slug],
      queryFn: () => apiClient.get(slug),
      onSuccess: (data) => {
        form.setValue('address', data?.address);
        form.setValue('firstName', data?.firstName);
        form.setValue('lastName', data?.lastName);
      },
    });
  const {data} = useUser(id);

  useEffect(() => {
    if (form.getValues('address') !== '') {
      router.push('/');
    }
  }, [data]);

  const {mutate} = useFullDetails();
  const updateUser: SubmitHandler<AdduserSchema> = async (data) => {
    mutate(data);
  };
  return (
    <div>
      <div className='h-[200px] bg-gray-200 md:hidden'></div>
      <div className='mt-14 flex flex-col text-black-items md:flex-row md:items-center md:justify-center '>
        <div className='relative right-80 hidden md:inline'>
          <LoginRightBg />
        </div>
        <div className='z-50 bg-white md:mb-4 md:h-[600px] md:min-w-[412px] md:rounded-3xl md:border md:border-[#F34535]'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(updateUser)}>
              <p className='text-center text-4xl font-semibold  md:mt-28 md:text-[32px]'>اطلاعات حساب</p>
              <p className='mt-4 text-center text-xs md:text-sm'>
                برای تکمیل اطلاعات حساب کاربری لطفا نام و آدرس خود را وارد کنید
              </p>
              <div className='mt-12 flex flex-col px-4'>
                <FormField
                  control={form.control}
                  name='firstName'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel>نام*</FormLabel>
                      <FormControl>
                        <Input placeholder={field.value} type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='lastName'
                  render={({field}) => (
                    <FormItem className='mt-2'>
                      <FormLabel>نام خانوادگی*</FormLabel>
                      <FormControl>
                        <Input placeholder={field.value} type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='address'
                  render={({field}) => (
                    <FormItem>
                      <FormLabel> آدرس*</FormLabel>
                      <FormControl>
                        <Input placeholder={field.value} type='text' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='mt-6 flex items-center gap-1'>
                  <input type='checkbox' className='rounded-2xl border-black' />
                  <p className='text-xs font-normal'>مرا به خاطر بسپار</p>
                </div>
                <div className='md:flex md:items-end md:justify-between'>
                  <div className='hidden md:inline'></div>
                  <button className='btn_primary mt-8 w-full py-3 text-xs font-extrabold text-white md:mt-3 md:w-40 md:px-6'>
                    ادامه
                  </button>
                </div>
              </div>
            </form>
          </Form>
        </div>
        <div className='relative left-80 hidden md:inline'>
          <LoginLeftBg />
        </div>
      </div>
      <div className='mt-16 hidden md:inline'>
        <ContactUs />
      </div>
    </div>
  );
}

export default FullDetails;
