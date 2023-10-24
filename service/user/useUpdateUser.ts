import {useMutation, useQueryClient} from '@tanstack/react-query';
import {CACHE_KEY_USER} from '../constants';
import User, {UpdateUser} from '@/entities/user';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';
import axios from 'axios';

const apiClient = new APIClient<UpdateUser>('/user/update');

const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateUser, Error, UpdateUser>((data) => apiClient.patch(data), {
    onSuccess: (data) => {
      queryClient.refetchQueries(CACHE_KEY_USER);
      toast.success('اطلاعات با موفقیت به روز رسانی شد');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useUpdateUser;
