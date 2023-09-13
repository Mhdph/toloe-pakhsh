import {Cart} from '@/entities/Cart';
import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_SHOP} from '../constants';

type CartArray = Cart; // Array type based on the Cart interface

const apiClient = new APIClient<CartArray>('/cart/listUserCart?state=open');

const useGetCart = () =>
  useQuery({
    queryKey: [CACHE_KEY_SHOP],
    queryFn: apiClient.getAll,
  });

export default useGetCart;
