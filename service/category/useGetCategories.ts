import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {Category} from '@/entities/category';

const apiClient = new APIClient<Category>('/category');

const useGetCategories = () =>
  useQuery({
    queryKey: CACHE_KEY_CATEGORY,
    queryFn: apiClient.getAll,
  });

export default useGetCategories;
