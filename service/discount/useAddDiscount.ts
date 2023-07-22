import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {DiscountAdd, Discount} from '@/entities/discount';
import {CACHE_KEY_DISCOUNT} from '../constants';
import {toast} from 'react-hot-toast';

const apiClient = new APIClient<DiscountAdd>('discount/add');

const useAddDiscount = () => {
  const queryClient = useQueryClient();

  return useMutation<DiscountAdd, Error, DiscountAdd>((data) => apiClient.post(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_DISCOUNT);
      toast.success('تخفیف با موفقیت اضافه شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useAddDiscount;
