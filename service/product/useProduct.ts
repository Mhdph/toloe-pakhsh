import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_PRODUCT} from '../constants';
import {Product} from '@/entities/product';

const apiClient = new APIClient<Product>('/product/getbyid');

const useProduct = (slug: number) =>
  useQuery({
    queryKey: [CACHE_KEY_PRODUCT],
    queryFn: () => apiClient.get(slug),
  });

export default useProduct;
