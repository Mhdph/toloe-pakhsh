'use client';
import {ArrowDownIcon} from '@/assets/Icons';
import {Cart} from '@/entities/Cart';
import {baseUrl} from '@/lib/config';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import Loading from './Loading';
import {addCommas, digitsEnToFa, digitsFaToEn} from '@persian-tools/persian-tools';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/Accordion';
import OrdersItem from '../dashboard/OrdersItem';
import Image from 'next/image';
import {toast} from 'react-hot-toast';

type Color = 'primary' | 'delivered' | 'canceled' | 'returned';

type Props = {
  color: Color;
  className?: string;
  state: string;
  label: string;
};

function HistoryCard({color = 'primary', state = '', label = '', className, ...rest}: Props) {
  const colors = {
    primary: 'bg-[#FBF2C0] ',
    // #TODO : set color posted
    delivered: 'bg-[#C0DFFB] text-[#213664]',
    canceled: 'bg-[#C0FBD4] text-[#0F2E1A]',
    returned: 'bg-[#FCC0C0] text-[#7E0707]',
  };
  const bgColor = colors[color] ?? colors.primary;
  const classes = `px-5 rounded-xl py-1 md:text-xs ${bgColor} ${className}`;
  const token = Cookies.get('token');
  const getHistoryCardFn = async () => {
    const response = await axios.get(`${baseUrl}/cart/listUserCart?state=${state}`, {
      headers: {
        authorization: 'Bearer ' + `${token}`,
      },
    });
    return response.data;
  };
  const {data, isLoading} = useQuery({
    queryKey: ['history'],
    queryFn: getHistoryCardFn,
  });

  const handleRepeatPurchase = (productData: any) => {
    axios.post(`${baseUrl}/cart-row/addList`, productData, {
      headers: {
        authorization: 'Bearer ' + `${token}`,
      },
    });
  };

  if (isLoading) return <Loading />;
  return (
    <div>
      {data.data.map((item: Cart) => (
        <div key={item.id} className='mt-4 h-[152px] rounded-3xl bg-white px-4 shadow-ca md:h-full'>
          <div className='flex items-center justify-between pt-2'>
            <p className={classes}> {label}</p>
            <p className='text-[10px] font-normal tracking-wider text-black-items md:text-xs'>{item.faDate}</p>
          </div>
          <hr className=' my-2' />
          <div className='flex w-full items-center gap-2'>
            {item.cartRows.map((item) => (
              <div key={item.cartRowId}>
                <img src={baseUrl + item.productPicture} className='h-12 w-12' alt='mahsool' />
              </div>
            ))}
          </div>
          <div className='flex items-center justify-between pt-2'>
            <div className='flex items-center gap-1'>
              <p className='text-xs font-normal text-black-items md:text-sm'>{digitsEnToFa(item.codeCart)}</p>
              <p className='text-xs font-normal text-black-items md:text-sm'>:کدسفارش</p>
            </div>
            <div className='flex items-center gap-1'>
              <p className='text-xs font-normal text-black-items md:text-sm'>{digitsEnToFa(item.trackingCode)}</p>
              <p className='text-xs font-normal text-black-items md:text-sm'>:کد رهگیری پست</p>
            </div>
            <div className='flex items-center gap-1'>
              {' '}
              <span className='mr-1 text-xs font-normal md:text-sm'>تومان</span>
              <p className='text-base font-semibold  text-black-items md:text-xl'>
                {digitsEnToFa(addCommas(+digitsFaToEn(item.sumPrice) - +digitsFaToEn(item.sumOff)))}
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button
              onClick={() =>
                handleRepeatPurchase(
                  item.cartRows.map((cartItem) => ({
                    productId: cartItem.productId,
                    count: +digitsFaToEn(cartItem.count),
                  })),
                )
              }
              className='btn_primary px-12 py-1.5 text-xs font-extrabold text-white'
            >
              تکرار خرید
            </button>
          </div>

          <hr className=' my-2 md:my-4' />

          <Accordion type='multiple'>
            <AccordionItem className='border-none' value='item-1'>
              <AccordionTrigger></AccordionTrigger>
              <AccordionContent>
                <OrdersItem data={item} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
}

export default HistoryCard;
