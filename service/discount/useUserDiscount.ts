import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {CACHE_KEY_SHOP} from '../constants';

interface AddDiscount {
  code: string;
}

const apiClient = new APIClient<AddDiscount>('discount-use/validateDiscount');

const useUserDiscount = () => {
  const queryClient = useQueryClient();

  return useMutation<AddDiscount, Error, AddDiscount>((data) => apiClient.post(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_SHOP);
      toast.success('تخفیف با موفقیت اعمال شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUserDiscount;
