import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import User from '@/entities/user';
import {CACHE_KEY_DISCOUNT} from '../constants';

const apiClient = new APIClient<User>('/discount');

const useDiscount = () =>
  useQuery({
    queryKey: [CACHE_KEY_DISCOUNT],
    queryFn: () => apiClient.getAll,
  });

export default useDiscount;
