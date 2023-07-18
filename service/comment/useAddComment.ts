import {AddComment} from '@/entities/Comment';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {CACHE_KEY_COMMENT} from '../constants';

const apiClient = new APIClient<AddComment>('/comment/add');

const useAddComment = (data: AddComment) => {
  const queryClient = useQueryClient();

  return useMutation<AddComment, Error, AddComment>({
    mutationFn: () => apiClient.post(data),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_COMMENT);
      toast.success('نظر شما ثبت شد پس از تایید نظر شما توسط ادمین  نمایش داده خواهد شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useAddComment;
