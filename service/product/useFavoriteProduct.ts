import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_PRODUCT} from '../constants';
import {Product} from '@/entities/product';

const apiClient = new APIClient<Product>('/product/favorite');

const useFavoriteProduct = () =>
  useQuery({
    queryKey: [CACHE_KEY_PRODUCT],
    queryFn: apiClient.getAll,
  });

export default useFavoriteProduct;
