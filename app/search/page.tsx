import SearchPage from '@/components/SearchPage';
import {Metadata, ResolvingMetadata} from 'next';

type Props = {
  params: {page: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata({params, searchParams}: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    other: {
      canonical: `https://toloupakhsh.ir/search?page=${searchParams.page}`,
    },
  };
}
function Search() {
  return <SearchPage />;
}

export default Search;
