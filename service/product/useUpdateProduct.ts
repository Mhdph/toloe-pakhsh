import {Product} from '@/entities/product';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {CACHE_KEY_PRODUCT} from '../constants';

const apiClient = new APIClient<Product>('product/update');

const useUpdateProduct = (id: string, data: Product) => {
  const queryClient = useQueryClient();

  return useMutation<Product, Error, Product>({
    mutationFn: () => apiClient.update(id, data),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_PRODUCT);
      toast.success('محصول با موفقیت اپدیت شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUpdateProduct;
