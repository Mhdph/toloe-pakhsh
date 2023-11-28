import SearchPage from '@/components/SearchPage';

type Props = {
  params: {id: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata({params, searchParams}: Props) {
  const {page} = searchParams;
  const siteURL = 'https://toloupakhsh.ir';

  return {
    alternates: {
      canonical: `${siteURL}/search?page=${page}`,
    },
  };
}

export function addCanonical() {}

function Search() {
  return <SearchPage />;
}

export default Search;
