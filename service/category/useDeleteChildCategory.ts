import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';
import {CACHE_KEY_CATEGORY} from '../constants';
import {AddCategoryChild} from '@/entities/category';

const apiClient = new APIClient<AddCategoryChild>('/parent-category/delete');

const useDeleteChildCategory = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation<AddCategoryChild, Error, AddCategoryChild>({
    mutationFn: () => apiClient.delete(id),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CATEGORY);
      toast.success('کتگوری زیر شاخه با موفقیت حذف شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useDeleteChildCategory;
