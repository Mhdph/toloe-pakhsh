import SearchPage from '@/components/SearchPage';
import {Metadata, ResolvingMetadata} from 'next';

type Props = {
  params: {category: string};
  searchParams: {[key: string]: string | string[] | undefined};
};
//category
export async function generateMetadata({params, searchParams}: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    other: {
      canonical: `https://toloupakhsh.ir/product-category/${params.category}?page=${searchParams.page || 1}`,
    },
  };
}

function SearchWitchCategory() {
  return <SearchPage />;
}

export default SearchWitchCategory;
