import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_COMPONENT} from '../constants';
const apiClient = new APIClient<ComponentSetting>('/component-front');

const useDelivery = (slug: number) =>
  useQuery({
    queryKey: [CACHE_KEY_COMPONENT],
    queryFn: () => apiClient.get(slug),
  });

export default useDelivery;
