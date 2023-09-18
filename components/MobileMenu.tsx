'use client';
import {Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger} from '@/components/ui/Drawer';
import {Menu} from 'lucide-react';
import {useRouter} from 'next/navigation';

export function MobileMenu() {
  const navigate = useRouter();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className='navbar_bg_right flex items-center justify-center'>
          <Menu className='cursor-pointer text-white' />
        </div>
      </SheetTrigger>
      <SheetContent className='contact_us flex flex-col justify-center rounded-l-3xl text-center text-white'>
        <SheetClose asChild className='border-t border-t-gray-100 border-opacity-40'>
          <button onClick={() => navigate.push('/')} className='py-3 text-center text-base font-semibold' type='submit'>
            وبلاگ
          </button>
        </SheetClose>
        <SheetClose asChild className='border-y border-y-gray-100 border-opacity-40'>
          <button
            onClick={() => navigate.push('/aboutus')}
            className='py-3  text-center text-base font-semibold'
            type='submit'
          >
            درباره ما
          </button>
        </SheetClose>
        <SheetClose asChild className='border-b border-b-gray-100 border-opacity-40'>
          <button onClick={() => navigate.push('/')} className='py-3 text-center text-base font-semibold' type='submit'>
            سیستم کسب درامد
          </button>
        </SheetClose>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
