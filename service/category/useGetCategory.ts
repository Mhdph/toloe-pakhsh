import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {Category} from '@/entities/category';

interface CategorySingle {
  data: {
    id: number;
    name: string;
    picture: string;
  };
}

const apiClient = new APIClient<CategorySingle>('/category/getCategory');

const useGetCategory = (slug: number) =>
  useQuery({
    queryKey: [CACHE_KEY_CATEGORY, slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGetCategory;
