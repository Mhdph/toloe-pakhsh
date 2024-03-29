import {useMutation, useQueryClient} from '@tanstack/react-query';
import {CACHE_KEY_USER} from '../constants';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';
import {useRouter} from 'next/navigation';
import axios from 'axios';

interface FullDetails {
  firstName: string;
  lastName: string;
  address: string;
}

const apiClient = new APIClient<FullDetails>('/user/update');

const useFullDetails = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation<FullDetails, Error, FullDetails>((data) => apiClient.patch(data), {
    onSuccess: (data) => {
      queryClient.refetchQueries(CACHE_KEY_USER);
      toast.success('اطلاعات با موفقیت به روز رسانی شد');
      router.push('/');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useFullDetails;
