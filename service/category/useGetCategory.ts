import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {Category} from '@/entities/category';

const apiClient = new APIClient<Category>('/category');

const useGetCategory = (slug: number) =>
  useQuery({
    queryKey: [CACHE_KEY_CATEGORY, slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGetCategory;
