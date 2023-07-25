import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import User from '@/entities/user';
import {CACHE_KEY_CATEGORY} from '../constants';

const apiClient = new APIClient<User>('/category');

const useGetCategory = (slug: string) =>
  useQuery({
    queryKey: [CACHE_KEY_CATEGORY, slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGetCategory;
