'use client';
import {EditIcon} from '@/assets/Icons';
import {ProfilePicSvg} from '@/assets/svg';
import BackgroundTitle from '@/components/ui/BackgroundTitle';
import Button from '@/components/ui/Button';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/Form';
import {Input} from '@/components/ui/Input';
import User from '@/entities/user';
import APIClient from '@/service/api-client';
import {CACHE_KEY_USER} from '@/service/constants';
import useUpdateUser from '@/service/user/useUpdateUser';
import {userSchema} from '@/validation/user';
import {zodResolver} from '@hookform/resolvers/zod';
import {useQuery} from '@tanstack/react-query';
import Cookies from 'js-cookie';
import {SubmitHandler, useForm} from 'react-hook-form';

const apiClient = new APIClient<User>('/user/get');

function Account() {
  const id = Cookies.get('userId')!;
  const form = useForm();
  const {mutate} = useUpdateUser();
  const updateUser: SubmitHandler<any> = async (data) => {
    mutate(data);
  };
  const useUser = (slug: string) =>
    useQuery({
      queryKey: [CACHE_KEY_USER, slug],
      queryFn: () => apiClient.get(slug),
      onSuccess: (data) => {
        form.setValue('address', data?.address);
        form.setValue('firstName', data?.firstName);
        form.setValue('birthDate', data?.birthDate ? data.birthDate.substring(0, 10) : data.birthDate);
        form.setValue('email', data?.email);
        form.setValue('lastName', data?.lastName);
        form.setValue('nationalCode', data?.nationalCode);
        form.setValue('phone', data?.phone);
        form.setValue('zipCode', data?.zipCode);
        form.setValue('city', data?.city);
      },
    });
  const {data} = useUser(id);
  return (
    <div className='mb-20'>
      <BackgroundTitle name='اطلاعات حساب کاربری' />
      <div className='mt-10 flex items-center justify-center md:hidden'>
        <ProfilePicSvg />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(updateUser)} className='mt-7 flex flex-col gap-6 px-4'>
          <div className='flex flex-col items-center gap-6 md:flex-row md:gap-12'>
            <FormField
              control={form.control}
              name='firstName'
              render={({field}) => (
                <FormItem>
                  <FormLabel>نام</FormLabel>
                  <FormControl>
                    <div className='md:w-[304px]'>
                      <div className='relative'>
                        <div className='absolute left-2 top-2 pr-3'>
                          <EditIcon />
                        </div>
                        <Input placeholder={field.value} type='text' {...field} />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({field}) => (
                <FormItem>
                  <FormLabel>نام خانوادگی </FormLabel>
                  <FormControl>
                    <div className='md:w-[304px]'>
                      <div className='relative'>
                        <div className='absolute left-2 top-2 pr-3'>
                          <EditIcon />
                        </div>
                        <Input placeholder={field.value} type='text' {...field} />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='birthDate'
              render={({field}) => (
                <FormItem>
                  <FormLabel>تاریخ تولد </FormLabel>
                  <FormControl>
                    <div className='md:w-[304px]'>
                      <div className='relative'>
                        <div className='absolute left-2 top-2 pr-3'>
                          <EditIcon />
                        </div>
                        <Input placeholder={field.value} type='text' {...field} />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <hr className='my-6 border opacity-50' />
          <div className='flex flex-col items-center gap-6 md:flex-row md:gap-12'>
            <FormField
              control={form.control}
              name='phone'
              render={({field}) => (
                <FormItem>
                  <FormLabel>شماره تلفن</FormLabel>
                  <FormControl>
                    <div className='md:w-[304px]'>
                      <div className='relative'>
                        <div className='absolute left-2 top-2 pr-3'>
                          <EditIcon />
                        </div>
                        <Input placeholder={field.value} type='text' {...field} />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='nationalCode'
              render={({field}) => (
                <FormItem>
                  <FormLabel>کد ملی</FormLabel>
                  <FormControl>
                    <div className='md:w-[304px]'>
                      <div className='relative'>
                        <div className='absolute left-2 top-2 pr-3'>
                          <EditIcon />
                        </div>
                        <Input placeholder={field.value} type='text' {...field} />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({field}) => (
                <FormItem>
                  <FormLabel>ایمیل</FormLabel>
                  <FormControl>
                    <div className='md:w-[304px]'>
                      <div className='relative'>
                        <div className='absolute left-2 top-2 pr-3'>
                          <EditIcon />
                        </div>
                        <Input placeholder={field.value} type='text' {...field} />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <hr className='my-6 border opacity-50' />
          <div className='flex flex-col gap-6 md:flex-row md:gap-12'>
            <div className='flex flex-col items-center gap-6 md:flex-row md:gap-12'>
              <FormField
                control={form.control}
                name='city'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>نام شهر</FormLabel>
                    <FormControl>
                      <div className='md:w-[304px]'>
                        <div className='relative'>
                          <div className='absolute left-2 top-2 pr-3'>
                            <EditIcon />
                          </div>
                          <Input placeholder={field.value} type='text' {...field} />
                        </div>
                      </div>
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
                    <FormLabel> آدرس</FormLabel>
                    <FormControl>
                      <div className='md:w-[304px]'>
                        <div className='relative'>
                          <div className='absolute left-2 top-2 pr-3'>
                            <EditIcon />
                          </div>
                          <Input placeholder={field.value} type='text' {...field} />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='zipCode'
                render={({field}) => (
                  <FormItem>
                    <FormLabel>کد پستی</FormLabel>
                    <FormControl>
                      <div className='md:w-[304px]'>
                        <div className='relative'>
                          <div className='absolute left-2 top-2 pr-3'>
                            <EditIcon />
                          </div>
                          <Input placeholder={field.value} type='text' {...field} />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className='md:flex md:justify-end'>
            <Button>ثبت اطلاعات</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Account;
