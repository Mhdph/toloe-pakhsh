import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CART} from '../constants';
import {Cart} from '@/entities/Cart';

type CartArray = Cart; // Array type based on the Cart interface

const apiClient = new APIClient<CartArray>('/cart/listUserCart?state=open');

const useGetCart = () =>
  useQuery({
    queryKey: [CACHE_KEY_CART],
    queryFn: apiClient.getAll,
  });

export default useGetCart;
