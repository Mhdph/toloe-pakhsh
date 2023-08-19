import {Category} from '@/entities/category';
import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_ORDER} from '../constants';
import {Cart} from '@/entities/Cart';

const apiClient = new APIClient<Cart>('/cart/listOrderCarts');

const useGetUserOrder = () =>
  useQuery({
    queryKey: CACHE_KEY_ORDER,
    queryFn: apiClient.getAll,
  });

export default useGetUserOrder;
