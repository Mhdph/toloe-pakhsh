import SearchPage from '@/components/SearchPage';
import {Metadata, ResolvingMetadata} from 'next';
import React from 'react';
//subcategory

type Props = {
  params: {category: string; subcategory: string};
  searchParams: {[key: string]: string | string[] | undefined};
};
//category
export async function generateMetadata({params, searchParams}: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    other: {
      canonical: `https://toloupakhsh.ir/product-category/${params.category}/${params.subcategory}?page=${
        searchParams.page || 1
      }`,
    },
  };
}

function page() {
  return <SearchPage />;
}

export default page;
