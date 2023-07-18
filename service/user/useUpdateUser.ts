import {useMutation, useQueryClient} from '@tanstack/react-query';
import {CACHE_KEY_USER} from '../constants';
import User from '@/entities/user';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';

const apiClient = new APIClient<User>('/user/update');

const useUpdateUser = (id: string, data: User) => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, User>({
    mutationFn: () => apiClient.update(id, data),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_USER);
      toast.success('اطلاعات با موفقیت به روز رسانی شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUpdateUser;
