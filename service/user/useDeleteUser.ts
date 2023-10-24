import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_DISCOUNT} from '../constants';
import {toast} from 'react-hot-toast';
import User from '@/entities/user';
import axios from 'axios';

const apiClient = new APIClient<User>('/user/delete');

const useDeleteDiscount = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, User>({
    mutationFn: () => apiClient.delete(id),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_DISCOUNT);
      toast.success('کاربر با موفقیت حذف شد');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useDeleteDiscount;
