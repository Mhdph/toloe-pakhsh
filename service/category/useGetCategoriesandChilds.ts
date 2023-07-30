import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {CategoryandChilds} from '@/entities/category';

const apiClient = new APIClient<CategoryandChilds>('/category/hierarchy');

const useGetCategoriesAndChilds = () =>
  useQuery({
    queryKey: CACHE_KEY_CATEGORY,
    queryFn: apiClient.getAll,
  });

export default useGetCategoriesAndChilds;
