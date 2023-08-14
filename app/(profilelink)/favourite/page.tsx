'use client';
import {UpDownIcon} from '@/assets/Icons';
import BackgroundTitle from '@/components/ui/BackgroundTitle';
import Card from '@/components/ui/Card';
import useFavoriteProduct from '@/service/product/useFavoriteProduct';

function Favourite() {
  const {data} = useFavoriteProduct();
  return (
    <div>
      <BackgroundTitle name='موارد دلخواه' />
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
              {data?.data.map((item) => (
                <div key={item.id}>
                  <Card data={item} />
                </div>
              ))}{' '}
            </div>
          </>
        ))
      ) : (
        <p className='mt-12 text-center md:text-4xl'>شما تاکنون محصولی را به عناوین مورد علاقه اضافه نکرده اید</p>
      )}
    </div>
  );
}

export default Favourite;
