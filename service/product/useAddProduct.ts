import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {CACHE_KEY_PRODUCT} from '../constants';
import {Product} from '@/entities/product';

const apiClient = new APIClient<Product>('/product/add');

const useAddProduct = (data: Product) => {
  const queryClient = useQueryClient();

  return useMutation<Product, Error, Product>({
    mutationFn: () => apiClient.post(data),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_PRODUCT);
      toast.success('محصول با موفقیت اضافه شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useAddProduct;
