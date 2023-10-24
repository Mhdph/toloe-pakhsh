import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {Discount} from '@/entities/discount';
import {CACHE_KEY_DISCOUNT} from '../constants';
import {toast} from 'react-hot-toast';
import axios from 'axios';

const apiClient = new APIClient<string | number>('/discount/delete');

const useDeleteDiscount = () => {
  const queryClient = useQueryClient();

  return useMutation<string | number, Error, string | number>((id) => apiClient.delete(id), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_DISCOUNT);
      toast.success('تخفیف با موفقیت حذف شد');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useDeleteDiscount;
