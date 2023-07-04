import {api} from '@/lib/config';

interface LoginProps {
  phone: string;
}

interface ConfirmCode {
  phone: string;
  code: string;
}

export const LoginFn = async (user: LoginProps) => {
  const response = await api.post(`/user/add`, user);
  return response.data;
};

export const ConfirmCodeFn = async (user: ConfirmCode) => {
  const response = await api.post(`/auth/login`, user);
  return response.data;
};
