import {Product} from '@/entities/product';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {CACHE_KEY_PRODUCT} from '../constants';
import axios from 'axios';

interface UpdateProduct {
  favorite: number[];
}

const apiClient = new APIClient<UpdateProduct>('user/update');

const useAddFavouriteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateProduct, Error, UpdateProduct>((data) => apiClient.patch(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_PRODUCT);
      toast.success('محصول با موفقیت به موارد دلخواه اضافه شد');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useAddFavouriteProduct;
