import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {DiscountAdd, Discount} from '@/entities/discount';
import {CACHE_KEY_CART, CACHE_KEY_DISCOUNT} from '../constants';
import {toast} from 'react-hot-toast';

interface AddDiscount {
  code: string;
}

const apiClient = new APIClient<AddDiscount>('discount-use/validateDiscount');

const useUserDiscount = () => {
  const queryClient = useQueryClient();

  return useMutation<AddDiscount, Error, AddDiscount>((data) => apiClient.post(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CART);
      toast.success('تخفیف با موفقیت اعمال شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUserDiscount;
