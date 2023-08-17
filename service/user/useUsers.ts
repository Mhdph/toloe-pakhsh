import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import User from '@/entities/user';
import {CACHE_KEY_USER} from '../constants';
import useDebounce from '@/hooks/useDebounce';
import useUserSerachStore from '@/store/userSerach';

const apiClient = new APIClient<User>('/user/searchUser');

interface UserQuery {
  keyword?: string;
}

const useUsers = () => {
  const userQuery = useUserSerachStore((s) => s.userQuery);
  const debouncedCategory = useDebounce(userQuery.keyword, 3000);

  const params: UserQuery = {};

  if (debouncedCategory) {
    params.keyword = debouncedCategory;
  }

  return useQuery({
    queryKey: [CACHE_KEY_USER, userQuery.keyword],
    queryFn: () =>
      apiClient.getAll({
        params,
      }),
  });
};

export default useUsers;
