import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CART} from '../constants';
import {toast} from 'react-hot-toast';
import {AddComment} from '@/entities/Comment';

const apiClient = new APIClient<AddComment>('/comment/add');

const useAddComment = (data: AddComment) => {
  const queryClient = useQueryClient();

  return useMutation<AddComment, Error, AddComment>({
    mutationFn: () => apiClient.post(data),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CART);
      toast.success('نظر شما ثبت شد پس از تایید نظر شما توسط ادمین  نمایش داده خواهد شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useAddComment;
