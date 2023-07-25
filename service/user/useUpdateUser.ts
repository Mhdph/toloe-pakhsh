import {useMutation, useQueryClient} from '@tanstack/react-query';
import {CACHE_KEY_USER} from '../constants';
import User, {UpdateUser} from '@/entities/user';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';

const apiClient = new APIClient<UpdateUser>('/user/update');

const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateUser, Error, UpdateUser>((data) => apiClient.post(data), {
    onSuccess: (data) => {
      queryClient.refetchQueries(CACHE_KEY_USER);
      toast.success('اطلاعات با موفقیت به روز رسانی شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUpdateUser;
