import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {CACHE_KEY_COMPONENT} from '../constants';
import axios from 'axios';

const apiClient = new APIClient<ComponentSetting>('/component-front');

const useUpdateComponents = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation<ComponentSetting, Error, ComponentSetting>((data) => apiClient.update(id, data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_COMPONENT);
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useUpdateComponents;
