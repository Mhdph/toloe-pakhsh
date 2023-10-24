// hooks/useAddCategory.ts

import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {toast} from 'react-hot-toast';
import {AddCategory} from '@/entities/category';
import axios from 'axios';

const apiClient = new APIClient<AddCategory>('/category/add');

const useAddCategory = () => {
  const queryClient = useQueryClient();

  return useMutation<AddCategory, Error, AddCategory>((data) => apiClient.post(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CATEGORY);
      toast.success('کتگوری با موفقیت اضافه شد');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useAddCategory;
