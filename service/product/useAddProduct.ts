import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {CACHE_KEY_PRODUCT} from '../constants';
import {AddProduct} from '@/entities/product';
import axios from 'axios';

const apiClient = new APIClient<AddProduct>('/product/add');

const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<AddProduct, Error, AddProduct>((data) => apiClient.post(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_PRODUCT);
      toast.success('محصول با موفقیت اضافه شد');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useAddProduct;
