import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {toast} from 'react-hot-toast';
import axios from 'axios';

export interface UpdateCategory {
  name: string;
  picture?: string;
  englishName: string;
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
        if (error && axios.isAxiosError(error)) {
          toast.error(error.response?.data.message);
        }
      },
    },
  );
};

export default useUpdateCategory;
