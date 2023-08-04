import React from 'react';
import {Textarea} from './ui/TextArea';
import Button from './ui/Button';

function Comments() {
  return (
    <div className=''>
      <div className='pl-8 pr-2'>
        <Textarea className='w-full' />
        <Button className='mt-4 w-28 rounded-md'>ثبت</Button>
      </div>
      <div className='mt-6 flex flex-col gap-y-3 border-b border-black border-opacity-10 px-2'>
        <div className='flex flex-row-reverse items-center gap-2'>
          <img src='' alt='' className='h-9 w-9 rounded-full' />
          <p className='text-sm'>مهدی پریوش</p>
          <p className='text-xs text-slate-500'>دو هفته پیش</p>
        </div>
        <p className='flex flex-row-reverse text-sm text-black-items'>
          لورم یاسنگسنمتبسن سنبس گسن س منصضثگضن زضنثمض زن گضثننش ثضنثم ضنصثنضث ن نضصثمضنثنضمث{' '}
        </p>
      </div>
    </div>
  );
}

export default Comments;
