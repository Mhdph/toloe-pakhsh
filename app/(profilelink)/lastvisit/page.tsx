import Navbar from '@/components/Navbar';
import BackgroundTitle from '@/components/ui/BackgroundTitle';
import Card from '@/components/ui/Card';
import React from 'react';

function latest() {
  return (
    <div>
      <Navbar />
      <BackgroundTitle name='بازدید های اخیر ' />
      <div className='mt-6 grid grid-cols-2 gap-8 pr-2.5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        <Card />
        <Card />
        <Card /> <Card />
      </div>
    </div>
  );
}

export default latest;
