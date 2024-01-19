import SearchPage from '@/components/SearchPage';

type Props = {
  params: {category: string};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata({params, searchParams}: Props) {
  const siteURL = 'https://toloupakhsh.ir';

  return {
    alternates: {
      canonical: `${siteURL}/${params.category}?page=${searchParams.page}`,
    },
  };
}

function SearchWitchCategory() {
  return <SearchPage />;
}

export default SearchWitchCategory;
