import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {DiscountAdd, Discount} from '@/entities/discount';
import {CACHE_KEY_DISCOUNT} from '../constants';
import {toast} from 'react-hot-toast';
import axios from 'axios';

const apiClient = new APIClient<DiscountAdd>('discount/update');

const useUpdateDiscount = (id: string, data: DiscountAdd) => {
  const queryClient = useQueryClient();

  return useMutation<DiscountAdd, Error, Discount>({
    mutationFn: () => apiClient.update(id, data),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_DISCOUNT);
      toast.success('تخفیف با موفقیت اپدیت شد');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useUpdateDiscount;
