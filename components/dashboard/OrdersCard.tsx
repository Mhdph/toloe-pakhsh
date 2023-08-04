'use client';
import {AvatarBlackIcon, PhoneBlackIcon} from '@/assets/Icons';
import {Badge} from '../ui/Badge';
import MiddleIcon from '../ui/MiddleIcon';
import ProductImage from '@/assets/tempImages/Product Photo.png';
import shokolat from '@/assets/tempImages/shokolat.png';
import Image from 'next/image';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/Accordion';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/Select';
import OrdersItem from './OrdersItem';
import useUpdateOrder from '@/service/order/useUpdateOrder';
import {z} from 'zod';
import {UpdateOrderSchema} from '@/validation/orders';
import {SubmitHandler, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/Form';
import {Button} from '../ui/Button';
type UpdateOrderSchema = z.infer<typeof UpdateOrderSchema>;

function OrdersCard() {
  const id = '123';
  const {mutate} = useUpdateOrder(id);
  const form = useForm<UpdateOrderSchema>({
    resolver: zodResolver(UpdateOrderSchema),
  });
  const updateOrder: SubmitHandler<UpdateOrderSchema> = async (data) => {
    mutate({
      state: data.state,
    });
  };

  return (
    <div className='rounded-xl border border-main-red px-6 text-black-items'>
      <div className='py-4'>
        <div className='flex items-center justify-between'>
          <p>۱۴۰۲ / ۰۱ / ۲۷</p>
          <div className='flex items-center gap-1'>
            <p>۱۴۸۴۴۳۸۰۲</p>
            <p>:کد سفارش</p>
          </div>
          <Badge className='bg-[#FBF2C0] text-black'>Badge</Badge>
        </div>
        <hr className='my-4 border-b border-b-black-items border-opacity-10' />
        <div className='flex flex-row-reverse justify-between'>
          <div className='flex items-center gap-2'>
            <p className='text-sm'>نام و نام خانوادگی</p>
            <MiddleIcon>
              <AvatarBlackIcon />
            </MiddleIcon>
          </div>
          <div className='flex items-center gap-2'>
            <PhoneBlackIcon />
            <p className='text-sm font-normal'> +۹۸ ۹۲۳ ۲۵۳ ۲۹ ۱۳ </p>
          </div>
        </div>
        <hr className='my-4 border-b border-b-black-items border-opacity-10' />
        <div className='flex flex-row-reverse items-center gap-2'>
          <Image src={shokolat} className='h-20 w-20' alt='product photo' />
          <Image src={ProductImage} className='h-20 w-20' alt='product photo' />
        </div>
        <hr className='my-4 border-b border-b-black-items border-opacity-10' />
        <Accordion type='multiple'>
          <AccordionItem className='border-none' value='item-1'>
            <AccordionTrigger> تومان ۱۰۸,۰۰۰</AccordionTrigger>
            <AccordionContent>
              <OrdersItem />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <hr className='my-4 border-b border-b-black-items border-opacity-10' />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(updateOrder)} className='grid w-full grid-cols-4'>
            <div className='col-span-1 w-full'>
              <Button type='submit' className='w-40'>
                ثبت
              </Button>
            </div>

            <div className='col-span-3 w-full'>
              <FormField
                control={form.control}
                name='state'
                render={({field}) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='مشخص کردن وضعیت سفارش' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='SENDING'>در حال ارسال</SelectItem>
                        <SelectItem value='SENDED'>ارسال شده</SelectItem>
                        <SelectItem value='CLOSE'>تحویل شده</SelectItem>
                        <SelectItem value='REJECT'> لفو شده</SelectItem>
                        <SelectItem value='DECLINE'> مرجوع شده</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default OrdersCard;
