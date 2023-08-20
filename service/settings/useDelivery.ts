import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_POST} from '../constants';

interface Delivery {
  cost: string;
}

const apiClient = new APIClient<Delivery>('/post');

const useDelivery = () =>
  useQuery({
    queryKey: [CACHE_KEY_POST],
    queryFn: apiClient.getAll,
  });

export default useDelivery;
