import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getClient } from '../queryClient';
import '../scss/index.scss'
import Gnb from '../components/gnb';
import { worker } from '../mocks/browser';

const Layout: React.FC = () => {

  if(import.meta.env.DEV) {
    worker.start();
  }

  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={'loading...'}>
        <Gnb />
        <Outlet />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Layout;
