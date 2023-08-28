'use client';
import React from 'react';
import UserCard from '@/components/dashboard/UserCard';
import SearchBarSvg from '@/assets/svg/SearchBarSvg';
import Button from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import {useQuery} from '@tanstack/react-query';
import useUserSerachStore from '@/store/userSerach';

function Users() {
  const {setKeyWord} = useUserSerachStore();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(event.target.value);
  };

  return (
    <div>
      <div className='flex items-center gap-3'>
        <div className='relative w-full '>
          <Input
            onChange={handleNameChange}
            className='rounded-[18px] bg-gray-200 py-1.5 pr-10'
            placeholder=' نام یا شماره همراه'
          />
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 outline-none'>
            <SearchBarSvg />
          </div>
        </div>
      </div>
      <hr className='my-5 border border-main-red opacity-40' />
      <UserCard />
    </div>
  );
}

export default Users;
