import {useMutation, useQueryClient} from '@tanstack/react-query';
import {CACHE_KEY_USER} from '../constants';
import User from '@/entities/user';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';

const apiClient = new APIClient<User>('/user/add');

const useUpdateUser = (data: User) => {
  return useMutation<User, Error, User>({
    mutationFn: () => apiClient.post(data),
    onSuccess: () => {
      toast.success('ثبت نام با موفقیت انجام شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUpdateUser;
