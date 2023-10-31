'use client';

import {useSearchParams} from 'next/navigation';
import {useRouter} from 'next/navigation';
import React from 'react';

function NotFound() {
  React.useEffect(() => {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Split the path and extract the value after "localhost:3000"
    const parts = currentPath.split('/');
    const valueAfterLocalhost = parts[1]; // Index 0 will be an empty string
    window.location.replace(`https://mag.toloupakhsh.ir/${decodeURIComponent(valueAfterLocalhost)}`);
  }, []);

  return <div className='flex'></div>;
}

export default NotFound;
