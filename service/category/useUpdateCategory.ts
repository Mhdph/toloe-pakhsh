import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {toast} from 'react-hot-toast';
import {AddCategory} from '@/entities/category';

const apiClient = new APIClient<AddCategory>('/category/update');

const useAddCategory = (id: string, data: AddCategory) => {
  const queryClient = useQueryClient();

  return useMutation<AddCategory, Error, AddCategory>({
    mutationFn: () => apiClient.update(id, data),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CATEGORY);
      toast.success('کتگوری با موفقیت به روز رسانی شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useAddCategory;
