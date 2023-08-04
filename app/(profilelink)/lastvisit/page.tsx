'use client';
import {UpDownIcon} from '@/assets/Icons';
import BackgroundTitle from '@/components/ui/BackgroundTitle';
import Card from '@/components/ui/Card';
import useLastVisitProduct from '@/service/product/useLastVisitProduct';

function Latest() {
  const {data} = useLastVisitProduct();

  return (
    <div>
      <BackgroundTitle name='بازدید های اخیر ' />
      {data?.data.length !== undefined && data.data.length > 1 ? (
        data?.data.map((item) => (
          <>
            <div className='mt-6 flex items-center justify-between px-4'>
              <p className='text-xs font-normal tracking-wider text-black-items'>نمایش ۱ - ۱۶ از ۲۷۴ موارد</p>

              <div className='flex h-[30px] w-[30px] items-center justify-center rounded-full border border-black-items'>
                <div className=''>
                  <UpDownIcon />
                </div>
              </div>
            </div>
            <div className='mt-6 grid grid-cols-2 gap-8 pr-2.5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
              <Card />
            </div>
          </>
        ))
      ) : (
        <p className='mt-12 text-center md:text-4xl'>شما تاکنون محصولی را مشاهده نکرده اید </p>
      )}
    </div>
  );
}

export default Latest;
