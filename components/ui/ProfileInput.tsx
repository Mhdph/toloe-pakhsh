import { EditSvg } from '@/assets/svg';
import React from 'react';

type Props = {
  label: string;
  placeholder: string;
};

function ProfileInput({ label, placeholder }: Props) {
  return (
    <div className='md:w-[304px]'>
      <label className='mb-1 text-xs font-black' htmlFor=''>
        {label}
      </label>
      <div className='relative'>
        <div className='absolute left-2 top-2 pr-3'>
          <EditSvg />
        </div>
        <input
          className='w-full rounded border border-gray-300 py-1.5 text-right outline-none placeholder:pr-1'
          type='text'
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default ProfileInput;
