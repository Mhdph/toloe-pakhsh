import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CART} from '../constants';
import {Cart} from '@/entities/Cart';

const apiClient = new APIClient<Cart>('/cart/openCart');

const useGetCart = () =>
  useQuery({
    queryKey: [CACHE_KEY_CART],
    queryFn: () => apiClient.getAll,
  });

export default useGetCart;
