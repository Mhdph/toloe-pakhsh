import SearchPage from '@/components/SearchPage';
import React from 'react';
//subcategory

type Props = {
  params: {subcategory: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata({params, searchParams}: Props) {
  const siteURL = 'https://toloupakhsh.ir';

  return {
    alternates: {
      canonical: `${siteURL}/${params.subcategory}?page=${searchParams.page}`,
    },
  };
}

function page() {
  return <SearchPage />;
}

export default page;
