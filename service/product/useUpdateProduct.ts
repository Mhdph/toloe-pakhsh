import {AddProduct, Product} from '@/entities/product';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {CACHE_KEY_PRODUCT} from '../constants';

const apiClient = new APIClient<AddProduct>('product/update');

const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<AddProduct, Error, {id: number; data: AddProduct}>(({data, id}) => apiClient.update(id, data), {
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
