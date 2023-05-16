import { FilterSvg, UpDownSvg } from '@/assets/svg';
import CloseSvg from '@/assets/svg/CloseSvg';
import ContactUs from '@/components/ContactUs';
import LstItmes from '@/components/LstItmes';
import SearchBar from '@/components/SearchBar';
import Card from '@/components/ui/Card';
import { FilterList } from '@/constant/List';

function Search() {
  return (
    <div>
      <SearchBar />
      <div className='flex md:gap-2 md:px-10 md:pt-10 '>
        <div className='filter_bg_sidebar hidden h-screen w-[300px] rounded-3xl bg-red-700 md:flex md:flex-col'>
          <div className='mt-4 px-4'>
            <div className='flex items-center gap-2'>
              <FilterSvg />
              <p className='text-ca font-black'> فیلتر ها</p>
            </div>
            <hr className='my-2 border-[0.5px] border-black-items border-opacity-80' />
          </div>
        </div>
        <div className=' flex-col md:flex'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2'>
                <UpDownSvg />
                <p className='text-ca font-black'>مرتب سازی</p>
              </div>

              {FilterList.map((item) => (
                <p key={item} className='text-ca font-normal text-black-items'>
                  {item}
                </p>
              ))}
            </div>
            <div className='flex gap-6 text-ca font-normal text-black-items'>
              <p>۲۷۴ نتیجه یافت شد</p>
              <p className='tracking-widest'> صفحه ۱ / ۱۶</p>
            </div>
          </div>
          <hr className='my-2 border border-black-items border-opacity-10' />
          <div className='filter_bg_sidebar flex w-[120px] items-center justify-center gap-3  rounded-xl px-3 py-1.5'>
            <p className='text-[10px]  font-normal text-black-items'>موجود در انبار</p>
            <CloseSvg />
          </div>
          <div className='mt-6 flex min-w-[390px] max-w-[390px] flex-wrap justify-center gap-2 px-2 md:mt-3 md:h-screen md:max-w-full md:flex-nowrap md:justify-normal md:gap-6'>
            <Card />
            <Card />
            <Card /> <Card />
          </div>
        </div>
      </div>
      <hr className='divedr my-10 opacity-25' />
      <LstItmes title='محصولات مشابه' />
      <hr className='divedr mb-10 opacity-25' />
      <LstItmes title='محصولات پیشنهادی' />
      <hr className='divedr mb-4 opacity-0' />
      <ContactUs />
    </div>
  );
}

export default Search;
