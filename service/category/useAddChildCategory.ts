import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {toast} from 'react-hot-toast';
import {AddCategoryChild} from '@/entities/category';
import axios from 'axios';

const apiClient = new APIClient<AddCategoryChild>('/parent-category/add');

const useAddChildCategory = () => {
  const queryClient = useQueryClient();

  return useMutation<AddCategoryChild, Error, AddCategoryChild>((data) => apiClient.post(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CATEGORY);
      toast.success('کتگوری زیر شاخه با موفقیت اضافه شد');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useAddChildCategory;
