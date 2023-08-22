'use client';
import {AddSlider} from '@/components/dashboard/AddSlider';
import Button from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import {baseUrl} from '@/lib/config';
import useComponents from '@/service/settings/useComponents';
import useDeleteSlider from '@/service/settings/useDeleteSlider';
import useUpdateDelivery from '@/service/settings/useUpdateDelivery';
import {Label} from '@radix-ui/react-label';
import React from 'react';

function Slider() {
  const [cost, setCost] = React.useState('');
  const {mutate} = useUpdateDelivery(1);
  const updateDeliveryFee = () => {
    mutate({
      cost,
    });
  };
  const {data} = useComponents();
  const {mutate: mutateDelete} = useDeleteSlider();
  const deleteFn = (id: string | number) => {
    mutateDelete(id);
  };
  return (
    <div>
      <div className='flex h-24 items-center justify-between rounded-t-3xl bg-[#253031] px-4 text-white'>
        <p className='text-[32px]'>تنظیمات</p>
        <AddSlider />
      </div>
      <div className='my-4 flex items-center gap-2'>
        <p>هزیه پست</p>
        <Input className='w-80' onChange={(e) => setCost(e.target.value)} />
        <Button onClick={updateDeliveryFee}>به روز رسانی هزینه ارسال</Button>
      </div>
      {data?.data.map((item) => (
        <div key={item.id} className='bg-[#EAEBEB] p-4 text-black-items'>
          <div className='rounded-3xl border border-black-items border-opacity-20 bg-white px-8 py-4'>
            <div className='mb-4 flex items-center justify-between'>
              <p className='text-lg font-semibold'>اسلایدر شماره {item.id}</p>
              <Button onClick={() => deleteFn(item.id)} variant='outline'>
                حذف اسلایدر
              </Button>
            </div>
            <div className='mb-6 flex items-center justify-center'>
              <img src={baseUrl + item.picture} className='w-full' alt='' />
            </div>
            <Label>لینک</Label>
            <p className='rounded-xl border border-gray-200 p-2'>{item.url}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
