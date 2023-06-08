import Myorder from '@/components/profile/Myorder';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfilePageList from '@/components/profile/ProfilePageList';
import Account from './account';

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
        <div className='flex flex-col md:col-span-3 2xl:items-center'>
          <Myorder />
          {/* <ShopingBasket /> */}
          {/* <History /> */}
          {/* <Favourite /> */}
          <Account />
        </div>
      </div>
      <div className='md:hidden'>
        <ProfilePageList />
      </div>
    </div>
  );
}

export default Profile;
