import {UpDownIcon} from '@/assets/Icons';
import BackgroundTitle from '@/components/ui/BackgroundTitle';
import Card from '@/components/ui/Card';

function Favourite() {
  return (
    <div>
      <BackgroundTitle name='موارد دلخواه' />
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
        <Card />
        <Card /> <Card /> <Card /> <Card />
      </div>
    </div>
  );
}

export default Favourite;
