import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';
import {CACHE_KEY_CATEGORY, CACHE_KEY_COMPONENT} from '../constants';

const apiClient = new APIClient<string | number>('/component-front');

const useDeleteSlider = () => {
  const queryClient = useQueryClient();

  return useMutation<string | number, Error, string | number>((data) => apiClient.delete(data), {
    onSuccess: (data) => {
      queryClient.refetchQueries(CACHE_KEY_COMPONENT);
      toast.success('اطلاعات با موفقیت به روز رسانی شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useDeleteSlider;
