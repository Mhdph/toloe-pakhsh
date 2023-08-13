import Myorder from '@/components/profile/MyOrder';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfilePageList from '@/components/profile/ProfilePageList';
import BackgroundTitle from '@/components/ui/BackgroundTitle';
import ShoppingCard from '@/components/ShoppingCard';
import OffCode from '@/components/shoppingBasket/OffCode';
import Checkout from '@/components/shoppingBasket/Checkout';

function Profile() {
  return (
    <div>
      <div className='flex w-full flex-col md:grid md:grid-cols-4 md:gap-6 md:rounded-3xl md:px-10'>
        <div className='col-span-1'>
          <ProfileInfo />
          <div className='hidden md:inline'>
            <ProfilePageList />
          </div>
        </div>
        <div className='flex flex-col md:col-span-3'>
          <Myorder />
          <div className='hidden md:inline'>
            <div>
              <BackgroundTitle name='سبد خرید' />
              <div className='md:flex'>
                <div className='mt-8 flex flex-col gap-2 px-4 md:flex-1'>
                  <ShoppingCard />
                </div>
                <div className='md:flex md:flex-col md:gap-4'>
                  <OffCode />
                  <Checkout />
                  <div className='background-gray mb-16 h-[222px] md:rounded-3xl'>
                    <div className='flex flex-col  gap-6 pt-1'>
                      <p className='mt-12 text-center text-4xl font-semibold'>تکرار خرید</p>
                      <p className='text-cente text-center text-xs font-normal'>
                        شما میتوانید سفارشات پیشین خود را تکرار کنید.
                      </p>
                      <div className='flex justify-center px-4  text-white md:justify-end'>
                        <button className='btn_primary h-9 w-full text-xs font-extrabold'>تاریخچه سفارشات</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{' '}
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <ProfilePageList />
      </div>
    </div>
  );
}

export default Profile;
