'use client';

import React, {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar';
import {Toaster} from 'react-hot-toast';

const queryClient = new QueryClient();

interface Props {
  children?: ReactNode;
}

const QueryWrapper = ({children}: Props) => (
  <QueryClientProvider client={queryClient}>
    <Toaster position='top-left' />
    {children}
    <ProgressBar height='4px' color='#fe595e' options={{showSpinner: false}} shallowRouting />
  </QueryClientProvider>
);

export default QueryWrapper;
