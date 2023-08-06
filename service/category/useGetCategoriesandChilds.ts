import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {CategoryandChilds} from '@/entities/category';

const apiClient = new APIClient<CategoryandChilds>('/category/hierarchy');

const useGetCategoriesAndChilds = () => {
  return useQuery({
    queryKey: CACHE_KEY_CATEGORY,
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
