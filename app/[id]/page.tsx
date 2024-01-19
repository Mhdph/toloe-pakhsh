'use client';
import React, {useState} from 'react';
import NotFound from '../not-found/page';

function DynamicPage() {
  const [valueAfterLocalhost, setValueAfterLocalhost] = useState('');
  React.useEffect(() => {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Split the path and extract the value after "localhost:3000"
    const parts = currentPath.split('/');
    const valueAfterLocalhost = parts[1]; // Index 0 will be an empty string
    setValueAfterLocalhost(valueAfterLocalhost);
    if (valueAfterLocalhost != 'not-found') {
      window.location.replace(`https://mag.toloupakhsh.ir/${decodeURIComponent(valueAfterLocalhost)}`);
    }
  }, []);
  return <div>{valueAfterLocalhost === 'not-found' ? <NotFound /> : null}</div>;
}

export default DynamicPage;
