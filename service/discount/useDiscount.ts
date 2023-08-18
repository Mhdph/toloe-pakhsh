import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import User from '@/entities/user';
import {CACHE_KEY_DISCOUNT} from '../constants';

export interface Discount {
  categoryId: string;
  code: any;
  enable: any;
  expireTime: string;
  id: number;
  name: string;
  percentage: number;
}

const apiClient = new APIClient<Discount>('/discount');

const useDiscount = () =>
  useQuery({
    queryKey: [CACHE_KEY_DISCOUNT],
    queryFn: apiClient.getAll,
  });

export default useDiscount;
