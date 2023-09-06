import {MenuIcon} from '@/assets/Icons';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/Drawer';
import {Menu} from 'lucide-react';
import Link from 'next/link';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className='navbar_bg_right flex items-center justify-center'>
          <Menu className='cursor-pointer text-white' />
        </div>
      </SheetTrigger>
      <SheetContent className='contact_us flex flex-col justify-center rounded-l-3xl text-center text-white'>
        <div className='border-t border-t-gray-100 border-opacity-40'>
          <div className='pt-3'>
            <Link href='' className='text-center text-base font-semibold'>
              وبلاگ
            </Link>
          </div>
        </div>
        <div className='border-y border-y-gray-100 border-opacity-40'>
          <div className='py-3'>
            <Link href='/aboutus' className='py-3 text-center text-base font-semibold'>
              درباره ما
            </Link>
          </div>
        </div>
        <div className='border-b border-b-gray-100 border-opacity-40'>
          <div className='pb-3'>
            <Link href='' className='py-3 text-center text-base font-semibold'>
              سیستم کسب درامد
            </Link>
          </div>
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
