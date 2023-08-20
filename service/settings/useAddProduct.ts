import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {CACHE_KEY_COMPONENT} from '../constants';

const apiClient = new APIClient<ComponentSetting>('/component-front');

const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<ComponentSetting, Error, ComponentSetting>((data) => apiClient.post(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_COMPONENT);
      toast.success('کامپوننت با موفقیت اضافه شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useAddProduct;
