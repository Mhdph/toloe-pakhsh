import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {CACHE_KEY_SHOP} from '../constants';
import axios from 'axios';

interface AddDiscount {
  code: string;
}

const apiClient = new APIClient<AddDiscount>('discount-use/validateDiscount');

const useUserDiscount = () => {
  const queryClient = useQueryClient();

  return useMutation<AddDiscount, Error, AddDiscount>((data) => apiClient.post(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CACHE_KEY_SHOP],
      });
      toast.success('تخفیف با موفقیت اعمال شد');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useUserDiscount;
