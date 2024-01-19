'use client';

import Link from 'next/link';
import React from 'react';

function NotFound() {
  return (
    <div>
      <h1>صفحه ای یافت نشد!!</h1>
      <div>
        <Link href='/'>صفحه اصلی</Link>
      </div>
    </div>
  );
}
export default NotFound;
