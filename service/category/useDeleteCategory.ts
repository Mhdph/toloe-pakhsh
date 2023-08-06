import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';
import {CACHE_KEY_CATEGORY} from '../constants';

const apiClient = new APIClient<string | number>('/parent-category/delete');

const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation<string | number, Error, string | number>((data) => apiClient.delete(data), {
    onSuccess: (data) => {
      queryClient.refetchQueries(CACHE_KEY_CATEGORY);
      toast.success('اطلاعات با موفقیت به روز رسانی شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useDeleteCategory;
