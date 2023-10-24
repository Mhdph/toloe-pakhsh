import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CART} from '../constants';
import {toast} from 'react-hot-toast';
import {AddCartList} from '@/entities/Cart';
import {useRouter} from 'next/navigation';
import axios from 'axios';

const apiClient = new APIClient<AddCartList[]>('/cart-row/addList');

const useAddCartList = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation<AddCartList[], Error, AddCartList[]>((data) => apiClient.post(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CART);
      router.push('/shopingbasket');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useAddCartList;
