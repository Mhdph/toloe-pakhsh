import { FilterSvg, UpDownSvg } from '@/assets/svg';
import CloseSvg from '@/assets/svg/CloseSvg';
import ContactUs from '@/components/ContactUs';
import LstItmes from '@/components/ListItmes';
import SearchBar from '@/components/SearchBar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import Card from '@/components/ui/Card';
import { Switch } from '@/components/ui/Switch';
import { FilterList } from '@/constant/List';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { useState } from 'react';
function Search() {
  const [sliderValues, setSliderValues] = useState<number | number[]>([0, 100]);

  const handleSliderChange = (values: number | number[]) => {
    setSliderValues(values);
  };

  return (
    <div>
      <SearchBar />
      <div className='flex md:gap-2  md:px-10 md:pt-10 '>
        <div className='filter_bg_sidebar hidden h-[1108px] min-w-[300px] rounded-3xl bg-red-700 px-3 md:flex md:flex-col'>
          <div className='mt-4 px-4'>
            <div className='flex items-center gap-2'>
              <FilterSvg />
              <p className='text-ca font-black'> فیلتر ها</p>
            </div>
            <hr className='my-2 border-[0.5px] border-black-items border-opacity-80' />
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-sm font-black text-[#F13739]'>دسته بندی</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <Accordion className='px-4' type='multiple'>
                      <AccordionItem value='item-1'>
                        <AccordionTrigger>شیرینی جات</AccordionTrigger>
                        <AccordionContent>
                          Yes. It comes with default styles that matches the other aesthetic.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <hr className='border-[0.5px] border-black-items border-opacity-10' />
                    <Accordion className='px-4' type='multiple'>
                      <AccordionItem value='item-2'>
                        <AccordionTrigger>شکلات</AccordionTrigger>
                        <AccordionContent>
                          Yes. Its animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                />
                <p className='text-base font-bold text-[#ACACAC]'>تومان</p>
              </div>
              <div className='flex items-center gap-1'>
                <p className='text-base font-bold text-[#ACACAC]'>از</p>
                <input
                  className='w-full rounded border border-[#ACACAC] py-1.5 text-right outline-none  placeholder:pr-1'
                  type='text'
                />
                <p className='text-base font-bold text-[#ACACAC]'>تومان</p>
              </div>
              <div className='px-10'>
                <Slider
                  range
                  reverse
                  min={0}
                  value={sliderValues}
                  max={100}
                  onChange={handleSliderChange}
                  trackStyle={{ backgroundColor: 'red' }}
                  handleStyle={{ backgroundColor: 'black', borderColor: 'black' }}
                />
              </div>
            </div>
            <hr className='mb-3 mt-4 border-b-[0.1px] border-black-items border-opacity-10' />
            <Accordion type='multiple'>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-[#253031]'> برند</AccordionTrigger>
                <AccordionContent>Yes. It comes with default styles that matches the other aesthetic.</AccordionContent>
              </AccordionItem>
            </Accordion>
            <hr className='mb-4 mt-1 border-b-[0.1px] border-black-items border-opacity-10' />
            <div className='flex items-center justify-between'>
              <p className='text-sm font-black text-[#F13739]'> موجود در انبار</p>
              <Switch />
            </div>{' '}
            <hr className='my-4 border-b-[0.1px] border-black-items border-opacity-10' />
            <div className='flex items-center justify-between'>
              <p className='text-sm font-black text-[#F13739]'> دارای تخفیف</p>
              <Switch />
            </div>
          </div>
        </div>
        <div className=' w-full flex-col justify-center md:flex'>
          <div className='hidden justify-between md:flex'>
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
          <hr className='my-2 hidden border border-black-items border-opacity-10 md:inline' />
          <div className='filter_bg_sidebar hidden w-[120px] items-center justify-center gap-3 rounded-xl  px-3 py-1.5 md:flex'>
            <p className='text-[10px]  font-normal text-black-items'>موجود در انبار</p>
            <CloseSvg />
          </div>
          <div className='mt-6 grid grid-cols-2 gap-8 pr-2.5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
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
