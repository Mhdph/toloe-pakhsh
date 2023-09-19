'use client';
import {AvatarBlackIcon, PhoneBlackIcon} from '@/assets/Icons';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/Accordion';
import {Form, FormControl, FormField, FormItem, FormMessage} from '@/components/ui/Form';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/Select';
import {Cart} from '@/entities/Cart';
import {baseUrl} from '@/lib/config';
import useUpdateOrder from '@/service/order/useUpdateOrder';
import {UpdateOrderSchema} from '@/validation/orders';
import {zodResolver} from '@hookform/resolvers/zod';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import {SubmitHandler, useForm} from 'react-hook-form';
import {z} from 'zod';
import {Badge} from '../ui/Badge';
import Button from '../ui/Button';
import MiddleIcon from '../ui/MiddleIcon';
import OrdersItem from './OrdersItem';
import Loading from '../ui/Loading';
import React from 'react';
import {PaginationList} from '../ui/Pagination';
import {digitsEnToFa} from '@persian-tools/persian-tools';
type UpdateOrderSchema = z.infer<typeof UpdateOrderSchema>;

type Color = 'primary' | 'delivered' | 'canceled' | 'returned';

interface Props {
  color: Color;
  className?: string;
  state: string;
  label: string;
}

function OrdersCard({color = 'primary', state = '', label = '', className, ...rest}: Props) {
  const id = '123';
  const [page, setPage] = React.useState(1);
  const {mutate} = useUpdateOrder(id);
  const form = useForm<UpdateOrderSchema>({
    resolver: zodResolver(UpdateOrderSchema),
  });
  const updateOrder: SubmitHandler<UpdateOrderSchema> = async (data) => {
    mutate({
      state: data.state,
    });
  };
  const colors = {
    primary: 'bg-[#FBF2C0] ',
    delivered: 'bg-[#C0DFFB] text-[#213664]',
    canceled: 'bg-[#C0FBD4] text-[#0F2E1A]',
    returned: 'bg-[#FCC0C0] text-[#7E0707]',
  };
  const bgColor = colors[color] ?? colors.primary;
  const classes = `text-black ${bgColor} ${className}`;
  const token = Cookies.get('token');
  const getHistoryUSerCardFn = async () => {
    const response = await axios.get(`${baseUrl}/cart/listOrderCarts?state=${state}&page=${page}`, {
      headers: {
        authorization: 'Bearer ' + `${token}`,
      },
    });
    return response.data;
  };
  const onPageChange = (page: number) => {
    setPage(page);
  };
  const {data, isLoading} = useQuery({
    queryKey: ['history', page],
    queryFn: getHistoryUSerCardFn,
  });
  console.log(data);

  if (isLoading) return <Loading />;

  return (
    <div>
      {data.data.map((item: Cart) => (
        <div key={item.id} className='rounded-xl border border-main-red px-6 text-black-items'>
          <div className='py-4'>
            <div className='flex items-center justify-between'>
              <p>{item.FaDate}</p>
              <div className='flex items-center gap-1'>
                <p>{item.codeCart}</p>
                <p>:کد سفارش</p>
              </div>
              <Badge className={classes}>{label}</Badge>
            </div>
            <hr className='my-4 border-b border-b-black-items border-opacity-10' />
            <div className='flex flex-row-reverse justify-between'>
              <div className='flex items-center gap-2'>
                <p className='text-sm'>{item.firstName + ' ' + item.lastName}</p>
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
              {item.cartRows.map((item) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={item.cartRowId}
                  src={baseUrl + item.productPicture}
                  className='h-20 w-20'
                  alt='product photo'
                />
              ))}
            </div>
            <hr className='my-4 border-b border-b-black-items border-opacity-10' />
            <Accordion type='multiple'>
              <AccordionItem className='border-none' value='item-1'>
                <AccordionTrigger>
                  {/* <p className='text-xs text-black-items md:text-sm'>تومان</p> */}
                  <p className='text-xs font-black md:text-sm'>تومان {digitsEnToFa(+item.sumPrice - +item.sumOff)}</p>
                </AccordionTrigger>
                <AccordionContent>
                  <OrdersItem data={item} />
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
      ))}
      <div className='mt-2 flex flex-row-reverse justify-center'>
        <PaginationList onPageChange={onPageChange} page={page} pageCount={data?.count} />
      </div>
    </div>
  );
}

export default OrdersCard;
