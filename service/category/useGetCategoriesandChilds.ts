import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY, CACHE_KEY_CATEGORYENGLISHNAME} from '../constants';
import {CategoryandChilds} from '@/entities/category';
import useCategoryStore from '@/store/category';

const apiClient = new APIClient<CategoryandChilds>('/category/hierarchy');

interface categoryQuery {
  take?: number;
  skip?: number;
}

const useGetCategoriesAndChilds = () => {
  return useQuery({
    queryKey: [CACHE_KEY_CATEGORYENGLISHNAME],
    queryFn: apiClient.getAll,
    retry: 3, // Retry the request up to 3 times before considering it failed
    refetchOnMount: true, // Refetch data when the component using this hook mounts
    onError: (error) => {
      // Handle errors, e.g., show a toast notification
      console.error('Error fetching categories:', error);
    },
  });
};

export default useGetCategoriesAndChilds;
