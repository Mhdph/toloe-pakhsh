import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {toast} from 'react-hot-toast';

export interface UpdateCategory {
  name: string;
  picture?: string;
}

const apiClient = new APIClient<UpdateCategory>('/category/update');

const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateCategory, Error, {id: number; data: UpdateCategory}>(
    ({id, data}) => apiClient.update(id, data),
    {
      onSuccess: () => {
        queryClient.refetchQueries(CACHE_KEY_CATEGORY);
        toast.success('کتگوری با موفقیت به روز رسانی شد');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    },
  );
};

export default useUpdateCategory;
