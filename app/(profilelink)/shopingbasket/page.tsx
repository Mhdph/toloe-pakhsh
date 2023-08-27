'use client';

import ShoppingCard from '@/components/ShoppingCard';
import Checkout from '@/components/shoppingBasket/Checkout';
import OffCode from '@/components/shoppingBasket/OffCode';
import BackgroundTitle from '@/components/ui/BackgroundTitle';
import useGetCart from '@/service/cart/useGetCart';
import useProductStore from '@/store/zustand';
import Cookies from 'js-cookie';
import Link from 'next/link';
import {Dialog, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/Dialog';
import {useRouter} from 'next/navigation';
import Button from '@/components/ui/Button';
import Loading from '@/components/ui/Loading';

function ShopingBasket() {
  const products = useProductStore((state) => state.products);
  const {data, isLoading} = useGetCart();
  const user = Cookies.get('token');
  const navigate = useRouter();

  const handleLoign = () => {
    navigate.push('/login');
  };

  if (isLoading) return <Loading />;
  return (
    <div>
      <>
        {user === undefined ? (
          <>
            <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
              <div className='relative mx-auto my-6 w-auto max-w-3xl'>
                {/*content*/}
                <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
                  {/*body*/}
                  <div className='relative flex-auto p-6'>
                    <p className='my-4 text-lg leading-relaxed text-slate-500'>
                      لطفا برای ادامه عملیات ابتدا وارد سیستم شوید
                    </p>
                  </div>
                  {/*footer*/}
                  <div className='flex items-center justify-center rounded-b border-t border-solid border-slate-200 p-6'>
                    <Button onClick={handleLoign}>ورود </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
          </>
        ) : (
          <div>
            {products.length > 0 || data?.data.length !== undefined ? (
              <>
                <BackgroundTitle name='سبد خرید' />
                <div className='md:flex'>
                  <div className='mt-8 flex flex-col gap-2 px-4 md:flex-1'>
                    <ShoppingCard />
                  </div>
                  <div className='md:flex md:flex-col md:gap-4'>
                    <OffCode />
                    <Checkout />
                    <div className='background-gray mb-16 h-[222px] md:rounded-3xl'>
                      <Link href='/history' className='flex flex-col  gap-6 pt-1'>
                        <p className='mt-12 text-center text-4xl font-semibold'>تکرار خرید</p>
                        <p className='text-cente text-center text-xs font-normal'>
                          شما میتوانید سفارشات پیشین خود را تکرار کنید.
                        </p>
                        <div className='flex justify-center px-4  text-white md:justify-end'>
                          <button className='btn_primary h-9 w-full text-xs font-extrabold'>تاریخچه سفارشات</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p className='mt-28 flex items-center justify-center text-center text-4xl md:mt-8'>
                سبد خرید شما خالی است
              </p>
            )}
          </div>
        )}
      </>
    </div>
  );
}

export default ShopingBasket;
