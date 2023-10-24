import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {toast} from 'react-hot-toast';
import axios from 'axios';

interface Payment {
  cartId: number | undefined;
}

const apiClient = new APIClient<Payment>('/pay/add');

const usePayment = () => {
  const queryClient = useQueryClient();

  return useMutation<Payment, Error, Payment>((data) => apiClient.post(data), {
    onSuccess: (data: any) => {
      queryClient.refetchQueries(CACHE_KEY_CATEGORY);
      console.log(data.data);
      window.location.href = data.data;
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default usePayment;
