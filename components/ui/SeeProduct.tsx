import Link from 'next/link';
import React from 'react';

interface SeeProductProps {
  link: string;
}

function SeeProduct({link}: SeeProductProps) {
  return (
    <div className='flex justify-center text-white md:justify-end'>
      <button className='btn_primary mb-16 mt-48 h-9 w-[350px] text-xs font-extrabold md:w-[196px]'>
        <Link href={`product-category/${link}`}>مشاهده محصولات</Link>
      </button>
    </div>
  );
}

export default SeeProduct;
