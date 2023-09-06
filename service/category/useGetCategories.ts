import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {Category} from '@/entities/category';
import useCategoryStore from '@/store/category';

const apiClient = new APIClient<Category>('/category');
interface categoryQuery {
  take?: number;
  skip?: number;
}
const useGetCategories = () => {
  const categoryQuery = useCategoryStore((s) => s.categoryQuery);
  const params: categoryQuery = {};
  console.log(categoryQuery);
  if (categoryQuery.take) {
    params.take = categoryQuery.take;
  }
  return useQuery({
    queryKey: [CACHE_KEY_CATEGORY, categoryQuery.take],
    queryFn: () =>
      apiClient.getAll({
        params,
      }),
  });
};
export default useGetCategories;
