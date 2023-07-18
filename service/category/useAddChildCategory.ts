import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {toast} from 'react-hot-toast';
import {AddCategoryChild} from '@/entities/category';

const apiClient = new APIClient<AddCategoryChild>('/parent-category/add');

const useAddChildCategory = (data: AddCategoryChild) => {
  const queryClient = useQueryClient();

  return useMutation<AddCategoryChild, Error, AddCategoryChild>({
    mutationFn: () => apiClient.post(data),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CATEGORY);
      toast.success('کتگوری زیر شاخه با موفقیت اضافه شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useAddChildCategory;
