import {useQuery} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_COMMENT} from '../constants';
import {Comment} from '@/entities/Comment';

const apiClient = new APIClient<Comment>('/comment');

const UseGetComments = () =>
  useQuery({
    queryKey: [CACHE_KEY_COMMENT],
    queryFn: () => apiClient.getAll,
  });

export default UseGetComments;