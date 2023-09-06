import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {CategoryandChilds} from '@/entities/category';
import useCategoryStore from '@/store/category';

const apiClient = new APIClient<CategoryandChilds>('/category/hierarchy');

interface categoryQuery {
  take?: number;
  skip?: number;
}

const useGetCategoriesAndChilds = () => {
  const categoryQuery = useCategoryStore((s) => s.categoryQuery);
  const params: categoryQuery = {};

  if (categoryQuery.skip) {
    params.skip = categoryQuery.skip;
  }

  return useQuery({
    queryKey: [CACHE_KEY_CATEGORY, categoryQuery.skip],
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
