import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_COMPONENT} from '../constants';

const apiClient = new APIClient<ComponentSetting>('/component-front');

const useComponents = () =>
  useQuery({
    queryKey: CACHE_KEY_COMPONENT,
    queryFn: apiClient.getAll,
  });

export default useComponents;
