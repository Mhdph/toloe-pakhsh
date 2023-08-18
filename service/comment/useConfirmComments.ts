import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_COMMENT} from '../constants';
import {toast} from 'react-hot-toast';

interface ConfirmComments {
  verify: boolean;
}

const apiClient = new APIClient<ConfirmComments>('/comment/update');

const useConfirmComments = () => {
  const queryClient = useQueryClient();

  return useMutation<ConfirmComments, Error, {id: number; data: ConfirmComments}>(
    ({id, data}) => apiClient.update(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [CACHE_KEY_COMMENT],
        });
      },
      onError: (error) => {
        toast.error(error.message);
      },
    },
  );
};

export default useConfirmComments;
