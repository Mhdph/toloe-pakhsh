'use client';
import {AvatarBlackIcon, PhoneBlackIcon} from '@/assets/Icons';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/Accordion';
import {Cart} from '@/entities/Cart';
import {baseUrl} from '@/lib/config';
import useUpdateOrder from '@/service/order/useUpdateOrder';
import {UpdateOrderSchema} from '@/validation/orders';
import {digitsEnToFa} from '@persian-tools/persian-tools';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import {z} from 'zod';
import {Badge} from '../ui/Badge';
import Button from '../ui/Button';
import Loading from '../ui/Loading';
import MiddleIcon from '../ui/MiddleIcon';
import {PaginationList} from '../ui/Pagination';
import OrdersItem from './OrdersItem';
import {Input} from '../ui/Input';
type UpdateOrderSchema = z.infer<typeof UpdateOrderSchema>;

type Color = 'primary' | 'delivered' | 'canceled' | 'returned';

interface Props {
  color: Color;
  className?: string;
  state: string;
  label: string;
  keyWord: string;
}

function OrdersCard({color = 'primary', keyWord, state = '', label = '', className, ...rest}: Props) {
  const [page, setPage] = React.useState(1);
  const [status, setStatus] = React.useState('');
  const [trackingCode, setTrackingCode] = React.useState('');
  const [description, setDescription] = React.useState('');

  const {mutate} = useUpdateOrder();

  const updateOrder = (id: number) => {
    console.log(status);
    const updatedCart = {
      state: status,
      description,
      trackingCode: trackingCode,
    };

    mutate({id, data: updatedCart});
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
    const response = await axios.get(`${baseUrl}/cart/listOrderCarts?state=${state}&page=${page}&codeCart=${keyWord}`, {
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
    queryKey: ['history', page, keyWord],
    queryFn: getHistoryUSerCardFn,
  });

  if (isLoading) return <Loading />;

  return (
    <div>
      {data.data.map((item: Cart) => (
        <div key={item.id} className='rounded-xl border border-main-red px-6 text-black-items'>
          <div className='py-4'>
            <div className='flex items-center justify-between'>
              <p>{item.FaDate}</p>
              <div className='flex items-center gap-1'>
                <p>{digitsEnToFa(item.codeCart)}</p>
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
                <p className='text-sm font-normal'> {item.phone} </p>
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
            <div className='grid w-full grid-cols-4'>
              <div className='col-span-1 w-full'>
                <Button onClick={() => updateOrder(item.id)} type='submit' className='w-40'>
                  ثبت
                </Button>
              </div>
              <div className='col-span-3 flex w-full items-end gap-2'>
                <Input
                  defaultValue={item.description}
                  onChange={(e) => setDescription(e.target.value)}
                  className='text-right placeholder:text-right'
                  placeholder='توضیحات'
                />
                <p>:توضیحات</p>
              </div>
              <div className='col-span-4 mt-2 flex  w-full  items-center gap-4'>
                <Input
                  defaultValue={digitsEnToFa(item.trackingCode)}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  className='text-right placeholder:text-right'
                  placeholder='کد رهگیری پستی'
                />
                <div className='w-1/4'>:کد رهگیری</div>

                <select
                  onChange={(e) => {
                    setStatus(e.target.value);
                    if (description == '') {
                      setDescription(item.description);
                    }
                    if (trackingCode === '') {
                      setTrackingCode(item.trackingCode);
                    }
                  }}
                  className='h-10 w-1/2 rounded-md border border-input bg-transparent text-right '
                >
                  <option value='sending'>در حال ارسال</option>
                  <option value='posted'>ارسال شده</option>
                  <option value='delivered'>تحویل شده</option>
                  <option value='canceled'> لفو شده</option>
                  <option value='returned'> مرجوع شده</option>
                </select>
              </div>
            </div>
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
