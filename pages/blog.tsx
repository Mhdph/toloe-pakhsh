import Navbar from '@/components/Navbar';
import BlogCard from '@/components/ui/BlogCard';
import React from 'react';
import Logo from '@/assets/images/Logo.png';
import Image from 'next/image';

function blog() {
  return (
    <div>
      <div className='pt-[74px]'>
        <div className='serach_bar h-[128px] w-full rounded-b-3xl md:hidden'>
          <div className='relative '>
            <Image src={Logo} alt='logo' className='pr-9 pt-8' />
            <div className='absolute bottom-11 right-[82px] text-center text-white '>
              <p className='text-4xl font-semibold'>وبلاگ</p>
              <p className='mt-4 text-xs font-normal'>بهترین و بروز ترین مقالات را از اینجا دنبال کنید ..</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 flex min-w-[390px] max-w-[390px] flex-wrap justify-center gap-2 px-2 md:mr-4 md:min-w-full md:max-w-full'>
        <BlogCard />
        <BlogCard />
        <BlogCard /> <BlogCard />
        <BlogCard /> <BlogCard />
      </div>
    </div>
  );
}

export default blog;
