'use client';
import Button from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import useUpdateDelivery from '@/service/settings/useUpdateDelivery';
import React from 'react';

function Slider() {
  const [cost, setCost] = React.useState('');
  const {mutate} = useUpdateDelivery(1);
  const updateDeliveryFee = () => {
    mutate({
      cost,
    });
  };
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p>هزیه پست</p>
        <div className='flex items-center gap-1'>
          <Input onChange={(e) => setCost(e.target.value)} />
          <Button onClick={updateDeliveryFee}>به روز رسانی هزینه ارسال</Button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
