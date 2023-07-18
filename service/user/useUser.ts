import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import User from '@/entities/user';
import {CACHE_KEY_USER} from '../constants';

const apiClient = new APIClient<User>('/user/get');

const useUser = (slug: string) =>
  useQuery({
    queryKey: [CACHE_KEY_USER, slug],
    queryFn: () => apiClient.get(slug),
  });

export default useUser;
