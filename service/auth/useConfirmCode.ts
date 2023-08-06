import {useMutation} from '@tanstack/react-query';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import {useRouter} from 'next/navigation';
import {toast} from 'react-hot-toast';
import APIClient from '../api-client';
import {ConfirmCode} from '@/entities/auth';

interface ConfirmUser {
  token: string;
}

type token = {
  userId: string;
  role: string;
};

const apiClient = new APIClient<ConfirmUser>('/auth/login');

const useConfirmCode = () => {
  const router = useRouter();

  return useMutation<ConfirmUser, Error, ConfirmCode>(
    (confirmCodeData) => {
      // Map properties from ConfirmCode to ConfirmUser
      const confirmUserData: ConfirmUser = {
        token: confirmCodeData.code,
      };

      return apiClient.post(confirmUserData);
    },
    {
      onSuccess: (data) => {
        Cookies.set('token', data.token);
        const decoded: token = jwt_decode(data.token);
        Cookies.set('userId', decoded.userId);
        router.push('/fulldetails');
      },
      onError: (error) => {
        toast.error(error.message);
      },
    },
  );
};

export default useConfirmCode;
