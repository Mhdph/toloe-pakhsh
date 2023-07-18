import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';
import {CACHE_KEY_CATEGORY} from '../constants';
import {AddCategory} from '@/entities/category';

const apiClient = new APIClient<AddCategory>('/parent-category/delete');

const useDeleteCategory = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation<AddCategory, Error, AddCategory>({
    mutationFn: () => apiClient.delete(id),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CATEGORY);
      toast.success('کتگوری  با موفقیت حذف شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useDeleteCategory;
