'use client';
import {CloseIcon, FilterIcon, UpDownIcon} from '@/assets/Icons';
import ContactUs from '@/components/ContactUs';
import SearchBar from '@/components/SearchBar';
import SearchAccordion from '@/components/search/SearchAccordion';
import SearchBrand from '@/components/search/SearchBrand';
import Card from '@/components/ui/Card';
import {Switch} from '@/components/ui/Switch';
import {FilterList} from '@/constant/List';
import useProducts from '@/service/product/useProducts';
import useSameProduct from '@/service/product/useSameProduct';
import useProductQueryStore from '@/store/search';
import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';
import ListItems from './ListItems';
import SameProduct from './search/SameProduct';
import Loading from './ui/Loading';
import {PaginationList} from './ui/Pagination';

function SearchPage() {
  const {setEndPrice, setOff, setExist, setStartPrice, setCategoryName, setSortName, setSkip, setDirection} =
    useProductQueryStore();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<number>(1);
  const gameQuery = useProductQueryStore((s) => s.productQuery);
  console.log(gameQuery);
  const searchParams = useParams();
  useEffect(() => {
    const search = decodeURIComponent(searchParams.category || '');
    if (search) {
      setCategoryName(search);
    }
  }, []);

  const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartPrice(event.target.value);
  };
  const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndPrice(event.target.value);
  };
  const handleOnSaleChange = (checked: boolean) => {
    setOff(checked);
  };
  const handleOnExistChange = (checked: boolean) => {
    setExist(checked);
  };
  const handleSortChange = (value: string) => {
    setSortName(value, sort);
    console.log(value);
  };

  const onPageChange = (page: number) => {
    setPage(page);
    setSkip(page * 10);
  };
  const {data, isLoading} = useProducts();
  return (
    <div>
      <SearchBar count={data?.count} />
      <div className='flex md:gap-2  md:px-10 md:pt-10 '>
        <div className='filter_bg_sidebar hidden h-[1108px] min-w-[300px] rounded-3xl bg-red-700 px-3 md:flex md:flex-col'>
          <div className='mt-4 px-4'>
            <div className='flex items-center gap-2'>
              <FilterIcon />
              <p className='text-ca font-black'> فیلتر ها</p>
            </div>
            <hr className='my-2 border-[0.5px] border-black-items border-opacity-80' />
            <SearchAccordion />
            <hr className='my-4 border-b-[0.5px] border-black-items border-opacity-30' />
            <div className='flex flex-col gap-5'>
              <div className='flex items-center justify-between'>
                <p className='text-sm font-black text-[#F13739]'>محدوده قیمت</p>
                <Switch />
              </div>
              <div className='flex items-center gap-1'>
                <p className='text-base font-bold text-[#ACACAC]'>از</p>
                <input
                  className='w-full rounded border border-[#ACACAC] py-1.5 text-right outline-none  placeholder:pr-1'
                  type='text'
                  onChange={handleStartChange}
                />
                <p className='text-base font-bold text-[#ACACAC]'>تومان</p>
              </div>
              <div className='flex items-center gap-1'>
                <p className='text-base font-bold text-[#ACACAC]'>تا</p>
                <input
                  className='w-full rounded border border-[#ACACAC] py-1.5 text-right outline-none  placeholder:pr-1'
                  type='text'
                  onChange={handleEndChange}
                />
                <p className='text-base font-bold text-[#ACACAC]'>تومان</p>
              </div>
            </div>
            <hr className='mb-3 mt-4 border-b-[0.1px] border-black-items border-opacity-10' />
            <SearchBrand />
            <hr className='mb-4 mt-1 border-b-[0.1px] border-black-items border-opacity-10' />
            <div className='flex items-center justify-between'>
              <p className='text-sm font-black text-[#F13739]'> موجود در انبار</p>
              <Switch onCheckedChange={handleOnSaleChange} />
            </div>{' '}
            <hr className='my-4 border-b-[0.1px] border-black-items border-opacity-10' />
            <div className='flex items-center justify-between'>
              <p className='text-sm font-black text-[#F13739]'> دارای تخفیف</p>
              <Switch onCheckedChange={handleOnExistChange} />
            </div>
          </div>
        </div>
        <div className=' w-full flex-col md:flex'>
          <div className='hidden justify-between md:flex'>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2'>
                <div onClick={() => setDirection(sort === 1 ? -1 : 1)}>
                  <UpDownIcon />
                </div>
                <p className='text-ca font-black'>مرتب سازی</p>
              </div>

              {FilterList.map((item) => (
                <p
                  key={item.name}
                  onClick={() => handleSortChange(item.value)}
                  className='cursor-pointer text-ca font-normal text-black-items'
                >
                  {item.name}
                </p>
              ))}
            </div>
            <div className='flex gap-6 text-ca font-normal text-black-items'>
              <p>{data?.count} نتیجه یافت شد</p>
              <p className='tracking-widest'>
                {' '}
                صفحه {page} / {data?.count! / 10}
              </p>
            </div>
          </div>
          <hr className='my-2 hidden border border-black-items border-opacity-10 md:inline' />
          <div className='flex items-center gap-2'>
            {gameQuery.categoryName !== undefined || gameQuery.categoryName !== '' ? (
              <div
                onClick={() => setCategoryName('')}
                className='filter_bg_sidebar hidden w-[120px] cursor-pointer items-center justify-center gap-3 rounded-xl  px-3 py-1.5 md:flex'
              >
                <p className='text-[10px]  font-normal text-black-items'> {gameQuery.categoryName}</p>
                <CloseIcon />
              </div>
            ) : null}

            {gameQuery.brand !== undefined ? (
              <div className='filter_bg_sidebar hidden w-[120px] cursor-pointer items-center justify-center gap-3 rounded-xl  px-3 py-1.5 md:flex'>
                <p className='text-[10px]  font-normal text-black-items'> {gameQuery.brand}</p>
                <CloseIcon />
              </div>
            ) : null}
            {gameQuery.exist ? (
              <div className='filter_bg_sidebar hidden w-[120px] cursor-pointer items-center justify-center gap-3 rounded-xl  px-3 py-1.5 md:flex'>
                <p className='text-[10px]  font-normal text-black-items'> موجود در انبار</p>
                <CloseIcon />
              </div>
            ) : null}
            {gameQuery.off ? (
              <div className='filter_bg_sidebar hidden w-[120px] cursor-pointer items-center justify-center gap-3 rounded-xl  px-3 py-1.5 md:flex'>
                <p className='text-[10px]  font-normal text-black-items'>دارای تخفیف</p>
                <CloseIcon />
              </div>
            ) : null}
            {gameQuery.startPrice !== undefined || gameQuery.endPrice !== undefined ? (
              <div className='filter_bg_sidebar hidden w-[120px] items-center justify-center gap-3 rounded-xl  px-3 py-1.5 md:flex'>
                <p className='text-[10px]  font-normal text-black-items'>قیمت</p>
                <CloseIcon />s
              </div>
            ) : null}
          </div>

          {isLoading ? (
            <Loading />
          ) : (
            <div className='mt-6 grid grid-cols-2 gap-y-2 pr-2.5 sm:grid-cols-2 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
              {data?.data.map((item) => (
                <div key={item.id}>
                  <Card data={item} />
                </div>
              ))}
            </div>
          )}
          <div className='mt-2 flex flex-row-reverse justify-center'>
            <PaginationList onPageChange={onPageChange} page={page} pageCount={data?.count} />
          </div>
        </div>
      </div>
      <hr className='divedr my-10 opacity-25' />

      <SameProduct />
      <hr className='divedr mb-4 opacity-0' />
      <ContactUs />
    </div>
  );
}

export default SearchPage;
