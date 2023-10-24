import {Product} from '@/entities/product';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {CACHE_KEY_PRODUCT} from '../constants';
import axios from 'axios';

const apiClient = new APIClient<Product>('/product/delete');

const useDeleteProduct = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation<Product, Error, Product>({
    mutationFn: () => apiClient.delete(id),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_PRODUCT);
      toast.success('محصول با موفقیت حذف شد');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useDeleteProduct;
