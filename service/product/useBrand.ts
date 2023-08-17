import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_PRODUCT} from '../constants';

interface Brand {
  data: string[];
}

const apiClient = new APIClient<any>('/product/brands');

const useBrand = () =>
  useQuery({
    queryKey: [CACHE_KEY_PRODUCT],
    queryFn: apiClient.getAll,
  });

export default useBrand;
