import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {CACHE_KEY_COMPONENT} from '../constants';
import axios from 'axios';

const apiClient = new APIClient<AddComponentSetting>('/component-front');

const useAddSlider = () => {
  const queryClient = useQueryClient();

  return useMutation<AddComponentSetting, Error, AddComponentSetting>((data) => apiClient.post(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_COMPONENT);
      toast.success('کامپوننت با موفقیت اضافه شد');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useAddSlider;
